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
    
    recipe_users=db.relationship('Recipe_User', back_populates='user', cascade='all, delete-orphan')
    dietary_nos=db.relationship('Dietary_No', back_populates='user', cascade='all, delete-orphan')
    recipes=association_proxy('recipe_users', 'recipe')
    ingredients=association_proxy('dietary_nos', 'ingredient')
    # creator_recipes=db.relationship('Recipe', back_populates='user', foreign_keys="Recipe.creator")
    
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
            raise AssertionError ("First name is required")
        return new_f_name

    @validates('l_name')
    def validates_l_name(self, key, new_l_name):
        if not new_l_name:
            raise AssertionError ("Last name is required")
        return new_l_name

    @validates('username')
    def validates_username(self, key, new_username):
        if not new_username:
            raise AssertionError ("Username is required")
        if len(new_username)<5:
            raise AssertionError ("Username must be longer than 5 characters")
        if User.query.filter_by(username=new_username).first():
            raise AssertionError ("Username already taken") 
        return new_username
        
    @validates('email')
    def validates_email(self, key, new_email):
        if not new_email:
            raise AssertionError ("Email is required")
        if '@' not in new_email:
            raise AssertionError ("Email is not valid, must include @ symbol")
        if len(new_email)<8:
            raise AssertionError ("Email address must be valid")
        return new_email

    @validates('zipcode')
    def validates_zipcode(self, key, new_zipcode):
        if not new_zipcode:
            raise AssertionError ("Zipcode is required")
        if not (len(new_zipcode)==5 or len(new_zipcode)==9):
            raise AssertionError ("Zipcode must be valid")
        return new_zipcode
        
    @validates('_password_hash')
    def validates_password_hash(self, key, new_password):
        SpecialChar =['$', '@', '#', '%', '?', '!', '&', '^', '*']
        if not new_password:
            raise AssertionError ("Password is required")
        if len(new_password)<6:
            raise AssertionError ("Password must be longer than six characters")
        if not any(char.isdigit() for char in new_password):
            raise AssertionError ("Password must contain a number")
        if not any(char in SpecialChar for char in new_password):
            raise AssertionError ("Password must contain a special symbol: !?$@#&^*")
        return new_password
    
class Recipe_User(db.Model, SerializerMixin):
    __tablename__ = 'recipe_users'
    
    serialize_rules = ('-recipe.recipe_users', '-user.recipe_users')
    
    id=db.Column(db.Integer, primary_key=True)
    recipe_id=db.Column(db.Integer, db.ForeignKey('recipes.id'), nullable=False)
    user_id=db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    
    recipe=db.relationship('Recipe', back_populates='recipe_users')
    user=db.relationship('User', back_populates='recipe_users')
    
    def __repr__(self):
        return f"<Recipe_User: user_id={self.user_id}, recipe_id={self.recipe_id} "
    
    @validates('recipe_id')
    def validates_recipe_id(self, key, new_recipe_id):
        if not new_recipe_id:
            raise AssertionError ("Must have a recipe ID")
        return new_recipe_id
        
    @validates('user_id')
    def validates_user_id(self, key, new_user_id):
        if not new_user_id:
            raise AssertionError ("Must have a user ID")
        return new_user_id
        
    
class Recipe(db.Model, SerializerMixin):
    __tablename__ = 'recipes'
    
    __table_args__ = (
        db.CheckConstraint('length(instruction)<200', name='instruction_length_under_two_hundred'),
    )
    
    id=db.Column(db.Integer, primary_key=True)
    title=db.Column(db.String, nullable=False)
    instruction=db.Column(db.String, nullable=False)
    image=db.Column(db.String)
    category=db.Column(db.String, nullable=False)
    public=db.Column(db.Boolean, nullable=False)
    # creator=db.Column(db.Integer, db.ForeignKey('users.id'))
    
    
    recipe_users=db.relationship('Recipe_User', back_populates='recipe', cascade='all, delete-orphan')
    recipe_ingredients=db.relationship('Recipe_Ingredient', back_populates='recipe', cascade='all, delete-orphan')
    user=association_proxy('recipe_users', 'user')
    ingredient=association_proxy('recipe_ingredients', 'ingredient')
    # creator_user=db.relationship('User', back_populates='recipes')
    
    def __repr__(self):
        return f"<Recipe {self.id}: {self.title}, {self.instruction}, {self.image}, {self.category}, Public(1=true):{self.public}"
    
    @validates('title')
    def validates_title(self, key, new_title):
        print(new_title)
        if not new_title:
            raise AssertionError ("Must have a title")
        if not len(new_title)>3:
            raise AssertionError ("Title is too short")
        return new_title
        
    @validates('instruction')
    def validates_instructions(self, key, new_instruction):
        if not new_instruction:
            raise AssertionError ("instructions are required")
        if len(new_instruction)<6:
            raise AssertionError ("Instrutions are not long enough")
        if len(new_instruction)>200:
            raise AssertionError ("Instructions are too long")
        return new_instruction
        
    @validates('category')
    def validate_category(self, key, new_category):
        if not new_category:
            raise AssertionError ("Category is required")
        return new_category
    
    
class Recipe_Ingredient(db.Model, SerializerMixin):
    __tablename__ = 'recipe_ingredients'
    
    serialize_rules = ('-recipe.recipe_ingredients', '-ingredient.recipe_ingredients')
    
    id=db.Column(db.Integer, primary_key=True)
    weight_of_ingr=db.Column(db.Float, nullable=False)
    weight_type=db.Column(db.String)
    recipe_id=db.Column(db.Integer, db.ForeignKey('recipes.id'))
    ingredient_id=db.Column(db.Integer, db.ForeignKey('ingredients.id'))
    
    recipe=db.relationship('Recipe', back_populates='recipe_ingredients')
    ingredient=db.relationship('Ingredient', back_populates='recipe_ingredients')
    
    def __repr__(self):
        return f"<Recipe_Ingredient: {self.weight_of_ingr}, {self.weight_type}, recipe_id={self.recipe_id}, ingredient_id={self.ingredient_id}"
    
    @validates('weight_of_ingr')
    def validate_weight(self, key, new_weight):
        if not new_weight:
            raise AssertionError ("Must have weight of ingredient")
        return new_weight
    
    @validates('weight_type')
    def validates_weight_type(self, key, new_weight):
        WeightTypes =['teaspoon', 'tablespoon', 'cup', 'ounce', 'pound', 'mililiter', 'fluid ounce', 'gram', 'kilogram', 'each', 'tsp', 'tbl', 'oz', 'lb', 'fl oz', 'ml', 'g', 'kg']
        if not new_weight:
            raise AssertionError ("Weight type is required")
        if not (new_weight in WeightTypes):
            raise AssertionError ("Weight Type must contain one of these weight type: teaspoon, tablespoon, cup, each, ounce, fluid ounce, mililiter, gram, kilogram")
        return new_weight
    
class Ingredient(db.Model, SerializerMixin):
    __tablename__ = 'ingredients'
 
    id=db.Column(db.Integer, primary_key=True)
    name=db.Column(db.String, nullable=False, unique=True)
    category=db.Column(db.String)
    nutrition=db.Column(db.String)
    
    recipe_ingredients=db.relationship('Recipe_Ingredient', back_populates='ingredient', cascade='all, delete-orphan')
    dietary_nos=db.relationship('Dietary_No', back_populates='ingredient', cascade='all, delete-orphan')
    recipe=association_proxy('recipe_ingredients', 'recipe')
    user=association_proxy('dietary_nos', 'user')
    
    def __repr__(self):
        return f"<Ingredient{self.id}: {self.name}, {self.category}, {self.nutrition}"
    
    @validates('name')
    def validates_name(self, key, new_name):
        if not new_name:
            raise AssertionError ("Name is required")
        return new_name
        
    @validates('category')
    def validates_category(self, key, new_category):
        if not new_category:
            raise AssertionError ("Category is required")
        return new_category
    
class Dietary_No(db.Model,SerializerMixin):
    __tablename__ = 'dietary_nos'
    
    serialize_rules = ('-ingredient.dietary_nos', '-user.dietary_nos')
    
    id=db.Column(db.Integer, primary_key=True)
    ingredient_id=db.Column(db.Integer, db.ForeignKey('ingredients.id'), nullable=False)
    user_id=db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    
    user=db.relationship('User', back_populates='dietary_nos')
    ingredient=db.relationship('Ingredient', back_populates='dietary_nos')

    def __repr__(self):
        return f"<Dietary Restrictions: ingredient_id={self.ingredient_id}, user_id={self.user_id}"
    
    @validates('ingredient_id')
    def validates_ingredient_id(self, key, new_ingredient_id):
        assert new_ingredient_id is not None, "Must have a ingredient ID"
        assert Ingredient.query.get(new_ingredient_id) is not None, "Ingredient does not exist"
        return new_ingredient_id
        
        
    @validates('user_id')
    def validates_user_id(self, key, new_user_id):
        assert new_user_id is not None, "Must have a user ID"
        assert User.query.get(new_user_id) is not None, "User does not exist"
        return new_user_id