const mongoose = require('mongoose');

const petShopSchema = mongoose.Schema({
    Capacity:{type:Number },
    CPD:{type:Number },
    Rating:{type:Number },
    Name:{type:String },
    City:{type:String },
    Address:{type:String },
    Verified:{type:String },
    Image :{type:String }
},{
    timestamps:true,
    versionKey:false
})

const addPet = mongoose.model('petShop',petShopSchema)
module.exports = addPet 