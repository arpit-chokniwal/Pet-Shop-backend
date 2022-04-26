const mongoose = require('mongoose');

const petSchema = mongoose.Schema({
    name:{type:String, require:true },
    Days:{type:Number, require:true },
    mobNum:{type:Number, require:true },
    petWeight:{type:Number, require:true },
    ownerId : { type : mongoose.Schema.Types.ObjectId , ref : "Data", required : true },
    shopId : { type : mongoose.Schema.Types.ObjectId , ref : "petShop", required : true },
    Image :{type:String, require:true }
},{
    timestamps:true,
    versionKey:false
})

const addPet = mongoose.model('Pets',petSchema)
module.exports = addPet 