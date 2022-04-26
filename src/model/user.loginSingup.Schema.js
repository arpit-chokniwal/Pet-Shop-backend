const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = mongoose.Schema({
    name:{type:String},
    email:{type:String, require:true, unique: true },
    password:{type:String, require:true}
},{
    timestamps:true,
    versionKey:false
})


userSchema.pre("save", function (next) {
    if (!this.isModified("password")){
       return next();
    }  
    const hashPass = bcrypt.hashSync(this.password, 8);
    this.password = hashPass;
    return next();
});
  
userSchema.methods.checkPassword = function (password) {
    return bcrypt.compareSync(password, this.password);
};

const users = mongoose.model('Data',userSchema)
module.exports = users 