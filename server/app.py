#!/usr/bin/env python3
import base64
from flask import redirect, render_template, request, session, make_response, jsonify, abort, send_from_directory, url_for
from flask_restful import Resource
from sqlalchemy.exc import IntegrityError
from config import app, db, api
from models import User, Recipe, Ingredient, Recipe_Ingredient, Recipe_User, Dietary_No
from PIL import Image
import io
import pytesseract
import codecs
import os
import imghdr
import uuid
from werkzeug.utils import secure_filename

def validate_image(stream):
    header = stream.read(512)
    stream.seek(0)
    format = imghdr.what(None, header)
    if not format:
        return None
    return '.' + (format if format != 'jpeg' else 'jpg')

# @app.before_request
# def check_log_status():
#     open_access_list = [
#         'signup',
#         'login',
#         'check_session',
#         'recipes',
#         'get_image_ocr'
#     ]
#     if request.endpoint not in open_access_list and (not session.get('user_id')):
#         return make_response({"error": "401 Unauthorized"}, 401)
    
class CheckSession(Resource):
    def get(self):
        if 'user_id' in session:
            user_id = session['user_id']
            if user_id:
                user=db.session.get(User, user_id)
                if user:
                    return make_response(user.to_dict(rules=("-recipe_users","-dietary_nos")), 200)
        return make_response({"error": "Unauthorized: Must login"}, 401)

class Signup(Resource):
    def post(self):
        params = request.get_json()
        f_name=params.get('f_name')
        l_name=params.get('l_name')
        username = params.get('username')
        password = params.get('password')
        email = params.get('email')
        zipcode = params.get('zipcode')
        
        user = User(
            f_name=f_name,
            l_name=l_name,
            username=username,
            email = email,
            zipcode = zipcode,
        )
        user.password_hash = password
        try:
            db.session.add(user)
            db.session.commit()
            session['user_id'] = user.id
            return make_response(user.to_dict(), 201)
        except IntegrityError as e:
            print(e)
            return make_response({"error": "422 Unprocessable Entity", "details": str(e)}, 422)


class Login(Resource):
    def post(self):
        params = request.json
        user = User.query.filter(User.username == params.get('username')).first()
        if not user:
            return make_response({"Error": "User not found."}, 401)
        if user.authenticate(params.get('password')):
            session['user_id'] = user.id
            return make_response(user.to_dict(rules=("-recipe_users","-dietary_nos")))
        else:
            return make_response({"Error": "Invalid password"}, 401)
       
class Logout(Resource):
    def delete(self):
        print("trying to log out")
        session.pop('user_id', None)
        return make_response({}, 204)
    
class Home(Resource):
    def get(self):
        pass
    
class Users(Resource):
    def get(self):
        users = User.query.all()
        user_list = [user.to_dict() for user in users]
        return make_response(user_list, 200)
    
    def post(self):
        params = request.get_json()
        
        username = params.get('username')
        password = params.get('password')
        f_name = params.get('f_name')
        l_name= params.get('l_name')
        email = params.get('email')
        # phone_number = params.get('phone_number')
        zipcode = params.get('zipcode')
        
        user = User(
            username = username,
            f_name = f_name,
            l_name = l_name,
            email = email,
            # phone_number = phone_number,
            zipcode = zipcode
        )
        user.password_hash = password
        
        try:
            db.session.add(user)
            db.session.commit()
            session['user_id'] = user.id
            return make_response(user.to_dict(), 201)
        except IntegrityError:
            return make_response({"error": "422 Unprocessable Entity"}, 422)
        
class UserById(Resource):
    def get(self, id):
        user = db.session.get(User, id)
        if user:
            return make_response(user.to_dict(rules=("-recipe_user","-dietary_nos")), 200)
        else:
            return make_response({'error': 'User not found'}, 404)
        
    def patch(self, id):
        user = db.session.get(User, id)
        if user:
            params = request.json
            for attr in params:
                setattr(user , attr, params[attr])
            db.session.commit()
            return make_response(user.to_dict())
    
    def delete(self, id):
        user = db.session.get(User, id)
        if user:
            db.session.delete(user)
            db.session.commit()
            return make_response({"message": "User deleted successfully."}, 204)
        else:
            return make_response({"error": "User not found"}, 404)

class Recipes(Resource):
    def get(self):
        recipes = Recipe.query.all()
        recipe_list = [recipe.to_dict(rules = ("-recipe_users.user", "-recipe_users.recipe","-recipe_ingredients.ingredient.recipe_ingredients", "-recipe_ingredients.ingredient.dietary_nos", "-recipe_ingredients.recipe")) for recipe in recipes]
        return make_response(recipe_list, 200)

        
class RecipeById(Resource):
    def get(self, id):
        recipe = db.session.get(Recipe, id)
        if recipe:
            return make_response(recipe.to_dict(rules = ("-recipe_users", "-recipe_ingredients.ingredient.recipe_ingredients", "-recipe_ingredients.ingredient.dietary_nos", "-recipe_ingredients.recipe")), 200)
        else:
            return make_response({'error': 'Recipe not found'}, 404)
        
    def patch(self, id):
        recipe = db.session.get(Recipe, id)
        if recipe:
            params = request.json
            print(params)
            for attr in params:
                setattr(recipe , attr, params[attr])
            db.session.commit()
            Recipe_Ingredient.query.filter_by(recipe_id = recipe.id).delete()
            db.session.commit()
            for ri in params["ingredients"]:
                    ingredient=Ingredient.query.filter_by(name=ri['ingredient'].lower()).first()
                    if not ingredient:
                        ingredient=Ingredient(
                            name=ri['ingredient'].lower(),
                        )
                        db.session.add(ingredient)
                        db.session.commit()
                    print(ri['measurement'])
                    recipe_ingredient = Recipe_Ingredient(
                        weight_of_ingr=ri['amount'],
                        weight_type=ri['measurement'].strip(),
                        recipe_id=recipe.id,
                        ingredient_id = ingredient.id
                        )
                    print(recipe_ingredient)
                    db.session.add(recipe_ingredient)
                    print(recipe_ingredient)
                    db.session.commit()      
            return make_response(recipe.to_dict(rules = ("-recipe_users.user", "-recipe_users.recipe")))
    
    def delete(self, id):
        recipe = db.session.get(Recipe, id)
        if recipe:
            db.session.delete(recipe)
            db.session.commit()
            return make_response({"message": "Recipe deleted successfully."}, 204)
        else:
            return make_response({"error": "Recipe not found"}, 404)

class CreateRecipes(Resource):
    def post(self):
        data = request.json
        try:
            recipe_ingredients=data['ingredients']
            recipe = Recipe(
                title=data['title'],
                instruction=data['instructions'],
                category=data['category'],
                public=data['public_private']
            )
            db.session.add(recipe)
            db.session.commit()
            if recipe:
                for ri in recipe_ingredients:
                    ingredient=Ingredient.query.filter_by(name=ri['ingredient'].lower()).first()
                    if not ingredient:
                        ingredient=Ingredient(
                            name=ri['ingredient'].lower(),
                        )
                        db.session.add(ingredient)
                        db.session.commit()
                    print(ri['measurement'])
                    recipe_ingredient = Recipe_Ingredient(
                        weight_of_ingr=ri['amount'],
                        weight_type=ri['measurement'].strip(),
                        recipe_id=recipe.id,
                        ingredient_id = ingredient.id
                        )
                    print(recipe_ingredient)
                    db.session.add(recipe_ingredient)
                    print(recipe_ingredient)
                    db.session.commit()      
                recipe_user = Recipe_User(
                    recipe_id=recipe.id,
                    user_id=session['user_id'],
                    creator=True
                )
                db.session.add(recipe_user)
                db.session.commit()
            return make_response(recipe.to_dict(rules = ("-recipe_users", "-recipe_ingredients")), 201)
        except Exception as e:
            app.logger.error(f"Error creating recipe: {e}")
            return make_response({"error": "Could not create Recipe", "details": str(e)}, 400)
        
class LikedRecipe(Resource):
    def post(self):
        data = request.json
        recipe_user = Recipe_User(
                    recipe_id=data['recipe_id'],
                    user_id=data['user_id'],
                    creator=False
                )
        print(recipe_user)
        db.session.add(recipe_user)
        db.session.commit()
        return make_response(recipe_user.to_dict(rules=('-recipe', '-user')),200)
    
class DeleteLikedRecipe(Resource):
    def delete(self, id):
        recipe_user = db.session.get(Recipe_User, id)
        if recipe_user:
            db.session.delete(recipe_user)
            db.session.commit()
            return make_response({"message": "Recipe unliked successfully"}, 204)
        else:
            return make_response({"error": "Recipe not found"}, 404)
        
class MyRecipes(Resource):
    def get(self, id):
        recipes = Recipe_User.query.filter_by(user_id=id)
        recipe_users = [recipe.to_dict(rules=("-recipe.recipe_users.recipe", "-recipe.recipe_users.user","-recipe.recipe_ingredients", "-user", )) for recipe in recipes]
        return make_response([recipe_user['recipe'] for recipe_user in recipe_users])
        
class GetImageOcr(Resource):
    def get(self):
        test = (pytesseract.image_to_string(Image.open('test2.png')))
        return make_response(test)
    
    def post(self):
        data = request.json
        fileName = data["fileName"]
        fileData = data["imageData"]
        tempFileName = ""
        try:
            if ".png" in fileName:
                tempFileName = "temp.png"
            elif ".jpeg" in fileName:
                tempFileName = "temp.jpeg"
            elif ".jpg" in fileName:
                tempFileName = "temp.jpg"      
            with open(tempFileName, "wb") as binary_file:
                binary_file.write(base64.b64decode(fileData, validate=True))
            ocr =(pytesseract.image_to_string(Image.open(tempFileName)))
            return (jsonify(ocr))
        except Exception as e:
            print(e)
            
class Images(Resource):
    def post(self):
        if 'image' in request.files:
            image = request.files['image']
            filename = secure_filename(image.filename)
            print(image)
            print(filename)
            if filename != '':
                file_ext = os.path.splitext(filename)[1]
                if file_ext not in app.config['UPLOAD_EXTENSIONS'] or \
                        file_ext != validate_image(image.stream):
                    abort(400)
                image.save(os.path.join(app.config['UPLOAD_PATH'], filename))
                return {'message': 'Image uploaded successfully'}, 200
        else:
            return {'message': 'No image found in the request'}, 400
    # def get(self, id):
    #     img = Image.query.filter(Image.id == id).first()
    #     path = img.file_path
    #     return send_from_directory(app.config["UPLOAD_PATH"], path)
    
    # def post(self):
    #     info = request.form.get("info")
    #     name = request.form.get("name")
    #     image = request.files.get("image")
        
    #     if secure_filename(image.filename) in [
    #         img.file_path for img in Image.query.all()
    #     ]:
    #         unique_str = str(uuid.uuid4())[:8]
    #         image.filename = f"{unique_str}_{image.filename}"
            
    #         filename = secure_filename(image.filename)
    #         if filename:
    #             file_ext = os.path.splitext(filename)[1]
    #             if file_ext not in app.config["UPLOAD EXTENSIONS"] or file_ext != validate_image(image.stream):
    #                 return make_response({"Error": "File type not supported"}, 400)
    #             image.save(os.path.join(app.config["UPLOAD_PATH"], filename))
    #             img = Image(name=name, file_path=filename)
    #             db.session.add(img)
    #             db.session.commit()
    
            

api.add_resource(Home, '/')
api.add_resource(CheckSession, '/check_session')
api.add_resource(Signup, '/signup')
api.add_resource(Login, '/login')
api.add_resource(Logout, '/logout')
api.add_resource(Users, '/user')
api.add_resource(UserById, '/user/<int:id>')
api.add_resource(Recipes, '/recipes')
api.add_resource(RecipeById, '/recipes/<int:id>')
api.add_resource(CreateRecipes, '/create_a_recipe')
api.add_resource(LikedRecipe, '/liked_recipe')
api.add_resource(DeleteLikedRecipe, '/delete_liked_recipe/<int:id>')
api.add_resource(MyRecipes, '/my_recipes/<int:id>')
api.add_resource(GetImageOcr, '/get_image_ocr')
api.add_resource(Images, '/upload')

if __name__ == '__main__':
    app.run(port=5555, debug=True)

