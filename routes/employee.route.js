const express=require('express')
const { EmpModel } = require('../models/employee.model')

const empRoute=express.Router()


empRoute.post('/create',async (req,res)=>{
    const payload=req.body;
    try {
        const employee=new EmpModel(payload)
        await employee.save()
        res.send('New Employee has been Added')
    } catch (err) {
        res.send(err.message)
    }
})

empRoute.get('/all',async(req,res)=>{
    const employees=await EmpModel.find()
    res.send(employees)
})

module.exports={
    empRoute
}