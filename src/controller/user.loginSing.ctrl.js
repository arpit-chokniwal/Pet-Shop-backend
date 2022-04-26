const jwt = require('jsonwebtoken')
const users = require('../model/user.loginSingup.Schema')
require('dotenv').config({path : '../../.env'})


function newToken(user) {
    return jwt.sign({ user }, process.env.JWT_SECRET_KEY);
}

const ragister = async(req,res)=>{
    try{
        console.log(1000);
        const email = await users.findOne({email : req.body.email}).lean().exec()

        if(email) return res.send({message : `email alredy exist`})

        let user = await users.create(req.body)

        const token = newToken(user)

        res.send({token,user,admin:false})

    }catch(e){
        console.log(e)
        res.status(500).send(e);
    }
}

const login = async(req,res)=>{
    try{

        const user = await users.findOne({email:req.body.email})

        if(!user) return res.status(400).send('wrong pass || email')

        const matchPass = user.checkPassword(req.body.password)
        
        if(!matchPass) return res.status(400).send('wrong pass || email')

        const token = newToken(user)

        if(user.email === 'a@a.com'){
            const admin = true
            res.send({token,user,admin})    
        }

        res.send({token,user,admin:false})

    }catch(e){
        console.log(e)
        
    }
}

module.exports = {ragister, login}