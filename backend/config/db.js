const {connect} = require('mongoose');

exports.connectToDB = async ()=>{
    let uri = 'mongodb+srv://atigh:atigh@cluster0.xscdc.mongodb.net/mern-shop'
    try{
        const connection = await connect(process.env.DB_URI||uri,{ useNewUrlParser: true,useUnifiedTopology: true })
        console.log('connected successfuly to db');
    }catch(error){
        console.log(error.message)
    }
}
