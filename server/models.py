from sqlalchemy.ext.hybrid import hybrid_property
from sqlalchemy_serializer import SerializerMixin
from sqlalchemy.ext.associationproxy import association_proxy
from config import db, bcrypt
from sqlalchemy.orm import validates
from datetime import datetime

# User —--< u/p >-------plan

class User(db.Model, SerializerMixin):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key = True)
    first_name = db.Column(db.String, nullable=False)
    last_name = db.Column(db.String, nullable=False)
    birth_year = db.Column(db.Integer, nullable=False)
    username = db.Column(db.String, nullable=False)
    _password_hash = db.Column(db.String, nullable=False)




    # @validates('birth_year')
    # def validate_birth_year(self, key, year):
    #     today = datetime.now()
    #     if today    

class Plan(db.Model, SerializerMixin):
    __tablename__ = 'plans'

    id = db.Column(db.Integer, primary_key=True)
    start_time = db.Column(db.DateTime)
    end_time = db.Column(db.DateTime)


