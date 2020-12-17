import React, { useEffect } from 'react'
import {useDispatch , useSelector} from 'react-redux'
import {Link} from 'react-router-dom'
import {Row , Col , GroupItem ,ListGroup, Image , Card,Button} from 'react-bootstrap'
import { increaseQuantity,decreaseQuantity,addToCart, removeItem } from '../../actions/cart';
import Message from '../../components/message'
function Cart({match, history , location}) {
    const id = match.params.id;
    const qty = parseInt( location.search.split('=')[1]) || 1
    const dispatch = useDispatch();
    const itemsInCart = useSelector(state=>state.cart.itemsInCart)

    const increaseQuantityHandler = (id)=>{
        dispatch(increaseQuantity(id))

    }
    const decreaseQuantityHandler = (id)=>{
        history.push('/cart')
        dispatch(decreaseQuantity(id))
    }
    const handleCheckout = ()=>{
        history.push('/login?redirect=shipping')
    }
    const removeItemHandler = (_id)=>{
        history.push('/cart')
        dispatch(removeItem(_id))


    }

    return (
        <>
        <Row>
            <Col>
             <h3 className='text-center'>Shopping Cart</h3>
            {
                itemsInCart.length===0? <Message>Your Cart is Empty <Link to='/'>Go Back</Link></Message>:
                <ListGroup>
                    { itemsInCart.map(item=>(
                        <ListGroup.Item key={item._id} md={8}>
                            <Row>

                            <Col md={2}>
                                <Image src={item.imageURL} alt={item.name} fluid rounded/>
                               
                            </Col>
                            <Col md={2} >
                              <Link to={`/product-details/${item._id}`}>{item.name}</Link>
                               
                            </Col>
                            <Col  >
                               ${item.price}
                               
                            </Col>
                            <Col md={3} >
                               <Button onClick={()=>decreaseQuantityHandler(item._id)}>-</Button>
                               <span> <strong> {item.qty} </strong></span>
                               <Button onClick={()=>increaseQuantityHandler(item._id)}>+</Button>
                            </Col>
                            <Col>
                              <Button onClick={e=>removeItemHandler(item._id)} variant='danger'><i className='fas fa-trash'></i></Button>
                            </Col>
                           
                            </Row>
                        </ListGroup.Item>
                     ))}
                </ListGroup>

               
            }
            </Col>
            <Col md={4}>
                <Card>
                    <ListGroup variant='flush'>
                        <ListGroup.Item >
                           <h3> Subtotal: {itemsInCart.reduce((acc, item)=>item.qty+acc,0)}</h3>
                           ${itemsInCart.reduce((acc , item)=>acc+item.qty*item.price, 0).toFixed(2)}

                        </ListGroup.Item>
                    </ListGroup>
                    <ListGroup.Item>
                        <Button onClick={handleCheckout} type='button' className='btn btn-block' disabled={itemsInCart.length ===0}>
                             Proceed to Checkout
                        </Button>

                    </ListGroup.Item>
                </Card>


            </Col>
        </Row>
        </>
    )
}

export default Cart
