import { ADD_ITEM_TO_CART, INCREASE_QUANTITY,DECREASE_QUANTITY, REMOVE_ITEM_FROM_CART } from "../action-types/cart"

export const addToCart =(item)=>{
    return{
        type:ADD_ITEM_TO_CART, 
        payload:{...item , qty:1}
    }
}
export const removeItem = (id)=>{
    return{
        type:REMOVE_ITEM_FROM_CART, 
        payload:id
    }
}
export const increaseQuantity = (id)=>{
    return{
        type:INCREASE_QUANTITY, 
        payload:id
    }
};
export const decreaseQuantity=(id)=>{
    return {
        type:DECREASE_QUANTITY, 
        payload:id
    }
}