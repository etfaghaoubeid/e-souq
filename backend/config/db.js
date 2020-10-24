const {connect} = require('mongoose');

exports.connectToDB = async ()=>{
    try{
        const connection = await connect(process.env.DB_URI,{ useNewUrlParser: true,useUnifiedTopology: true })
        console.log('connected successfuly to db');
    }catch(error){
        console.log(error.message)
    }
}
