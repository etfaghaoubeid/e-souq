import { ADD_ITEM_TO_CART, INCREASE_QUANTITY,DECREASE_QUANTITY, REMOVE_ITEM_FROM_CART } from "../action-types/cart"

export const addToCart =(id,qty)=>async (dispach, getState)=>{
    const  res = await fetch(`http://127.0.0.1:3333/products/${id}`);
    const data =await  res.json();
    dispach({
         type:ADD_ITEM_TO_CART, 
        payload:{...data , qty:parseInt(qty)}

    })
    localStorage.setItem('itemsInCart' , JSON.stringify( getState().cart.itemsInCart))
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