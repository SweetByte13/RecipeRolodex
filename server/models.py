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
        db.CheckConstraint('length(username)>5', name='username_length_over_five'), db.CheckConstraint('length(email)>8', name='email_length_over_eight'), db.CheckConstraint('length(_password_hash)>6', name='password_length_over_six')
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
    creator_recipe=db.relationship('User', back_populates='user')
    
    def __repr__(self):
        return f"<User {self.id}: {self.f_name} {self.l_name}, {self.username}, {self.email}, {self.zipcode}"
        
    @property
    def password_hash(self):
        return self._password_hash 
    
    @password_hash.setter
    def password_hash(self, password):
        self._password_hash = bcrypt.generate_password_hash(password).decode('utf-8')
        
    def authenticate(self, password):
        return bcrypt.check_password_hash(self._password_hash, password)   

    @validates('f_name')
    def validates_f_name(self, key, new_f_name):
        if not new_f_name:
            raise ValueError("First name is required")
        return new_f_name

    @validates('l_name')
    def validates_l_name(self, key, new_l_name):
        if not new_l_name:
            raise ValueError("Last name is required")
        return new_l_name

    @validates('username')
    def validates_username(self, key, new_username):
        if not new_username:
            raise ValueError("Username is required")
        if len(new_username)<5:
            raise ValueError("Username must be longer than 5 characters")
        if User.query.filter_by(username=new_username).first():
            raise ValueError("Username already taken") 
        return new_username
        
    @validates('email')
    def validates_email(self, key, new_email):
        if not new_email:
            raise ValueError("Email is required")
        if '@' not in new_email:
            raise ValueError("Email is not valid, must include @ symbol")
        if len(new_email)<8:
            raise ValueError("Email address must be valid")
        return new_email

    @validates('zipcode')
    def validates_zipcode(self, key, new_zipcode):
        if not new_zipcode:
            raise ValueError("Zipcode is required")
        if not len(new_zipcode)==5 or len(new_zipcode)==9:
            raise ValueError("Zipcode must be valid")
        
    @validates('_password_hash')
    def validates_password_hash(self, key, new_password):
        SpecialChar =['$', '@', '#', '%', '?', '!', '&', '^', '*', '<', '>']
        if not new_password:
            raise ValueError("Password is required")
        if len(new_password)<6:
            raise ValueError("Password must be longer than six characters")
        if not any(char.isdigit() for char in new_password):
            raise ValueError("Password must contain a number")
        if not any(char in SpecialChar for char in new_password):
            raise ValueError("Password must contain a special symbol: !?$@#&^*<>")
        return new_password
    
class Recipe_User(db.Model, SerializerMixin):
    __tablename__ = 'recipe_users'
    
    recipe_id=db.Column(db.Integer,nullable=False, ForeignKey=('recipe.id'))
    user_id=db.Column(db.Integer, nullable=False, ForeignKey=('user.id'))
    
    recipe=db.relationship('Recipe', back_populates='recipe_user')
    user=db.relationship('User', back_populates='recipe_user')
    
    def __repr__(self):
        return f"<Recipe_User: user_id={self.user_id}, recipe_id={self.recipe_id} "
    
    @validates('recipe_id')
    def validates_recipe_id(self, key, new_recipe_id):
        if not new_recipe_id:
            raise ValueError("Must have a recipe ID")
        
    @validates('user_id')
    def validates_user_id(self, key, new_user_id):
        if not new_user_id:
            raise ValueError("Must have a user ID")
        
    
class Recipe(db.Model, SerializerMixin):
    __tablename__ = 'recipes'
    
    __table_args__ = (
        db.CheckConstraint('length(instruction)<100', name='instruction_length_under_hundred'),
    )
    
    id=db.Column(db.Integer, primary_key=True)
    title=db.Column(db.String, nullable=False)
    instruction=db.Column(db.String, nullable=False)
    image=db.Column(db.String)
    category=db.Column(db.String, nullable=False)
    private_or_public=db.Column(db.Boolean, nullable=False)
    creater=db.Column(db.Integer, ForeignKey=('user.id'))
    
    
    recipe_users=db.relationship('Recipe_User', back_populates='recipe', cascade='all, delete-orphan')
    recipe_ingredients=db.relationship('Recipe_ingredients', back_populates='recipe', cascade='all, delete-orphan')
    user=association_proxy('recipe_users', 'user')
    ingredient=association_proxy('recipe_ingredients', 'ingredient')
    
    @validates('title')
    def validates_title(self, key, new_title):
        if not new_title:
            raise ValueError("Must have a title")
        if not 
    
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