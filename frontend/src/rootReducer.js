import {combineReducers} from 'redux';
import productListReducer from './reducers/product-list';
import productDetailsReducer from './reducers/product-details';

const rootReducer = combineReducers({
    productList :productListReducer,
    productDetails:productDetailsReducer
})

export default rootReducer;