const express = require('express');
const dotenv = require('dotenv')
const productRoute = require('./routes/product');
const {errorHandler,routeHandler} = require('./lib/middleware')
const { connectToDB } = require('./config/db');
const cors = require('cors')

dotenv.config()
const PORT =  process.env.PORT|| 3333

const init = async (app)=>{
    await connectToDB()
    app.listen(process.env.PORT,()=>{
        console.log(`app start in ${process.env.NODE_ENV}`)
    })   
app.use(express.json());
app.use(cors())
app.use('/products',productRoute);
app.use('/user', require('./routes/user'));
app.use(routeHandler)
app.use((errorHandler));
}
init(express())