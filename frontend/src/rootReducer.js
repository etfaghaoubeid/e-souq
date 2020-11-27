import {combineReducers} from 'redux';
import productListReducer from './reducers/product-list';
import productDetailsReducer from './reducers/product-details';
import cartReducer from './reducers/cart';
import {loginReducer, registerReducer, profileReducer} from './reducers/auth'



const rootReducer = combineReducers({
    productList :productListReducer,
    productDetails:productDetailsReducer,
    cart:cartReducer,
    loginReducer,
    registerReducer,
    profileReducer,

})

export default rootReducer;