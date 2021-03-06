const User = require('../models/user')
const bcrypt = require('bcryptjs');
const asyncHandler = require('express-async-handler');
const { generateToken } = require('../utils/generate-token');

exports.login = asyncHandler( async(req, res)=>{
    const {email , password}= req.body
    const user =await User.findOne({email});
    if(user && (await user.comparePassword(password))){
        return res.status(200).json({
            email:user.email,
            name:user.name, 
            id:user._id,
            token:generateToken(user._id)
        })
    }
    res.status(401)
    throw new Error('email or password invalid');

});
exports.register = asyncHandler( async(req, res)=>{
    const {email , password ,name } = req.body;
    const user = await User.findOne({email});
    if(user){
        res.status(400)
        throw  new Error( 'Email already in use')
    }
    const newUser = new User({name, email, password});
    const savedUser = await newUser.save();
    if(!savedUser ){
        return res.status(404).json({message:'some things went wrong'})
    }
    return res.status(201).json(savedUser)

});
exports.updateProfile = asyncHandler(async (req, res)=>{
    const {email, password, name } = req.body;
    const user = await User.findOne({_id:req.user._id});
    if(user){
        user.name = name || user.name, 
        user.email = email  || user.email
    }
    if(password){
        user.password = password 
    }
    const savedUser = await user.save();
    if (savedUser) {
        
        return res.status(200).json({
            email:savedUser.email,
            name:savedUser.name, 
            id:savedUser._id,
            token:generateToken(savedUser._id)
        })
    }
    return res.status(404).json({message:'some things went wrong'})

})
exports.getProfile = asyncHandler(async (req, res)=>{
    const user = await User.findById(req.user._id).select('-password')
    if(user){
        return res.status(200).json(user)
    }else{
        res.status(404)
        throw new Error('user is not founds')
    }
})