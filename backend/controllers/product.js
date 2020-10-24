const Product = require('../models/product')


exports.getProducts = (req, res)=>{
    console.log("reeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee")
    return res.status(200).send(products)
}
exports.getProduct = (req, res)=>{
    const id = req.params.id ;
    const product = products.find(p=>p._id ===id)
    if(!product){
        return res.status(400).json({message:`there is no product with this ${id}`})
    }
    return res.status(200).send(product)

};
exports.createProduct= (req,res)=>{
    const {name, imageURL,description,brand,category,countInStock,price,rating,numViewers} = req.body;
    const product = new Product(name, imageURL,description,brand,category,countInStock,price,rating,numViewers);
    products.push(product);
    return res.status(201).send(product);

}
exports.updateProduct = (req, res)=>{
    const id = req.params.id ;
    const {name, imageURL,description,brand,category,countInStock,price,rating,numViewers} = req.body;
    const product = products.find(p=>p._id ===id)
    if(!product){
        return res.status(400).json({message:`there is no product with this ${id}`})
    }
    product.name = name;
    product.imageURL = imageURL ;
    product.description = description ;
    product.brand = brand ;
    product.category = category;
    product.countInStock = countInStock;
    product.price = price;
    product.rating = rating;
    product.numViewers = numViewers;
    return res.status(201).send(product)
}
exports.deleteProduct = (req, res)=>{
    const id = req.params.id ;
    const product = products.find(p=>p._id ===id)
    if(!product){
        return res.status(400).json({message:`there is no product with this ${id}`})
    }

    products= products.filter(product =>product._id !== id)
   return  res.status(201).send(product)



}