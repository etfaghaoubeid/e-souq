const {model, Schema} = require('mongoose');
const bcrypt = require('bcryptjs');
const { schema } = require('./product');
const userSchema = Schema({
    name:{
        type:String, 
        required:true
    }, 
    email:{
        type:String, 
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    }, 
    isAdmin:{
        required:true, 
        type:Boolean,
        default:false
    }
},{timestamps:true});

userSchema.methods.comparePassword = async function(passwordToCompare){
    return await bcrypt.compare(passwordToCompare, this.password)
}
userSchema.methods.hashPassword = async function(passwordToHash){
    return await bcrypt.genSalt(passwordToHash , 10)
};
userSchema.pre('save', async function(next){
    if(!this.isModified('password')){
        next()
    }
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password , salt)
})
const User = model('User', userSchema);
module.exports = User;