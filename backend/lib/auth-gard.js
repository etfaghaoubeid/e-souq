const expressAsyncHandler = require('express-async-handler');
const jwt = require('jsonwebtoken');
const asyncHandler = require('express-async-handler')
const User = require('../models/user')
exports.authGarde = asyncHandler( async(req, res, next)=>{
    let token = req.headers.authorization;
    if(token && req.headers.authorization.startsWith('Bearer')){
        try {
            token = req.headers.authorization.split(' ')[1]
            const decoded = jwt.verify(token, process.env.JWT_SECRET)
            req.user = await User.findById(decoded.id).select('-password');
            next()
        }catch (error) {
            res.status(401)
            throw new Error('Not authorized , token failed')
        }
    }
    if(!token){
        res.status(401)
        throw new Error('unauthorized request')
    }
    
})