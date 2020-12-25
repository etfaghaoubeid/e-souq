import {createStore ,applyMiddleware} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import rootReducer from './rootReducer';
import thunk from 'redux-thunk';
import { getLocalStorageItem } from './utils/localStorage';
const middleware = [thunk ]
const  userInfo = getLocalStorageItem('userInfo')? getLocalStorageItem('userInfo'):''

const itemsInCart = JSON.parse(localStorage.getItem('itemsInCart')) || []
const shippingAddressInfo = JSON.parse( localStorage.getItem('shippingAddress'))? JSON.parse( localStorage.getItem('shippingAddress')): {address:'', city:'',postalCode:'', country:''}
const initSatate ={
    cart: { itemsInCart , shippingAddress:shippingAddressInfo},
    auth:{userInfo}
}
const store = createStore(rootReducer ,initSatate,composeWithDevTools(applyMiddleware(...middleware)))
export default store;