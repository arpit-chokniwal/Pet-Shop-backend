const express = require('express')
const rout = express.Router()
const post = require('../model/addPet.Schema')




rout.get('/:id',async(req,res)=>{
    try{    

        const posts = await post.find({ownerId:req.params.id}).populate({
            path:'ownerId',
            select:['name','email']
        }).populate({
            path:'shopId',
            select:['Name']
        }).lean().exec()
        res.send(posts)        

    }catch(e){
        console.log(e)
    }
})





module.exports = rout