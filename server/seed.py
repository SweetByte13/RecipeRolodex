#!/usr/bin/env python3

from random import randint, choice as rc
from faker import Faker
from config import db, app
from models import User, Recipe, Ingredient, Recipe_User, Recipe_Ingredient, Dietary_No

fake = Faker()

def create_users():
    print("Creating users...")
    users = []
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
        'Appetizers', 
        'Soups', 
        'Salads', 
        'Main Dishes', 
        'Side Dishes', 
        'Breads',
        'Desserts', 
        'Candies', 
        'salads', 
        'Snacks', 
        'Beverages', 
        'Condiments' ]
 
    r = Recipe(
    title = "Delicious Chicken Alfredo",
    instruction = "First, cook the chicken in a pan with some olive oil. Then, prepare the Alfredo sauce by melting butter and adding cream and Parmesan cheese. Combine the chicken and sauce, and serve over cooked pasta.",
    image = "https://iwashyoudry.com/wp-content/uploads/2022/08/Chicken-Alfredo-Low-Res-21.jpg",
    category = "Main Dishes",
    public = True,
    )

    s = Recipe(
        title = "Classic Beef Tacos",
        instruction = "Cook ground beef in a pan with taco seasoning. Serve the beef in taco shells with your choice of toppings such as lettuce, tomato, cheese, and salsa.",
        image = "https://www.twopeasandtheirpod.com/wp-content/uploads/2022/12/Beef-Tacos-55.jpg",
        category = "Main Dishes",
        public = True,
    )
    t = Recipe(
    title = "Spicy Tomato Soup",
    instruction = "Blend tomatoes, onions, and garlic together. Add spices and simmer for 30 minutes.",
    image = "https://www.hintofhealthy.com/wp-content/uploads/2021/10/Spicy-Tomato-Soup.jpg",
    category = "Soups",
    public = True,
    )

    u = Recipe(
        title = "Fresh Garden Salad",
        instruction = "Combine lettuce, tomatoes, cucumbers, and your choice of dressing.",
        image = "https://munchingwithmariyah.com/wp-content/uploads/2020/08/IMG_4425-scaled.jpg",
        category = "Salads",
        public = False,
    )
    v = Recipe(
    title = "Homemade Bread",
    instruction = "Mix flour, yeast, and water. Knead the dough and let it rise for a few hours. Bake in the oven until golden brown.",
    image = "https://moorlandseater.com/wp-content/uploads/2018/05/no-knead-bread-for-beginners-sliced-on-a-board-moorlands-eater-DSC07055.jpg",
    category = "Bread",
    public = True,
    )

    w = Recipe(
        title = "Chocolate Chip Cookies",
        instruction = "Combine butter, sugar, eggs, and vanilla extract. Mix in flour, baking soda, and salt. Stir in chocolate chips and bake until golden brown.",
        image = "https://sallysbakingaddiction.com/wp-content/uploads/2013/05/classic-chocolate-chip-cookies.jpg",
        category = "Desserts",
        public = False,
    )
    recipes.append(r)
    recipes.append(s)
    recipes.append(t)
    recipes.append(u)
    recipes.append(v)
    recipes.append(w)
    return recipes

def create_ingredients():
    print("Creating ingredients...")
    ingredients = []
    categories= ['dairy', 'fruit', 'vegetable', 'fish', 'meat', 'poultry', 'bread', 'pantry']
    
    aa = Ingredient(
        name = "chicken",
        category = "poultry",
        nutrition = "Chicken is a great source of lean protein."
    )
    
    bb = Ingredient(
    name = "olive oil",
    category = "pantry",
    nutrition = "olive oil"
    )
    
    cc = Ingredient(
        name = "butter",
        category = "dairy",
        nutrition = "butter"
    )
    
    dd = Ingredient(
    name = "cream",
    category = "dairy",
    nutrition = "cream"
    )

    ee = Ingredient(
    name = " parmesan cheese",
    category = "dairy",
    nutrition = "Cheese is high in calcium and protein."
    )
    
    ff = Ingredient(
        name = "pasta",
        category = "dry goods",
        nutrition = "pasta"
    )

    gg = Ingredient(
        name = "ground beef",
        category = "meat",
        nutrition = "ground beef"
    )

    hh = Ingredient(
        name = "taco seasoning",
        category = "pantry",
        nutrition = "taco seasoning"
    )
    
    ii = Ingredient(
        name = "taco shells",
        category = "pantry",
        nutrition = "taco shells"
    )

    jj = Ingredient(
         name = "iceburg lettuce",
        category = "vegetables",
        nutrition = "iceburg lettuce"
    )

    kk = Ingredient(
        name = "tomato",
        category = "fruits",
        nutrition = "tomato"
    )

    ll = Ingredient(
        name = "shredded cheese",
        category = "dairy",
        nutrition = "shredded cheese"
    )
    mm = Ingredient(
       name = "salsa",
        category = "pantry",
        nutrition = "salsa"
    )
    nn = Ingredient(
        name = "onion",
        category = "vegetables",
        nutrition = "onion"
    )
    oo = Ingredient(
        name = "garlic",
        category = "vegetables",
        nutrition = "garlic"
    )
    pp = Ingredient(
        name = "salt",
        category = "pantry",
        nutrition = "salt"
    )
    qq = Ingredient(
        name = "black pepper",
        category = "pantry",
        nutrition = "black pepper"
    )
    rr = Ingredient(
        name = "cucumber",
        category = "vegetable",
        nutrition = "cucumber"
    )
    ss = Ingredient(
        name = "dressing",
        category = "pantry",
        nutrition = "dressing"
    )
    tt = Ingredient(
        name = "all-purpose flour",
        category = "pantry",
        nutrition = "all-purpose flour"
    )
    uu = Ingredient(
        name = "active dry yeast",
        category = "pantry",
        nutrition = "active dry yeast"
    )
    vv = Ingredient(
        name = "water",
        category = "pantry",
        nutrition = "water"
    )
    ww = Ingredient(
        name = "granulated sugar",
        category = "pantry",
        nutrition = "granulated sugar"
    )
    xx = Ingredient(
        name = "light brown sugar",
        category = "pantry",
        nutrition = "light brown sugar"
    )
    yy = Ingredient(
        name = "egg",
        category = "dairy",
        nutrition = "egg"
    )
    zz = Ingredient(
        name = "vanilla extract",
        category = "pantry",
        nutrition = "vanilla extract"
    )
    xxa = Ingredient(
        name = " baking soda",
        category = "pantry",
        nutrition = " baking soda"
    )
    xxb = Ingredient(
        name = "chocolate chips",
        category = "pantry",
        nutrition = "chocolate chips"
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
    ingredients.append(nn)
    ingredients.append(oo)
    ingredients.append(pp)
    ingredients.append(qq)
    ingredients.append(rr)
    ingredients.append(ss)
    ingredients.append(tt)
    ingredients.append(uu)
    ingredients.append(vv)
    ingredients.append(ww)
    ingredients.append(xx)
    ingredients.append(yy)
    ingredients.append(zz)
    ingredients.append(xxa)
    ingredients.append(xxb)
    return ingredients

def create_recipe_ingredients(r, s,t,u,v,w,aa,bb,cc,dd,ee,ff,gg,hh,ii,jj,kk,ll,mm,nn,oo,pp,qq,rr,ss,tt,uu,vv,ww,xx,yy,zz,xxa,xxb):
    recipe_ingredients=[]
    aaa= Recipe_Ingredient(  
            weight_of_ingr=500,
            weight_type="g",
            recipe_id=r.id,
            ingredient_id=aa.id
            )
    bbb= Recipe_Ingredient(  
            weight_of_ingr=15,
            weight_type="g",
            recipe_id=r.id,
            ingredient_id=bb.id
            )
    ccc= Recipe_Ingredient(  
            weight_of_ingr=15,
            weight_type="g",
            recipe_id=r.id,
            ingredient_id=cc.id
            )
    ddd= Recipe_Ingredient(  
            weight_of_ingr=240,
            weight_type="g",
            recipe_id=r.id,
            ingredient_id=dd.id
            )
    eee= Recipe_Ingredient(  
            weight_of_ingr=240,
            weight_type="g",
            recipe_id=r.id,
            ingredient_id=ee.id
            )
    fff= Recipe_Ingredient(  
            weight_of_ingr=200,
            weight_type="g",
            recipe_id=r.id,
            ingredient_id=ff.id
            )
    ggg= Recipe_Ingredient(  
            weight_of_ingr=500,
            weight_type="g",
            recipe_id=s.id,
            ingredient_id=gg.id
            )
    hhh= Recipe_Ingredient(  
            weight_of_ingr=28,
            weight_type="g",
            recipe_id=s.id,
            ingredient_id=hh.id
            )
    iii= Recipe_Ingredient(  
            weight_of_ingr=453,
            weight_type="g",
            recipe_id=s.id,
            ingredient_id=ii.id
            )
    jjj= Recipe_Ingredient(  
            weight_of_ingr=80,
            weight_type="g",
            recipe_id=s.id,
            ingredient_id=dd.id
            )
    kkk= Recipe_Ingredient(  
            weight_of_ingr=35,
            weight_type="g",
            recipe_id=s.id,
            ingredient_id=jj.id
            )
    lll= Recipe_Ingredient(  
            weight_of_ingr=80,
            weight_type="g",
            recipe_id=s.id,
            ingredient_id=kk.id
            )
    mmm= Recipe_Ingredient(  
            weight_of_ingr=115,
            weight_type="g",
            recipe_id=s.id,
            ingredient_id=ll.id
            )
    nnn= Recipe_Ingredient(  
            weight_of_ingr=1000,
            weight_type="g",
            recipe_id=t.id,
            ingredient_id=kk.id
            )
    ooo= Recipe_Ingredient(  
            weight_of_ingr=200,
            weight_type="g",
            recipe_id=t.id,
            ingredient_id=nn.id
            )
    ppp= Recipe_Ingredient(  
            weight_of_ingr=45,
            weight_type="g",
            recipe_id=t.id,
            ingredient_id=oo.id
            )
    qqq= Recipe_Ingredient(  
            weight_of_ingr=10,
            weight_type="g",
            recipe_id=t.id,
            ingredient_id=pp.id
            )
    rrr= Recipe_Ingredient(  
            weight_of_ingr=7,
            weight_type="g",
            recipe_id=t.id,
            ingredient_id=qq.id
            )
    sss= Recipe_Ingredient(  
            weight_of_ingr=300,
            weight_type="g",
            recipe_id=u.id,
            ingredient_id=jj.id
            )
    ttt= Recipe_Ingredient(  
            weight_of_ingr=200,
            weight_type="g",
            recipe_id=u.id,
            ingredient_id=kk.id
            )
    sssa= Recipe_Ingredient(  
            weight_of_ingr=200,
            weight_type="g",
            recipe_id=u.id,
            ingredient_id=rr.id
            )
    ttta= Recipe_Ingredient(  
            weight_of_ingr=90,
            weight_type="g",
            recipe_id=u.id,
            ingredient_id=ss.id
            )
    uuu= Recipe_Ingredient(  
            weight_of_ingr=200,
            weight_type="g",
            recipe_id=v.id,
            ingredient_id=tt.id
            )
    vvv= Recipe_Ingredient(  
            weight_of_ingr=20900,
            weight_type="g",
            recipe_id=v.id,
            ingredient_id=uu.id
            )
    www= Recipe_Ingredient(  
            weight_of_ingr=200,
            weight_type="g",
            recipe_id=v.id,
            ingredient_id=vv.id
            )
    xxx= Recipe_Ingredient(  
            weight_of_ingr=200,
            weight_type="g",
            recipe_id=v.id,
            ingredient_id=ww.id
            )
    yyy= Recipe_Ingredient(  
            weight_of_ingr=230,
            weight_type="g",
            recipe_id=w.id,
            ingredient_id=cc.id
            )
    zzz= Recipe_Ingredient(  
            weight_of_ingr=200,
            weight_type="g",
            recipe_id=w.id,
            ingredient_id=ww.id
            )
    zzza= Recipe_Ingredient(  
            weight_of_ingr=200,
            weight_type="g",
            recipe_id=w.id,
            ingredient_id=xx.id
            )
    zzzb= Recipe_Ingredient(  
            weight_of_ingr=104,
            weight_type="g",
            recipe_id=w.id,
            ingredient_id=yy.id
            )
    zzzc= Recipe_Ingredient(  
            weight_of_ingr=8,
            weight_type="g",
            recipe_id=w.id,
            ingredient_id=zz.id
            )
    zzzd= Recipe_Ingredient(  
            weight_of_ingr=360,
            weight_type="g",
            recipe_id=w.id,
            ingredient_id=tt.id
            )
    zzze= Recipe_Ingredient(  
            weight_of_ingr=5,
            weight_type="g",
            recipe_id=w.id,
            ingredient_id=xxa.id
            )
    zzzf= Recipe_Ingredient(  
            weight_of_ingr=5,
            weight_type="g",
            recipe_id=w.id,
            ingredient_id=pp.id
            )
    zzzg= Recipe_Ingredient(  
            weight_of_ingr=340,
            weight_type="g",
            recipe_id=w.id,
            ingredient_id=xxb.id
            )
    recipe_ingredients.append(aaa)
    recipe_ingredients.append(bbb)
    recipe_ingredients.append(ccc)
    recipe_ingredients.append(ddd)
    recipe_ingredients.append(eee)
    recipe_ingredients.append(fff)
    recipe_ingredients.append(ggg)
    recipe_ingredients.append(hhh)
    recipe_ingredients.append(iii)
    recipe_ingredients.append(jjj)
    recipe_ingredients.append(kkk)
    recipe_ingredients.append(lll)
    recipe_ingredients.append(mmm)
    recipe_ingredients.append(nnn)
    recipe_ingredients.append(ooo)
    recipe_ingredients.append(ppp)
    recipe_ingredients.append(qqq)
    recipe_ingredients.append(rrr)
    recipe_ingredients.append(sss)
    recipe_ingredients.append(sssa)
    recipe_ingredients.append(ttta)
    recipe_ingredients.append(ttt)
    recipe_ingredients.append(uuu)
    recipe_ingredients.append(vvv)
    recipe_ingredients.append(www)
    recipe_ingredients.append(xxx)
    recipe_ingredients.append(yyy)
    recipe_ingredients.append(zzz)
    recipe_ingredients.append(zzza)
    recipe_ingredients.append(zzzb)
    recipe_ingredients.append(zzzc)
    recipe_ingredients.append(zzzd)
    recipe_ingredients.append(zzze)
    recipe_ingredients.append(zzzf)
    recipe_ingredients.append(zzzg)
    return recipe_ingredients

def create_recipe_users(a,b,c,f,i, r,s,t,u,v,w):
    recipe_users=[]
    qqq = Recipe_User(  
            recipe_id=r.id,
            user_id=a.id
            )
    rrr = Recipe_User(  
            recipe_id=s.id,
            user_id=b.id
            )
    sss = Recipe_User(  
            recipe_id=t.id,
            user_id=c.id
            )
    ttt = Recipe_User(  
            recipe_id=u.id,
            user_id=i.id
            )
    uuu = Recipe_User(  
            recipe_id=w.id,
            user_id=f.id
            )
    vvv = Recipe_User(  
            recipe_id=v.id,
            user_id=a.id
            )
    recipe_users.append(qqq)
    recipe_users.append(rrr)
    recipe_users.append(sss)
    recipe_users.append(ttt)
    recipe_users.append(uuu)
    recipe_users.append(vvv)
    return recipe_users

def create_dietary_nos(a,c,d,i,k,l,kk,oo,nn,tt,yy,xxb):
    dietary_nos=[]
    ab = Dietary_No(  
        ingredient_id=kk.id,
        user_id=a.id
        )
    ac = Dietary_No(  
            ingredient_id=oo.id,
            user_id=c.id
            )
    ad = Dietary_No(  
            ingredient_id=nn.id,
            user_id=i.id
            )
    ae = Dietary_No(  
            ingredient_id=tt.id,
            user_id=k.id
            )
    af = Dietary_No(  
            ingredient_id=yy.id,
            user_id=l.id
            )
    ag = Dietary_No(  
            ingredient_id=xxb.id,
            user_id=d.id
            )
    dietary_nos.append(ab)
    dietary_nos.append(ac)
    dietary_nos.append(ad)
    dietary_nos.append(ae)
    dietary_nos.append(af)
    dietary_nos.append(ag)
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
        print("Creating users...")
        users = []

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
        db.session.add_all(users)
        db.session.commit()
        
        print("Seeding recipes...")
        print("Creating recipes...")
        recipes = []
        r = Recipe(
        title = "Delicious Chicken Alfredo",
        instruction = "First, cook the chicken in a pan with some olive oil. Then, prepare the Alfredo sauce by melting butter and adding cream and Parmesan cheese. Combine the chicken and sauce, and serve over cooked pasta.",
        image = "https://iwashyoudry.com/wp-content/uploads/2022/08/Chicken-Alfredo-Low-Res-21.jpg",
        category = "Main Dishes",
        public = True,
        )

        s = Recipe(
            title = "Classic Beef Tacos",
            instruction = "Cook ground beef in a pan with taco seasoning. Serve the beef in taco shells with your choice of toppings such as lettuce, tomato, cheese, and salsa.",
            image = "https://www.twopeasandtheirpod.com/wp-content/uploads/2022/12/Beef-Tacos-55.jpg",
            category = "Main Dishes",
            public = True,
        )
        t = Recipe(
        title = "Spicy Tomato Soup",
        instruction = "Blend tomatoes, onions, and garlic together. Add spices and simmer for 30 minutes.",
        image = "https://www.hintofhealthy.com/wp-content/uploads/2021/10/Spicy-Tomato-Soup.jpg",
        category = "Soups",
        public = True,
        )

        u = Recipe(
            title = "Fresh Garden Salad",
            instruction = "Combine lettuce, tomatoes, cucumbers, and your choice of dressing.",
            image = "https://munchingwithmariyah.com/wp-content/uploads/2020/08/IMG_4425-scaled.jpg",
            category = "Salads",
            public = False,
        )
        v = Recipe(
        title = "Homemade Bread",
        instruction = "Mix flour, yeast, and water. Knead the dough and let it rise for a few hours. Bake in the oven until golden brown.",
        image = "https://moorlandseater.com/wp-content/uploads/2018/05/no-knead-bread-for-beginners-sliced-on-a-board-moorlands-eater-DSC07055.jpg",
        category = "Bread",
        public = True,
        )

        w = Recipe(
            title = "Chocolate Chip Cookies",
            instruction = "Combine butter, sugar, eggs, and vanilla extract. Mix in flour, baking soda, and salt. Stir in chocolate chips and bake until golden brown.",
            image = "https://sallysbakingaddiction.com/wp-content/uploads/2013/05/classic-chocolate-chip-cookies.jpg",
            category = "Desserts",
            public = False,
        )
        recipes.append(r)
        recipes.append(s)
        recipes.append(t)
        recipes.append(u)
        recipes.append(v)
        recipes.append(w)
        db.session.add_all(recipes)
        db.session.commit()
        
        print("Seeding ingredients...")
        print("Creating ingredients...")
        ingredients = []
        aa = Ingredient(
            name = "chicken",
            category = "poultry",
            nutrition = "Chicken is a great source of lean protein."
        )
        
        bb = Ingredient(
        name = "olive oil",
        category = "pantry",
        nutrition = "olive oil"
        )
        
        cc = Ingredient(
            name = "butter",
            category = "dairy",
            nutrition = "butter"
        )
        
        dd = Ingredient(
        name = "cream",
        category = "dairy",
        nutrition = "cream"
        )

        ee = Ingredient(
        name = " parmesan cheese",
        category = "dairy",
        nutrition = "Cheese is high in calcium and protein."
        )
        
        ff = Ingredient(
            name = "pasta",
            category = "dry goods",
            nutrition = "pasta"
        )

        gg = Ingredient(
            name = "ground beef",
            category = "meat",
            nutrition = "ground beef"
        )

        hh = Ingredient(
            name = "taco seasoning",
            category = "pantry",
            nutrition = "taco seasoning"
        )
        
        ii = Ingredient(
            name = "taco shells",
            category = "pantry",
            nutrition = "taco shells"
        )

        jj = Ingredient(
            name = "iceburg lettuce",
            category = "vegetables",
            nutrition = "iceburg lettuce"
        )

        kk = Ingredient(
            name = "tomato",
            category = "fruits",
            nutrition = "tomato"
        )

        ll = Ingredient(
            name = "shredded cheese",
            category = "dairy",
            nutrition = "shredded cheese"
        )
        mm = Ingredient(
        name = "salsa",
            category = "pantry",
            nutrition = "salsa"
        )
        nn = Ingredient(
            name = "onion",
            category = "vegetables",
            nutrition = "onion"
        )
        oo = Ingredient(
            name = "garlic",
            category = "vegetables",
            nutrition = "garlic"
        )
        pp = Ingredient(
            name = "salt",
            category = "pantry",
            nutrition = "salt"
        )
        qq = Ingredient(
            name = "black pepper",
            category = "pantry",
            nutrition = "black pepper"
        )
        rr = Ingredient(
            name = "cucumber",
            category = "vegetable",
            nutrition = "cucumber"
        )
        ss = Ingredient(
            name = "dressing",
            category = "pantry",
            nutrition = "dressing"
        )
        tt = Ingredient(
            name = "all-purpose flour",
            category = "pantry",
            nutrition = "all-purpose flour"
        )
        uu = Ingredient(
            name = "active dry yeast",
            category = "pantry",
            nutrition = "active dry yeast"
        )
        vv = Ingredient(
            name = "water",
            category = "pantry",
            nutrition = "water"
        )
        ww = Ingredient(
            name = "granulated sugar",
            category = "pantry",
            nutrition = "granulated sugar"
        )
        xx = Ingredient(
            name = "light brown sugar",
            category = "pantry",
            nutrition = "light brown sugar"
        )
        yy = Ingredient(
            name = "egg",
            category = "dairy",
            nutrition = "egg"
        )
        zz = Ingredient(
            name = "vanilla extract",
            category = "pantry",
            nutrition = "vanilla extract"
        )
        xxa = Ingredient(
            name = " baking soda",
            category = "pantry",
            nutrition = " baking soda"
        )
        xxb = Ingredient(
            name = "chocolate chips",
            category = "pantry",
            nutrition = "chocolate chips"
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
        ingredients.append(nn)
        ingredients.append(oo)
        ingredients.append(pp)
        ingredients.append(qq)
        ingredients.append(rr)
        ingredients.append(ss)
        ingredients.append(tt)
        ingredients.append(uu)
        ingredients.append(vv)
        ingredients.append(ww)
        ingredients.append(xx)
        ingredients.append(yy)
        ingredients.append(zz)
        ingredients.append(xxa)
        ingredients.append(xxb)
        db.session.add_all(ingredients)
        db.session.commit()
        
        print("Seeding Recipe-Ingredients...")
        recipe_ingredient = create_recipe_ingredients(r, s,t,u,v,w,aa,bb,cc,dd,ee,ff,gg,hh,ii,jj,kk,ll,mm,nn,oo,pp,qq,rr,ss,tt,uu,vv,ww,xx,yy,zz,xxa,xxb)
        db.session.add_all(recipe_ingredient)
        db.session.commit()
        
        print("Seeding Recipe_User...")
        recipe_user = create_recipe_users(a,b,c,f,i, r,s,t,u,v,w)
        db.session.add_all(recipe_user)
        db.session.commit()
        
        print("Seeding Dietary_Nos...")
        dietary_no = create_dietary_nos(a,c,d,i,k,l,kk,oo,nn,tt,yy,xxb)
        db.session.add_all(dietary_no)
        db.session.commit()
       
if __name__ == '__main__':
    seed_database()