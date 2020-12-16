import React from 'react';
import { Button, Col, Row, ListGroup , Image, Card} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Message from '../../components/message'
const PlaceOrder = ({ }) => {
    const cart = useSelector(state => state.cart);
    return (
        <>
            <ListGroup>
                <ListGroup.Item>
                    <h2>Shipping</h2>
                    <p>{ cart.shipping.address}</p>
                </ListGroup.Item>
            </ListGroup>

        </>
    );
};
export default PlaceOrder;