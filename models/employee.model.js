const mongoose=require('mongoose')

const empSchema=mongoose.Schema({
    FirstName:String,
    LastName:String,
    Email:String,
    Department:String,
    Salary:String
})

const EmpModel=mongoose.model('employee',empSchema)

module.exports={
    EmpModel
}