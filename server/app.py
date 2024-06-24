#!/usr/bin/env python3
from flask import request, session, make_response
from flask_restful import Resource
from config import app, db, api
from models import User, Recipe, Ingredient, Recipe_Ingredient, Recipe_User, Dietary_No


class CheckSession(Resource):
    def get(self):
        if 'user_id' in session:
            user_id = session['user_id']
            if user_id:
                user=db.session.get(User, user_id)
                if user:
                    return make_response(user.to_dict(), 200)
        return make_response({"error": "Unauthorized: Must login"}, 401)

class Home(Resource):
    pass


api.add_resource(Home, '/')
api.add_resource(CheckSession, '/check_session')

if __name__ == '__main__':
    app.run(port=5555, debug=True)

