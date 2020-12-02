import { ADD_ITEM_TO_CART, DECREASE_QUANTITY, INCREASE_QUANTITY, REMOVE_ITEM_FROM_CART } from "../action-types/cart";

const initState = {
    itemsInCart:[], 
}
function decreaseQty(items , _id){
       const product =  items.find(item=>item._id ==_id);
       if(product.qty>1){
           return items.map(item=>item._id ===product._id?{...item , qty:item.qty-1}:item)
       }
       removeItemFromLocalStorage(_id);
       return items.filter(item=>item._id !==product._id)
 
}
function addItem(items, itemToAdd){
   const existItem = items.find(item=>item._id ===itemToAdd._id);
   if(existItem){
       return items
   }else{
       return [...items , itemToAdd]
   }
}
function removeItemFromLocalStorage (_id){
        let localItems = JSON.parse( localStorage.getItem('itemsInCart'))
        localItems = localItems.filter(item=>item._id !==_id)
        localStorage.setItem('itemsInCart' , JSON.stringify(localItems))

}

export default function cartReducer(state=initState, action){
    switch(action.type){
        case ADD_ITEM_TO_CART:
            console.log('payload add item to cart ', action.payload._id)
            return{
                ...state, 
                itemsInCart:addItem(state.itemsInCart , action.payload),
            }

        case REMOVE_ITEM_FROM_CART:
            removeItemFromLocalStorage(action.payload)
            return{
                ...state, 
                itemsInCart:state.itemsInCart.filter(item=>item._id !==action.payload)
            }  
        case INCREASE_QUANTITY: 
            return{
                ...state, 
                itemsInCart:[...state.itemsInCart.map(item=>item._id ===action.payload?{...item, qty:item.qty+1}:item)]

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