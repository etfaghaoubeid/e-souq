const User = require('../models/user')
exports.login = async(req, res)=>{
    const {email , password}= req.body
    const user =await User.find({email});
    if(user && user.password===password){
        return res.satus(200).json(user)
    }
    return res.satus(400).json({message:'email or password invalid'})

};
exports.register = async(req, res)=>{
    const {email , password , } = req.body;

    const user = new User({email, password});
    const newUser = await user.save();
    if(!newUser){
        return res.satus(400).json({message:'some things went wrong'})
    }
    return res.satus(201).json(newUser)

}