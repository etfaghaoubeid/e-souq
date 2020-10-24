const Product = require('../models/product')
let products =[
    {
        _id:'1',
        name:'Slim Pants',
        imageURL:'https://images.pexels.com/photos/1082529/pexels-photo-1082529.jpeg?cs=srgb&dl=pexels-mica-asato-1082529.jpg&fm=jpg',
        description:'To get started you’ll need to install the following packages into your project using a package manager like npm and yarn. Here are examples that install everything you need and our solid style of icons using each respective package manager.', 
        brand:'Celio',
        category:'Clothes',
        countInStock:9,
        price:78, 
        rating:3,
        numViewers:5, 
    },
    {
        _id:'3',
        name:'Jacket',
        imageURL:'https://images.pexels.com/photos/5092736/pexels-photo-5092736.jpeg?cs=srgb&dl=pexels-evelina-zhu-5092736.jpg&fm=jpg',
        description:'To get started you’ll need to install the following packages into your project using a package manager like npm and yarn. Here are examples that install everything you need and our solid style of icons using each respective package manager.', 
        brand:'Apple',
        category:'Clothers',
        countInStock:9,
        price:78, 
        rating:4,
        numViewers:30, 
    },
    {
        _id:'13',
        name:'Iphone 12 Pro',
        imageURL:'https://images.pexels.com/photos/4071887/pexels-photo-4071887.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        description:'To get started you’ll need to install the following packages into your project using a package manager like npm and yarn. Here are examples that install everything you need and our solid style of icons using each respective package manager.', 
        brand:'Apple',
        category:'Electronics',
        countInStock:9,
        price:78, 
        rating:3,
        numViewers:3, 
    },
    {
        _id:'15',
        name:'Airpod',
        imageURL:'https://images.pexels.com/photos/4513950/pexels-photo-4513950.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',

        description:'To get started you’ll need to install the following packages into your project using a package manager like npm and yarn. Here are examples that install everything you need and our solid style of icons using each respective package manager.', 
        brand:'Apple',
        category:'Electronics',
        countInStock:9,
        price:78, 
        rating:4,
        numViewers:12, 
    }
] 

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