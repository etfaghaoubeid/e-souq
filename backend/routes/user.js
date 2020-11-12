const {Router} = require('express');
const { login, register, getProfile, updateProfile } =require('../controllers/user');
const { authGarde } = require('../lib/auth-gard');
 const router =  Router();
 router.post('/login'  , login);
 router.post('/register', register)
 router.route('/profile').get(authGarde, getProfile).put(authGarde , updateProfile)


 module.exports = router
