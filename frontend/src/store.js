import {createStore ,applyMiddleware} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import rootReducer from './rootReducer';
import thunk from 'redux-thunk';
import { getLocalStorageItem } from './utils/localStorage';
const middleware = [thunk ]
const  userInfo = getLocalStorageItem('userInfo')? getLocalStorageItem('userInfo'):''

const itemsInCart = JSON.parse(localStorage.getItem('itemsInCart')) || []
const shippingInfo = JSON.parse( localStorage.getItem('shipping')) || {}
const initSatate ={
    cart:{itemsInCart, shipping:shippingInfo},
    auth:{userInfo}
}
const store = createStore(rootReducer ,initSatate,composeWithDevTools(applyMiddleware(...middleware)))
export default store;