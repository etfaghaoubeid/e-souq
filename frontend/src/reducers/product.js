import {GET_PRODUCTS, START_FETCHING,GET_PRODUCT,FAIL_TO_FETCH_PRODUCTS, FINISH_FETCHING,FETCHING_PRODUCTS_SUCCESS} from '../action-types/product'
const  initState = {
    products:[],
    fetching:false,
    product:{},
    errors:[]

}
const productReducer = (state=initState, action)=>{
    switch(action.type){
        case GET_PRODUCTS:
            return{
                ...state, 
                products:[...state.products, ...action.payload],
            }
        case FETCHING_PRODUCTS_SUCCESS:
            return{
                ...state,
                fetching:action.payload

            }    

        case START_FETCHING:
            return{
                ...state,
                fetching:action.payload
            }  
        case FAIL_TO_FETCH_PRODUCTS:
            return{
                ...state,
                fetching:action.payload.fetching,
                errors:[...state.errors , action.payload.error]
            }    
        case GET_PRODUCT:
            return{
                ...state, 
                product:action.payload,
                fetching:false
            }    
        default: 
           return state
    }
}

export default productReducer;