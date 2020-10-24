const express = require('express');
const dotenv = require('dotenv')
const productRoute = require('./routes/product');

dotenv.config()
const PORT =  process.env.PORT|| 3333


const app = express();
app.use(express.json());
app.use('/products',productRoute)

app.listen(PORT , ()=>{
    console.log(`app start in ${process.env.NODE_ENV}`)
});