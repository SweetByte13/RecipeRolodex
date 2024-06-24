from sqlalchemy_serializer import SerializerMixin
from sqlalchemy.ext.associationproxy import association_proxy
from sqlalchemy.orm import validates
from flask_bcrypt import Bcrypt
from config import db, app
bcrypt = Bcrypt(app)


class User(db.Model, SerializerMixin):
    __tablename__ = 'users'
    
    serialize_rules = ('-_password_hash',)
    
    __table_args__ = (
        db.CheckConstraint('length(username)>5', name='username_length_over_five'), db.CheckConstraint('length(email)>7', name='email_length_over_seven')
    )
    
    id=db.Column(db.Integer, primary_key=True)
    f_name=db.Column(db.String, nullable=False)
    l_name=db.Column(db.String, nullable=False)
    username=db.Column(db.String, unique=True, nullable=False)
    _password_hash=db.Column(db.String, nullable=False)
    email=db.Column(db.String, nullable=False)
    zipcode=db.Column(db.String, nullable=False)
    recipe_id=db.Column(db.Integer, ForeignKey=('recipe.id'))
    
    recipe_users=db.relationship('Recipe_User', back_populates='user', cascade='all, delete-orphan')
    recipes=association_proxy('recipe_users', 'recipe')
    
class Recipe_User(db.Model, SerializerMixin):
    __tablename__ = 'recipe_users'
    
    recipe_id=db.Column(db.Integer, ForeignKey=('recipe.id'))
    user_id=db.Column(db.Integer, ForeignKey=('user.id'))
    
    recipe=db.relationship('Recipe', back_populates='recipe_user')
    user=db.relationship('User', back_populates='recipe_user')
    
class Recipe(db.Model, SerializerMixin):
    __tablename__ = 'recipes'
    
    __table_args__ = (
        db.CheckConstraint('length(instruction)<100', name='username_length_under_hundred'),
    )
    
    id=db.Column(db.Integer, primary_key=True)
    title=db.Column(db.String, nullable=False)
    instruction=db.Column(db.String, nullable=False)
    image=db.Column(db.String)
    category=db.Column(db.String, nullable=False)
    private_or_public=db.Column(db.Boolean, nullable=False)
    
    recipe_users=db.relationship('Recipe_User', back_populates='recipe', cascade='all, delete-orphan')
    recipe_ingredients=db.relationship('Recipe_ingredients', back_populates='recipe', cascade='all, delete-orphan')
    user=association_proxy('recipe_users', 'user')
    ingredient=association_proxy('recipe_ingredients', 'ingredient')
    
class Recipe_Ingredient(db.Model, SerializerMixin):
    __tablename__ = 'recipe_ingredients'
    
    weight_of_ingr=db.Column(db.Integer, nullable=False)
    recipe_id=db.Column(db.Integer, ForeignKey=('recipe.id'))
    ingredient_id=db.Column(db.Integer, ForeignKey=('ingredient.id'))
    
    recipe=db.relationship('Recipe', back_populates='recipe_ingredient', cascade='all, delete-orphan')
    ingredient=db.relationship('Ingredient', back_populates='recipe_ingredient', cascade='all, delete-orphan')
    
class Ingredient(db.Model, SerializerMixin):
    __tablename__ = 'ingredients'
 
    id=db.Column(db.integer, primary_key=True)
    name=db.Column(db.String, nullable=False, unique=True)
    category=db.Column(db.String, nullable=False)
    nutrition=db.Column(db.String)
    
    dietary_nos=db.relationship('Dietary_No', back_populates='ingredient', cascade='all, delete-orphan')
    
class Dietary_No(db.Model,SerializerMixin):
    __tablename__ = 'dietary_nos'
    
    ingredient_id=db.Column(db.Integer, ForeignKey=('ingredient'))
    user_id=db.Column(db.Integer, Foreignkey=('user.id'))
    
    user=db.relationship('User', back_populates='dietary_no', cascade='all, delete-orphan')