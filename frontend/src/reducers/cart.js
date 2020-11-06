import { ADD_ITEM_TO_CART, DECREASE_QUANTITY, INCREASE_QUANTITY, REMOVE_ITEM_FROM_CART } from "../action-types/cart";

const initState = {
    itemsInCart:[],
}
function decreaseQty(items , id){
       const product =  items.find(item=>item.id ===id);
       if(product.qty>1){
           return items.map(item=>item.id ===product.id?{...item , qty:item.qty-1}:item)
       }
       return items.filter(item=>item.id !==product.id)

}

export default function cartReducer(state=initState, action){
    switch(action.type){
        case ADD_ITEM_TO_CART:
            console.log('111111111111', action.payload)
            return{
                ...state, 
                itemsInCart:[...state.itemsInCart, action.payload]
            }

        case REMOVE_ITEM_FROM_CART:
            return{
                ...state, 
                itemsInCart:[...state.itemsInCart.filter(item=>item.id !==action.payload?{...item, qty:item.qty+1}:{...item , qty:1})]
            }  
        case INCREASE_QUANTITY: 
            return{
                ...state, 
                itemsInCart:[...state.itemsInCart.map(item=>item.id !==action.payload?{...item, qty:item.qty+1}:item)]

            }

        case DECREASE_QUANTITY:
            return{
                ...state,
                itemsInCart:decreaseQty(state.itemsInCart , action.payload)

            }

        default:
            return state;
    }
}