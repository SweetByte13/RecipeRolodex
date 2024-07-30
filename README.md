# Recipe Rolodex


## Introduction

Welcome to Recipe Rolodex, a recipe application aimed at helping you find and create new recipes! 

---
## Setup

### Fork and clone this repository:
```console
git clone git@github.com:<username>/RecipeRolodex.git
```

### `server/`

The `server/` directory contains all of your backend code.
`app.py` is your Flask application.


To download the dependencies for the backend server, run:

```console
pipenv install
pipenv shell
```
Manually install dotenv, pytesseract, Pillow, and flask-bcrypt using this code:
```console
pip install python-dotenv
pip install pytesseract
pip install pillow
pip install flask-bcrypt
```
Ensure the database is up to date by running:
```console
flask db init
flask db upgrade head
```
Then seed the database by running:
```console
python seed.py
```

You can run your Flask API on [`localhost:5555`](http://localhost:5555) by
running:
```console
python server/app.py
```
Check that your server serves the default route `http://localhost:5555`. You
should see a web page with the heading "Project Server".


### `client/`

The `client/` directory contains all of your frontend code. The file
`package.json` has been configured with common React application dependencies,
include `react-router-dom`. The file also sets the `proxy` field to forward
requests to `"http://localhost:5555". 

To download the dependencies for the frontend client, run:

```console
npm install --prefix client
```

You can run your React app on [`localhost:3000`](http://localhost:3000) by
running:
```console
npm start --prefix client
```

Recipe Rolodex should now be running in your web browser. Begin interacting with the application and have fun!

### 

## Overview
Recipe Rolodex is a user-friendly application designed to help you manage your recipes. 
With Recipe Rolodex, you can view all recipes, add your own, and save your favorites to your personal library. 
The application also allows you to upload recipe files and converts them into an editable digital format.

## Features

### User Authentication
- **Sign Up**: Create a new account to start adding and saving recipes.
- **Log In**: Log in to your account to access your personal recipe library.

### Recipe Management
- **View All Recipes**: Browse through a vast collection of recipes added by users from around the world.
- **Add Recipes**: Add your own recipes to the application. You can include ingredients, instructions, and even photos. You have the choice to make your recipes public or keep them a family secret.
- **Save Recipes**: Save any recipe that you like to your personal library for easy access in the future.

### Recipe File Upload
- **Upload Recipe Files**: Have a recipe in a file? No problem! Upload the file and our application will convert it into an editable digital format. This works for image files as well. The OCR softwear used, Tesseract, allows for image files ( such as .png, .jpeg, .jpg) to be uploaded. The text from the image is then grabbed and dropped into the instrruction filed in the "create a recipe" form. To ensure the best results on the picked up text, a clear and cropped image is best.   

## Getting Started
To get started with Recipe Rolodex, sign up for an account and start exploring recipes from around the world. 
Add your own recipes and save your favorites to your personal library. Enjoy the convenience of having all your recipes in one place with Recipe Rolodex.
Happy cooking!

# Future Improvements

## Grocery API Integration
One of the key enhancements planned for the future is the integration of a grocery API. This will allow the application to provide real-time cost estimates for the ingredients required in the user's compiled grocery list. This feature aims to make meal planning more budget-friendly and efficient.

## Measurement System Toggle
To cater to a global user base, a toggle feature is planned to switch between the Imperial and Metric measurement systems. This will allow users to view ingredient quantities in the units they are most comfortable with.

## Dietary Restrictions
In the interest of personalization and health consciousness, a feature is planned that allows users to add their dietary restrictions to their profiles. The application will then filter out or suggest substitute ingredients for recipes that contain items the user is restricted from.

## Nutrition API Integration
To further enhance the health-conscious aspect of the application, there are plans to integrate a nutrition API. This will allow users to view comprehensive nutritional facts for each recipe, helping them make informed dietary choices.

These improvements aim to make the application more user-friendly, personalized, and health-oriented, ultimately enhancing the overall user experience. Stay tuned for these exciting updates!


# Technology Used

This application was created with a variety of technologies to ensure a smooth, efficient, and user-friendly experience. Here's a list of the main technologies used:

- **Frontend:**
  - React JS: A JavaScript library for building user interfaces.
  - React-Bootstrap: The most popular front-end framework rebuilt for React.
  - HTML: The standard markup language for documents designed to be displayed in a web browser.
  - CSS: A stylesheet language used for describing the look and formatting of a document written in HTML.
  - React-router-dom: The standard routing library for React.
  - Formik: A small library that helps with the 3 most annoying parts of form management in React.
  - Yup: A JavaScript schema builder for value parsing and validation.

- **Backend:**
  - Python: A high-level, interpreted programming language.
  - Flask: A micro web framework written in Python.
  - SQLite3: A C library that provides a lightweight disk-based database.
  - PostgreSQL: A powerful, open-source object-relational database system.
  - RESTful API: An architectural style for an application program interface (API) that uses HTTP requests to access and use data.

- **Libraries and Packages:**
  - Pillow: The friendly PIL (Python Imaging Library) fork.
  - bcrypt: A robust, safe password-hashing library.
  - python-dotenv: A Python module that allows you to specify environment variables in traditional UNIX-like “.env” (dot-env) file.


## Feedback
I'd love to hear your feedback! If you have any suggestions or run into any issues, please let me know.

## Project Notes
This project was created as part of Flatiron, for the final project of Tova Hillman. This project is not considered 100% complete, although the current features are all functional. I have many ideas of how to continue to improve the users experience, and hopes to have more features avaliable soon.

## Contributions
This project is not looking for contributions, as it is to continue to increase my skills. 

## Contact Information
LinkedIn: www.linkedin.com/in/tova-hillman