import{  GET_PRODUCTS,GET_PRODUCT, 
    START_FETCHING,
    FAIL_TO_FETCH_PRODUCTS,
    FETCHING_PRODUCTS_SUCCESS,
} from '../action-types/product';
export const getProducts =  ()=>{
    return async  dispatch=>{
        try{
            dispatch({type:START_FETCHING,payload:true});
            const res = await fetch('/products');
            const data = await res.json();
            dispatch({type:GET_PRODUCTS , payload:data});
            dispatch({type:FETCHING_PRODUCTS_SUCCESS,payload:false})
        }catch(error){
            dispatch({
                type:FAIL_TO_FETCH_PRODUCTS,payload:{error:'faid to fetch Products', fetching:false}
            });
        }
    }
};
export const startFetching = ()=>{
    return{
        type:START_FETCHING,
        payload:true
    }
}
export const getProduct =(id)=>{
    return async dispatch=>{
        try {
            dispatch({type:GET_PRODUCT, payload:{fetching:true}});
            const  res = await fetch(`/products/${id}`);
            const data =await  res.json();
           dispatch({type:GET_PRODUCT,payload:data});
           dispatch({type:FETCHING_PRODUCTS_SUCCESS,payload:false})
        }catch(error){
            dispatch({
                type:FAIL_TO_FETCH_PRODUCTS,payload:{error:'faid to fetch Products', fetching:false}
            })
        };
    }
}