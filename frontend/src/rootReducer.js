import {combineReducers} from 'redux';
import productReducer from './reducers/product';

const rootReducer = combineReducers({
    product:productReducer
})

export default rootReducer;