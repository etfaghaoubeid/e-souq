import React from 'react'
import {useDispatch , useSelector} from 'react-redux'
import { increaseQuantity,decreaseQuantity } from '../../actions/cart';

function Cart() {
    const dispatch = useDispatch();
    const cart = useSelector(state=>state.cart)
    const increaseQuantityHandler = (id)=>{
        dispatch(increaseQuantity(id))

    }
    const decreaseQuantityHandler = (id)=>{
        dispatch(decreaseQuantity(id))
    }

    return (
        <div>
            {cart? cart.itemsInCart.map(item=>(
                <>
                 <button onClick={()=>increaseQuantityHandler(item.id)}>+</button>
                 <h3>{item.name}</h3>
                 <button onClick={()=>decreaseQuantityHandler(item.id)}>-</button>

                </>

            )):<h3>Cart is empty</h3>} 
        </div>
    )
}

export default Cart
