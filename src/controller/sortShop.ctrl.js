const express = require('express')
const rout = express.Router()
const post = require('../model/shopData.schema')


rout.get('/cpd',async(req,res)=>{
    try{    

        const posts = await post.find().sort({CPD:1}).lean().exec()
        res.send(posts)        

    }catch(e){
        console.log(e)
    }
})


rout.get('/Capacity',async(req,res)=>{
    try{    

        const posts = await post.find().sort({Capacity:-1}).lean().exec()
        res.send(posts)        

    }catch(e){
        console.log(e)
    }
})


rout.get('/City',async(req,res)=>{
    try{    

        const posts = await post.find().sort({City: 1}).lean().exec()
        res.send(posts)        

    }catch(e){
        console.log(e)
    }
})



rout.get('/Rating',async(req,res)=>{
    try{    

        const posts = await post.find().sort({Rating: -1}).lean().exec()
        res.send(posts)        

    }catch(e){
        console.log(e)
    }
})



rout.get('/Verified',async(req,res)=>{
    try{    

        const posts = await post.find().sort({Verified:-1}).lean().exec()
        res.send(posts)        

    }catch(e){
        console.log(e)
    }
})


module.exports = rout