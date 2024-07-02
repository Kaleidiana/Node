const  Student = require('../Models/students');
const { default: mongoose } = require("mongoose");
const createError = require('http-errors');
// adding data
module.exports = {
    addStudent: async(req,res,next)=>{
        
        try {
            const student = new Student(req.body)
            const result = await student.save();
            res.send(result)
        }catch (error) {
            console.log(error.message);
            if(error.name === "ValidationError"){
                next(createError(422, error.message))
                return;
            }
            next(error)
        }
    },

// getting/retreiving data
    getAllStudents: async(req,res,next)=>{
        Student.find({}).then((Student)=>{
            res.send(Student);
        });
    },

    //update students in the DB
    updateStudent: async(req, res, next)=>{

        try{
            const id = req.params.id;
            const update = req.body;
            const options = {new: true}
            const result = await Student.findByIdAndUpdate(id, update, options)

            res.send(result);
        } catch (error) {
            console.log(error.message)
        }
},
// Deletes a student

deleteStudent:async(req,res,next)=> {
    try{
        const id = req.params.id;
        const update= req.body;
        const options ={new: true}
        const result = await Student.findByIdAndDelete(id,update,options)
         res.send(result);
    }catch(error){

        console.log(error.message);
    }
},
    

getStudent: async(req, res, next) =>{
    const id = req.params.id;
    try{
        const student = await Student.findById(id)
        if(!student){
            throw(createError(404, "student does not exist"))
        }
        res.send(student)
    } catch (error) {
        console.log(error.message);
        if(error instanceof mongoose.CastError){
            next(createError(400, "Invalid student id"));
            return;
        }
        next(error);
    }
    
}

}
