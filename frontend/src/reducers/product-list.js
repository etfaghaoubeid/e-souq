import {
    START_FETCHING,
    FAIL_TO_FETCH_PRODUCTS, 
    FETCHING_PRODUCTS_SUCCESS} from '../action-types/product'
const  initState = {
    products:[],
    fetching:false,
    error:''

}
export default function productListReducer(state=initState, action){
    switch(action.type){
        case START_FETCHING:
            return{
                ...state,
                fetching:action.payload
            }  
        case FETCHING_PRODUCTS_SUCCESS:
            return{
                ...state,
                products:action.payload.products,
                fetching:action.payload.fetching

            }    
        case FAIL_TO_FETCH_PRODUCTS:
            return{
                ...state,
                fetching:action.payload.fetching,
                error: action.payload.error
            }    
        
        default: 
           return state
    }
}
