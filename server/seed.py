#!/usr/bin/env python3

from random import randint, choice as rc
from faker import Faker
from config import db, app
from flask import request, make_response
from models import User, Recipe, Ingredient, Recipe_User, Recipe_Ingredient, Dietary_No

fake = Faker()

def create_users():
    print("Creating users...")
    users = []
    list_of_domains = ('com', 'com.br', 'net', 'net.br', 'org', 'org.br', 'gov', 'gov.br')
    for _ in range(5):
        f_name = fake.first_name()
        l_name = fake.last_name()
        color = fake.color()
        dns_org = rc(list_of_domains)
        email = f"{f_name}.{l_name}@{color}.{dns_org}".lower()
        u = User(
            f_name=f_name,
            l_name=l_name,
            email=email,
            username=fake.user_name().ljust(8,"1"),
            _password_hash=fake.password()+'!',
            zipcode=fake.zipcode()
        )
        users.append(u)
    return users

   
def create_recipes():
    print("Creating recipes...")
    recipes = []
    categories = ['Appetizer', 'Entree', 'Snack', 'Dessert', 'Beverage', 'Lunch']
    for _ in range(5):
        r = Recipe(
        title = fake.sentences(nb=1)[0],
        instruction = fake.paragraph(),
        image = fake.image_url(),
        category = rc(categories),
        public = fake.boolean(),
        )
        print(r.title)
        recipes.append(r)
    return recipes

def create_ingredients():
    print("Creating ingredients...")
    ingredients = []
    categories= ['Dairy', 'Fruit', 'Vegetable', 'Fish', 'Meat', 'Bread', 'Dry Goods']
    for _ in range(5):
        name = fake.name()
        r = Ingredient(
        name = name,
        category = rc(categories),
        nutrition = fake.sentence()
        )
        ingredients.append(r)
    return ingredients

def create_recipe_ingredients(recipes, ingredients):
    recipe_ingredients=[]
    for _ in range(5):
        r_i = Recipe_Ingredient(  
            weight_of_ingr=fake.random_number(),
            weight_type="g",
            recipe_id=rc([res.id for res in recipes]),
            ingredient_id=rc([ing.id for ing in ingredients])
            )
        recipe_ingredients.append(r_i)
    return recipe_ingredients

def create_recipe_users(recipes, users):
    recipe_users=[]
    for _ in range(5):
        r_u = Recipe_User(  
            recipe_id=rc([res.id for res in recipes]),
            user_id=rc([user.id for user in users])
            )
        recipe_users.append(r_u)
    return recipe_users

def create_dietary_nos(ingredients, users):
    dietary_nos=[]
    for _ in range(5):
        d_n = Dietary_No(  
            ingredient_id=rc([ing.id for ing in ingredients]),
            user_id=rc([user.id for user in users])
            )
        dietary_nos.append(d_n)
    return dietary_nos

def clear_database():
    with app.app_context():
        User.query.delete()
        Recipe.query.delete()
        Ingredient.query.delete()
        Recipe_Ingredient.query.delete()
        Recipe_User.query.delete()
        Dietary_No.query.delete()

def seed_database():
    with app.app_context():
        print("Clearing DB...")
        User.query.delete()
        Recipe.query.delete()
        Ingredient.query.delete()
        Recipe_Ingredient.query.delete()
        Recipe_User.query.delete()
        Dietary_No.query.delete()
        
        print("Seeding Users...")
        users = create_users()
        db.session.add_all(users)
        db.session.commit()
        
        print("Seeding recipes...")
        recipes = create_recipes()
        db.session.add_all(recipes)
        db.session.commit()
        
        print("Seeding ingredients...")
        ingredients = create_ingredients()
        db.session.add_all(ingredients)
        db.session.commit()
        
        print("Seeding Recipe-Ingredients...")
        recipe_ingredient = create_recipe_ingredients(recipes, ingredients)
        db.session.add_all(recipe_ingredient)
        db.session.commit()
        
        print("Seeding Recipe_User...")
        recipe_user = create_recipe_users(users, recipes)
        db.session.add_all(recipe_user)
        db.session.commit()
        
        print("Seeding Dietary_Nos...")
        dietary_no = create_dietary_nos(users, ingredients)
        db.session.add_all(dietary_no)
        db.session.commit()
       
if __name__ == '__main__':
    seed_database()