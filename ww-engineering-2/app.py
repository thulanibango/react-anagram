import re
import random
from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow
from datetime import datetime
import os

app = Flask(__name__)
basedir =  os.path.abspath(os.path.dirname(__file__))

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///' + os.path.join(basedir, 'db.sqlite')
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.secret_key = 'thisisasecret'


#Initialising db
db = SQLAlchemy(app)

#Initialising ma
ma=Marshmallow(app)


students = {
    "student": {"name":"hello","lastname":"world"},
    "student2": {"name":"hello","lastname":"world"},
    "student3": {"name":"hello","lastname":"world"}
    }



#Student registration class
class StudentRegistration(db.Model):
    
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(200), nullable=False)
    lname = db.Column(db.String(200), nullable=False)
    email = db.Column(db.String(200), nullable=False)
    address = db.Column(db.String(200), nullable=False)
    genEmail = db.Column(db.String(200), nullable=False)
    genStudentNo = db.Column(db.String(200), nullable=False)
    status = db.Column(db.String(200), nullable=False)
    
    dob = db.Column(db.String(200), nullable=False)
    citizenship = db.Column(db.String(200), nullable=False)
    gender = db.Column(db.String(200), nullable=False)
    IDnumber = db.Column(db.String(200),unique=True, nullable=False)
    age = db.Column(db.String(200), nullable=False)
    
    completed = db.Column(db.Integer, default=0)
    date_created = db.Column(db.DateTime, default=datetime.utcnow)
    
    def __init__(self, name, lname, email, address, genEmail, genStudentNo, status, dob, citizenship, gender, IDnumber, age, completed):
        self.name = name
        self.lname = lname
        self.email = email
        self.address = address
        self.genEmail = genEmail
        self.genStudentNo = genStudentNo
        self.status = status
        self.dob = dob
        self.citizenship = citizenship
        self.gender = gender
        self.IDnumber =IDnumber
        self.age =age
        self.completed = completed
        
        
class StudentSchema(ma.Schema):
    class Meta:
        fields = ('id', 'name', 'lname', 'email', 'address','genEmail', 'genStudentNo', 'status', 'dob', 'citizenship', 'gender', 'IDnumber', 'age', 'completed')

#initialise schema
student_schema = StudentSchema()
students_schema = StudentSchema(many=True)
 #route creation
@app.route('/students', methods=['POST'])
def add_student():
    name = request.json['name']
    lname = request.json['lname']
    email = request.json['email']
    address = request.json['address']
    IDnumber = request.json['IDnumber']
    citizenship = request.json['citizenship']
    genEmail = "hellohello"
    genStudentNo = "hellohello"
    status = "hellohello"
    dob = "hellohello"
    gender = "hellohello"
    age = "hellohello"
    completed = "hellohello"
   
    
    new_student = StudentRegistration(name, lname, email, address, genEmail, genStudentNo, status, dob, citizenship, gender, IDnumber, age, completed)
    db.session.add(new_student)
    db.session.commit()
    
    return student_schema.jsonify(new_student)
@app.route('/students', methods=['GET'])
def get_products():
    all_students = StudentRegistration.query.all()
    results = students_schema.dump(all_students)
    return jsonify(results)
      
@app.route('/students/<id>', methods=['GET'])
def get_product(id):
    student = StudentRegistration.query.get(id)
    return students_schema.jsonify(student)
      
    
# api.add_resource(StudentRegistration, "/api/v1/students/")
# api.add_resource(StudentRegistration, "/api/v1/students/<int:student_id>")

if __name__=="__main__":
    with app.app_context():
        db.create_all()
    app.run(debug=True)