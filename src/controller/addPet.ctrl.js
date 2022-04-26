const express = require('express')
const rout = express.Router()
const post = require('../model/addPet.Schema')
const authenticate = require('../middle/author')


rout.post('', authenticate ,async(req,res)=>{
    try{ 
        req.body.user_id = req.user._id; 
        const posts = await post.create(req.body) 
        res.send(posts)        

    }catch(e){
        console.log(e)
    }
})


rout.get('',async(req,res)=>{
    try{    

        const posts = await post.find().populate({
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




rout.patch("/:id", authenticate , async (req, res) => {
    try {
      const posts = await post.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      });  
      return res.send(posts);
    } catch (err) {
      return res.status(500).send(err.message);
    }
  });

rout.delete('/:id', authenticate,async(req,res)=>{
    try{    

        const posts = await post.findByIdAndDelete(req.params.id).lean().exec()
        res.send(posts)        

    }catch(e){
        console.log(e)
    }
})


module.exports = rout