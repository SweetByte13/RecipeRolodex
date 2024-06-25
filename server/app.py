#!/usr/bin/env python3
from flask import request, session, make_response
from flask_restful import Resource
from sqlalchemy.exc import IntegrityError
from config import app, db, api
from models import User, Recipe, Ingredient, Recipe_Ingredient, Recipe_User, Dietary_No

@app.before_request
def check_log_status():
    open_access_list = [
        'signup',
        'login',
        'check_session'
    ]
    if request.endpoint not in open_access_list and (not session.get('user')):
        return make_response({"error": "401 Unauthorized"}, 401)
    
class CheckSession(Resource):
    def get(self):
        if 'user_id' in session:
            user_id = session['user_id']
            if user_id:
                user=db.session.get(User, user_id)
                if user:
                    return make_response(user.to_dict(), 200)
        return make_response({"error": "Unauthorized: Must login"}, 401)

class Signup(Resource):
    def post(self):
        params = request.get_json()
        print(params)
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
            return make_response({"Error": "User not found."})
        if user.authenticate(params.get('password')):
            session['user_id'] = user.id
            return make_response(user.to_dict())
        else:
            return make_response({"Error": "Invalid password"}, 401)
       
class Home(Resource):
    pass

api.add_resource(Home, '/')
api.add_resource(CheckSession, '/check_session')
api.add_resource(Signup, '/signup')
api.add_resource(Login, '/login')

if __name__ == '__main__':
    app.run(port=5555, debug=True)

