import {createStore ,applyMiddleware} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import rootReducer from './rootReducer';
import thunk from 'redux-thunk';
import { getLocalStorageItem } from './utils/localStorage';
const middleware = [thunk ]
const  userInfo = getLocalStorageItem('userInfo')? getLocalStorageItem('userInfo'):''

const itemsInCart = JSON.parse( localStorage.getItem('itemsInCart')) || []
const initSatate ={
    cart:{itemsInCart},
    auth:{userInfo}
}
const store = createStore(rootReducer ,initSatate,composeWithDevTools(applyMiddleware(...middleware)))
export default store;