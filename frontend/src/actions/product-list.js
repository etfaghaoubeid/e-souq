import{
    START_FETCHING,
    FAIL_TO_FETCH_PRODUCTS,
    FETCHING_PRODUCTS_SUCCESS,
} from '../action-types/product';
export const getProducts =  ()=>{
    return async  dispatch=>{
            dispatch({type:START_FETCHING,payload:true});
            const res = await fetch('/products');
            const data = await res.json();
            if(data.length){
                dispatch({type:FETCHING_PRODUCTS_SUCCESS,payload:{fetching:false, products:data}});
            }else{
                dispatch({
                    type:FAIL_TO_FETCH_PRODUCTS,payload:{error:'faid to fetch Products', fetching:false}
                });

            }
       
    }
};
