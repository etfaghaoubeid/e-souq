const {Router} = require('express');
const User = require('../models/user')
const {getProducts, getProduct,createProduct,deleteProduct, updateProduct}  = require('../controllers/product')

const router = Router()
router.get('/', getProducts);
router.get('/:id', getProduct);
router.post('/create-product',createProduct)
router.delete('/:id', deleteProduct);
router.patch('/:id',updateProduct);
module.exports = router