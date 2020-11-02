import { FETCHING_PRODUCT_SUCCESS, START_FETCHING ,FAIL_TO_FETCH_PRODUCT } from "../action-types/product";

const initState = {
    fetching:false, 
    product:{},
    error:''
}

export default function productDetailsReducer(state=initState, action){
    switch(action.type){
        case START_FETCHING:{
            return {
                ...state, 
                fetching:true
            }
        }
        case FETCHING_PRODUCT_SUCCESS:{
            return{
                ...state, 
                product:action.payload.product,
                fetching:action.payload.fetching
            }
        }
        case FAIL_TO_FETCH_PRODUCT:
            return{
                ...state , 
                product:{}, 
                fetching:action.payload
            }
        default:
            return state;
    }

}