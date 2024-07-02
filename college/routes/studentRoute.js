const express = require('express');
const StudentController = require('../Controller/StudentController')

//get a list of students from the database
const routes = express.Router();


routes.get('/getAllStudents',StudentController.getAllStudents);

routes.post('/addstudents',StudentController.addStudent);

routes.patch('/updateStudent/:id',StudentController.updateStudent);

routes.delete('/deleteStudent/:id',StudentController.deleteStudent);

routes.get('/getStudent/:id',StudentController.getStudent);

module.exports = routes;