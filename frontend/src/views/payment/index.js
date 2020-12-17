import React, { useState } from 'react';
import { Col, Button, Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import CheckOutSteps from '../../components/checkout-steps';
import FormContainer from '../../components/form-container';
import {savePaymentMethod} from '../../actions/cart'
const Payment = ({ history}) => {
    const dispatch = useDispatch();
    const cart = useSelector(state => state.cart);
    const { shipping } = cart;
    if (!shipping) {
        history.push('/shipping')
    }
    const [paymentMethod, setPaymentMethod] = useState('PayPal');
    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(savePaymentMethod(paymentMethod ))
        history.push('/placeorder');
    }
    return (
        <FormContainer>
            <CheckOutSteps step1 step2 step3 />
            <h1>Payment</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Label as='legend'>
                       Select Method 
                    </Form.Label>
                </Form.Group>
                <Col>
                    <Form.Check type='radio'
                        label='PayPal or Credit Cart'
                        id='paymentMethod'
                        value='Paypal'
                        checked
                         onChange={e=>setPaymentMethod(e.target.value)}>

                    </Form.Check>
                </Col>
                <Button type='submit'  className='mt-3'>Next</Button>

            </Form>
        

        </FormContainer>
    )
}
export default Payment;    