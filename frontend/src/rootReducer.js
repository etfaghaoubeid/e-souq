import {combineReducers} from 'redux';
import productListReducer from './reducers/product-list';
import productDetailsReducer from './reducers/product-details';
import cartReducer from './reducers/cart';

const rootReducer = combineReducers({
    productList :productListReducer,
    productDetails:productDetailsReducer,
    cart:cartReducer
})

export default rootReducer;