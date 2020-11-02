import {START_FETCHING,FETCHING_PRODUCT_SUCCESS,FAIL_TO_FETCH_PRODUCT} from '../action-types/product'
export const getProduct =(id)=>{
    return async dispatch=>{
        try {
            dispatch({type:START_FETCHING,payload:true});
            const  res = await fetch(`/products/${id}`);
            const data =await  res.json();
           dispatch({type:FETCHING_PRODUCT_SUCCESS,payload:{fetching:false,product:data}})

        }catch(error){
            dispatch({
                type:FAIL_TO_FETCH_PRODUCT,payload:{error:'faid to fetch Products', fetching:false}
            })
        };
    }
}