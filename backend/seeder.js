const Product = require('./models/product');
const User = require('./models/user');
const Order = require('./models/order');
const {users} = require('./data/user');
const {products} = require('./data/products');
const { connectToDB } = require('./config/db');

const importData= async()=>{
    try{
        await connectToDB()
        await Product.deleteMany();
        await Order.deleteMany();
        await User.deleteMany();
        const creatUsers =await  User.insertMany(users)
        const adminUser = creatUsers[0]._id;
        const sampleProduct = products.map(p=>{
            return {...p ,user:adminUser}
        })
       await  Product.insertMany(sampleProduct)
       console.log('data imported successfuly')
       process.exit()
    }catch(error){
        console.log(error)
    }

   
}
const Deletedata = async ()=>{
    try{
        await connectToDB()
        await Product.deleteMany();
        await User.deleteMany();
        await Order.deleteMany();
        console.log('data deleted successfuly');
        process.exit()
        
    }catch(error){
        console.log(error)
        process.exit(1)
    }
}
if(process.argv[2]=='-d'){
    Deletedata()
    
}else{
    importData();

}