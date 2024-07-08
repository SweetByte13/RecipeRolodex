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
    # list_of_domains = ('com', 'com.br', 'net', 'net.br', 'org', 'org.br', 'gov', 'gov.br')
    # for _ in range(5):
    #     f_name = fake.first_name()
    #     l_name = fake.last_name()
    #     color = fake.color()
    #     dns_org = rc(list_of_domains)
    #     email = f"{f_name}.{l_name}@{color}.{dns_org}".lower()
    #     u = User(
    #         f_name=f_name,
    #         l_name=l_name,
    #         email=email,
    #         username=fake.user_name().ljust(8,"1"),
    #         _password_hash=fake.password()+'!',
    #         zipcode=fake.zipcode()
    #     )
    #     users.append(u)
    a=User(
    f_name="John",
    l_name="Doe",
    email="johndoe@example.com",
    username="johndoe11",
    _password_hash="password123!",
    zipcode="12345"
    )

    b=User(
    f_name="Jane",
    l_name="Smith",
    email="janesmith@example.com",
    username="janesmith1",
    _password_hash="password456!",
    zipcode="67890"
    )

    c=User(
    f_name="Alice",
    l_name="Johnson",
    email="alicejohnson@example.com",
    username="alicejohn1",
    _password_hash="password789!",
    zipcode="11223"
    )

    d=User(
    f_name="Bob",
    l_name="Williams",
    email="bobwilliams@example.com",
    username="bobwillia1",
    _password_hash="password321!",
    zipcode="44556"
    )

    f=User(
    f_name="Charlie",
    l_name="Brown",
    email="charliebrown@example.com",
    username="charliebr1",
    _password_hash="password654!",
    zipcode="77889"
    )

    h=User(
    f_name="David",
    l_name="Davis",
    email="daviddavis@example.com",
    username="daviddavi1",
    _password_hash="password987!",
    zipcode="33221"
    )

    i=User(
    f_name="Emily",
    l_name="Miller",
    email="emilymiller@example.com",
    username="emilymille1",
    _password_hash="password234!",
    zipcode="55667"
    )

    j=User(
    f_name="Frank",
    l_name="Wilson",
    email="frankwilson@example.com",
    username="frankwilso1",
    _password_hash="password567!",
    zipcode="88990"
    )

    k=User(
    f_name="Grace",
    l_name="Moore",
    email="gracemoore@example.com",
    username="gracemoore1",
    _password_hash="password890!",
    zipcode="22113"
    )

    l=User(
    f_name="Harry",
    l_name="Taylor",
    email="harrytaylor@example.com",
    username="harrytaylo1",
    _password_hash="password345!",
    zipcode="66778"
    )
    
    users.append(a)
    users.append(b)
    users.append(c)
    users.append(d)
    users.append(f)
    users.append(h)
    users.append(i)
    users.append(j)
    users.append(k)
    users.append(l)
    return users

   
def create_recipes():
    print("Creating recipes...")
    recipes = []
    categories = [
        'appetizers', 
        'soups', 
        'salads', 
        'main dishes', 
        'side dishes', 
        'bread',
        'desserts', 
        'candies', 
        'salads', 
        'snacks', 
        'beverages', 
        'condiments' ]
    # for _ in range(5):
    #     r = Recipe(
    #     title = fake.sentences(nb=1)[0],
    #     instruction = fake.paragraph(),
    #     image = fake.image_url(),
    #     category = rc(categories),
    #     public = fake.boolean(),
    #     )
    #     print(r.title)
    #     recipes.append(r)
    r = Recipe(
    title = "Delicious Chicken Alfredo",
    instruction = "First, cook the chicken in a pan with some olive oil. Then, prepare the Alfredo sauce by melting butter and adding cream and Parmesan cheese. Combine the chicken and sauce, and serve over cooked pasta.",
    image = "https://iwashyoudry.com/wp-content/uploads/2022/08/Chicken-Alfredo-Low-Res-21.jpg",
    category = "main dishes",
    public = True,
    )

    s = Recipe(
        title = "Classic Beef Tacos",
        instruction = "Cook ground beef in a pan with taco seasoning. Serve the beef in taco shells with your choice of toppings such as lettuce, tomato, cheese, and salsa.",
        image = "https://www.twopeasandtheirpod.com/wp-content/uploads/2022/12/Beef-Tacos-55.jpg",
        category = "main dishes",
        public = True,
    )
    t = Recipe(
    title = "Spicy Tomato Soup",
    instruction = "Blend tomatoes, onions, and garlic together. Add spices and simmer for 30 minutes.",
    image = "https://www.hintofhealthy.com/wp-content/uploads/2021/10/Spicy-Tomato-Soup.jpg",
    category = "soups",
    public = True,
    )

    u = Recipe(
        title = "Fresh Garden Salad",
        instruction = "Combine lettuce, tomatoes, cucumbers, and your choice of dressing.",
        image = "https://munchingwithmariyah.com/wp-content/uploads/2020/08/IMG_4425-scaled.jpg",
        category = "salads",
        public = False,
    )
    v = Recipe(
    title = "Homemade Bread",
    instruction = "Mix flour, yeast, and water. Knead the dough and let it rise for a few hours. Bake in the oven until golden brown.",
    image = "https://moorlandseater.com/wp-content/uploads/2018/05/no-knead-bread-for-beginners-sliced-on-a-board-moorlands-eater-DSC07055.jpg",
    category = "bread",
    public = True,
    )

    w = Recipe(
        title = "Chocolate Chip Cookies",
        instruction = "Combine butter, sugar, eggs, and vanilla extract. Mix in flour, baking soda, and salt. Stir in chocolate chips and bake until golden brown.",
        image = "https://sallysbakingaddiction.com/wp-content/uploads/2013/05/classic-chocolate-chip-cookies.jpg",
        category = "desserts",
        public = False,
    )

    x = Recipe(
        title = "Homemade Lemonade",
        instruction = "Squeeze lemons to get the juice. Mix lemon juice, sugar, and water. Serve chilled.",
        image = "https://media.istockphoto.com/id/1401150816/photo/two-glasses-of-lemonade-with-mint-and-lemons.jpg?s=612x612&w=0&k=20&c=LuuInHwGO11q3aBbAmyMy4JvZ3njV4R0IRE10klTLew=",
        category = "beverages",
        public = True,
    )

    y = Recipe(
        title = "BBQ Sauce",
        instruction = "Combine ketchup, brown sugar, vinegar, and spices. Simmer for 15 minutes.",
        image = "https://www.kitchensanctuary.com/wp-content/uploads/2020/05/BBQ-Sauce-square-FS-33.jpg",
        category = "condiments",
        public = False,
    )
    z = Recipe(
    title = "Cheesy Garlic Bread",
    instruction = "Spread garlic butter on bread slices, sprinkle with cheese, and bake until cheese is melted and bread is crispy.",
    image = "https://www.gritsandpinecones.com/wp-content/uploads/2022/01/texas-toast-garlic-bread-featured-1200x1200-copy.jpg",
    category = "bread",
    public = True,
    )

    q = Recipe(
        title = "Vanilla Cupcakes",
        instruction = "Mix flour, sugar, baking powder, salt, butter, milk, and vanilla extract. Pour into cupcake liners and bake until golden brown. Frost with your favorite icing.",
        image = "https://www.cookingclassy.com/wp-content/uploads/2021/09/vanilla-cupcakes-3.jpg",
        category = "desserts",
        public = False,
    )

    m = Recipe(
        title = "Homemade Iced Tea",
        instruction = "Brew tea and let it cool. Mix in sugar and lemon juice, and serve over ice.",
        image = "https://www.simplejoy.com/wp-content/uploads/2021/04/long-island-iced-tea.jpg",
        category = "beverages",
        public = True,
    )

    n = Recipe(
        title = "Homemade Ketchup",
        instruction = "Blend tomatoes, vinegar, sugar, and spices. Simmer until thickened.",
        image = "https://4sonrus.com/wp-content/uploads/2023/05/Homemade-Ketchup-Slow-Cooker-Recipe-11.jpg",
        category = "condiments",
        public = False,
    )

    o = Recipe(
        title = "Spicy Popcorn",
        instruction = "Pop popcorn kernels. Toss with melted butter and spicy seasoning.",
        image = "https://i2.wp.com/highlandsranchfoodie.com/wp-content/uploads/2012/03/stove-top-spicy-popcorn-img.jpg",
        category = "snacks",
        public = True,
    )
    recipes.append(r)
    recipes.append(s)
    recipes.append(t)
    recipes.append(u)
    recipes.append(v)
    recipes.append(w)
    recipes.append(x)
    recipes.append(y)
    recipes.append(z)
    recipes.append(q)
    recipes.append(m)
    recipes.append(n)
    recipes.append(o)
    return recipes

def create_ingredients():
    print("Creating ingredients...")
    ingredients = []
    categories= ['Dairy', 'Fruit', 'Vegetable', 'Fish', 'Meat', 'Bread', 'Dry Goods']
    # for _ in range(5):
    #     name = fake.name()
    #     r = Ingredient(
    #     name = name,
    #     category = rc(categories),
    #     nutrition = fake.sentence()
    #     )
    #     ingredients.append(r)
    aa = Ingredient(
    name = "Milk",
    category = "dairy",
    nutrition = "Milk is a good source of calcium and vitamin D."
    )

    bb = Ingredient(
        name = "Chicken",
        category = "meat",
        nutrition = "Chicken is a great source of lean protein."
    )

    cc = Ingredient(
        name = "Carrots",
        category = "vegetables",
        nutrition = "Carrots are rich in beta carotene and fiber."
    )
    dd = Ingredient(
    name = "Beef",
    category = "meat",
    nutrition = "Beef is high in protein and a good source of iron."
    )

    ee = Ingredient(
        name = "Broccoli",
        category = "vegetables",
        nutrition = "Broccoli is rich in vitamins C and K, and a good source of fiber."
    )

    ff = Ingredient(
        name = "Apple",
        category = "fruits",
        nutrition = "Apples are high in fiber and vitamin C."
    )

    gg = Ingredient(
        name = "Rice",
        category = "grains",
        nutrition = "Rice is a good source of energy and provides some B vitamins."
    )

    hh = Ingredient(
        name = "Cinnamon",
        category = "spices",
        nutrition = "Cinnamon has antioxidant properties and can help regulate blood sugar levels."
    )
    ii = Ingredient(
    name = "Cheese",
    category = "dairy",
    nutrition = "Cheese is high in calcium and protein."
    )

    jj = Ingredient(
        name = "Pork",
        category = "meat",
        nutrition = "Pork is a good source of protein and essential vitamins."
    )

    kk = Ingredient(
        name = "Spinach",
        category = "vegetables",
        nutrition = "Spinach is rich in iron and calcium."
    )

    ll = Ingredient(
        name = "Banana",
        category = "fruits",
        nutrition = "Bananas are high in potassium and vitamin C."
    )

    mm = Ingredient(
        name = "Wheat",
        category = "grains",
        nutrition = "Wheat is a great source of dietary fiber and protein."
    )
    ingredients.append(aa)
    ingredients.append(bb)
    ingredients.append(cc)
    ingredients.append(dd)
    ingredients.append(ee)
    ingredients.append(ff)
    ingredients.append(gg)
    ingredients.append(hh)
    ingredients.append(ii)
    ingredients.append(jj)
    ingredients.append(kk)
    ingredients.append(ll)
    ingredients.append(mm)
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