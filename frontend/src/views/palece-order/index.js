import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Col, Row, ListGroup , Image, Card} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Message from '../../components/message'
import CheckOutSteps from '../../components/checkout-steps'
const PlaceOrder = ({ }) => {
    const cart = useSelector(state => state.cart);
    console.log(cart )
    const { shippingAddress: { country, city, address }, paymentMethod ,itemsInCart} = cart
    return (
        <>
            <CheckOutSteps step1 step2 step3 step4/>
            <Row>
                <Col>
                    <ListGroup>
                        <ListGroup.Item>
                            <h3>Shipping</h3>
                            <p>
                                <strong>Address: </strong>
                                {address} {' '}
                                {city} {' '}
                                {country}
                            </p>
                        </ListGroup.Item>

                        <ListGroup.Item>
                            <h3>Payment Method</h3>
                            <p>
                                <strong>Payment Method:</strong>
                                { paymentMethod}
                            </p>

                        </ListGroup.Item>
                        <ListGroup.Item>
                            {itemsInCart.length === 0 ? <Message>Your cart is empty</Message> : (
                                <ListGroup variant='flush'>
                                    {itemsInCart.map((item, idx) => (
                                        <ListGroup.Item key={idx}>
                                            <Row>
                                                <Col md={1}>
                                                    <Image src={item.image} alt={item.name} />
                                                </Col>
                                                <Col>
                                                    <Link to={`/product/${item.product}`}>
                                                        {item.name}
                                                    </Link>
                                                
                                                </Col>
                                                <Col md={4}>
                                                    {item.qty} * ${item.price}
                                                </Col>
                                            </Row>
                                        </ListGroup.Item>
                                    ))}
                                </ListGroup>
                            )
                            }
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
                <Col md={4}>
                    <Card>
                        <ListGroup variant='flush'>
                            <ListGroup.Item>
                                <h3>Order Summary</h3>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Row>
                                    <Col>
                                        Items
                                    </Col>
                                    <Col>${cart.cartItemsPrice }</Col>
                                </Row>
                            </ListGroup.Item>

                        </ListGroup>
                    </Card>
                </Col>
            </Row>
            
        </>
    );
};
export default PlaceOrder;