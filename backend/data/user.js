const bycript = require('bcryptjs')

exports.users = [
    {
        name:'Admin User', 
        email:'admin@gmail.com', 
        password:bycript.hashSync('123456',10), 
        isAdmin:true
    },
    {
        name:'Admin1 User', 
        email:'admin1@gmail.com', 
        password:bycript.hashSync('123456',10), 
        isAdmin:true
    },
    {
        name:'Admin2 User', 
        email:'admin2@gmail.com', 
        password:bycript.hashSync('123456',10),
    },
]