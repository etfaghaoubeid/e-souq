const express = require('express');
const dotenv = require('dotenv')
const productRoute = require('./routes/product');
const { connectToDB } = require('./config/db');

dotenv.config()
const PORT =  process.env.PORT|| 3333

const init = async (app)=>{
    await connectToDB()
    app.listen(process.env.PORT,()=>{
        console.log(`app start in ${process.env.NODE_ENV}`)
    })
    
app.use(express.json());
app.use('/products',productRoute)
}
init(express())