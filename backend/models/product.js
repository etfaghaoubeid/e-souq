class Product {
    _id
    name;
    imageURL;
    description;
    brand;
    category;
    countInStock;
    price;
    rating;
    numViewers;
    constructor( imageURL, description, brand,category,countInStock,price, rating,numViewers){
        this._id = Math.random();
        this.imageURL =imageURL;
        this.description = description;
        this.brand=brand;
        this.category= category;
        this.countInStock = countInStock;
        this.price = price;
        this.rating = rating;
        this.numViewers = numViewers
    }
}
module.exports = Product
