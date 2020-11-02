const {Schema, model} = require('mongoose')
const reviewSchema = new Schema({
    name:{
        type:String, 
        required:true
    }, 
    rating:{
        type:Number, 
        required:true,
    }, 
    comment:{
        type:String, 
       required:true,

    }
},{timestamps:true})
const productSchema = new Schema( {
    user:{
        type:Schema.Types.ObjectId,
        required:true,
        ref:'User'
    },
    name:{
        required:true, 
        type:String
    },
    imageURL:{
        required:true, 
        type:String
    },
    description:{
        required:true, 
        type:String
    },
    brand:{
        required:true, 
        type:String
    },
    category:{
        required:true, 
        type:String
    },
    countInStock:{
        required:true, 
        type:Number,
        default:0
    },
    price:{
        required:true, 
        type:Number,
        default:0
    },
    rating:{
        required:true, 
        type:Number,
        default:0
    },
    numViewers:{
        required:true, 
        type:Number,
        default:0
    },
    reviews:[reviewSchema]
   
},{timestamps:true})
const Product = model('Product', productSchema)
module.exports = Product
