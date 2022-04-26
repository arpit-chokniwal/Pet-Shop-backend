const mongoose = require('mongoose');

require('dotenv').config({path: '../../.env'})

const connect = ( ) =>{
    return mongoose.connect(process.env.Mongo_Url)
}
module.exports = connect