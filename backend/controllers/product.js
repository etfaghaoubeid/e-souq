const asyncHandler = require('express-async-handler')
const Product = require('../models/product')


exports.getProducts =asyncHandler(async (req, res)=>{
        const products = await Product.find()
        if(!products){
            res.status(404)
            throw new Error('No product found')
        }
        return res.status(200).json(products)

});
exports.getProduct = asyncHandler( async(req, res)=>{
        const id = req.params.id ;
        const product = await Product.findById(id)
        if(!product){
            res.status(400)
            throw new Error(`there is no product with this ${id}`)
        }
        return res.status(200).json(product)
});
exports.createProduct=asyncHandler(  async (req,res)=>{
        const {name, imageURL,description,brand,category,countInStock,price,rating,numViewers} = req.body;
        const product = new Product(name, imageURL,description,brand,category,countInStock,price,rating,numViewers);
        const createdProduct = await Product.save(product);
        if(!createdProduct){
            res.status(400)
            throw new Error('some thing went wrong')
        }
        return res.status(201).send(createdProduct);

});
exports.updateProduct =  asyncHandler( async  (req, res)=>{
        const id = req.params.id ;
        const product = await Product.findById(id) 
        if(!product){
            res.status(404)
            throw new Error(`there is no product with this ${id}`)
        }
        const {name, imageURL,description,brand,category,countInStock,price,rating,numViewers} = req.body;
        product.name = name; 
        product.imageURL = imageURL ;
        product.description = description ;
        product.brand = brand ;
        product.category = category;
        product.countInStock = countInStock;
        product.price = price;
        product.rating = rating;
        product.numViewers = numViewers;
        const updatedProduct = await product.save()
        if(!updatedProduct){
            res.status(500);
            throw new Error('Failed to update the product')
        }
        return res.status(201).send(updatedProduct)
})
exports.deleteProduct = asyncHandler( async (req, res)=>{
    const id = req.params.id ;
        await Product.deleteOne({_id:id})
        return  res.status(201).send({message:'product deleted'})
})