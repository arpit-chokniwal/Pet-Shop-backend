const express = require('express')
const rout = express.Router()
const post = require('../model/shopData.schema')

rout.post('' ,async(req,res)=>{
    try{ 
        const posts = await post.create(req.body)
        res.send(posts)        

    }catch(e){
        console.log(e)
    }
})


rout.get('',async(req,res)=>{
    try{    

        const posts = await post.find().lean().exec()
        res.send(posts)        

    }catch(e){
        console.log(e)
    }
})
rout.get('/:id',async(req,res)=>{
    try{    

        const posts = await post.findById(req.params.id).lean().exec()
        res.send(posts)        

    }catch(e){
        console.log(e)
    }
})

rout.patch("/:id" , async (req, res) => {
    try {
      const posts = await post.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      });  
      return res.send(posts);
    } catch (err) {
      return res.status(500).send(err.message);
    }
  });

rout.delete('/:id',async(req,res)=>{
    try{    

        const posts = await post.findByIdAndDelete(req.params.id).lean().exec()
        res.send(posts)        

    }catch(e){
        console.log(e)
    }
})


module.exports = rout