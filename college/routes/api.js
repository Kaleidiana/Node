const express = require('express');

//get a list of students from the database
const routes = express.Router();
routes.get('/students', (req, res) => {
    res.send({type:'Get Request'});
});

//add student to the DB
routes.post('/students', (req, res) => {
    res.send({type:'Post Request'});
});

//update students in the DB
routes.put('/students/:id', (req,res) => {
    res.send({type:'Update Request'});
});

//delete a student from the DB
routes.delete('/students/:id', (req,res) => {
    res.send({type:'Delete'});
});

module.exports = routes;