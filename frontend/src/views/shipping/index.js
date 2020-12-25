import React, {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col, Container, Form , Button} from 'react-bootstrap'
import FromContainer from '../../components/form-container'
import { saveSippingAddress } from '../../actions/cart';
import CheckOutSteps from '../../components/checkout-steps';
function Shipping({history}) {
    const dispatch = useDispatch();
    const cart = useSelector(state => state.cart);
    const {shippingAddress} = cart
    const [address, setAddress] = useState( shippingAddress.address);
    const [city, setCity] = useState( shippingAddress.city);
    const [postalCode, setPostalCode] = useState(shippingAddress.postalCode);
    const [country, setCountry] = useState(shippingAddress.country);

    const handleSubmit = (event) => {
        event.preventDefault();
        history.push('/payment');
        dispatch(saveSippingAddress({ address, city, postalCode, country }));
        console.log(history.push, 'histryyyy shipping ');
        
    }
    return (
        <FromContainer>
            <CheckOutSteps step1 step2/>
            <h1>Shipping</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlid='City'>
                    <Form.Label>City</Form.Label>
                    <Form.Control
                        type='text'
                        placeholder='City'
                        value={city}
                        onChange={e=>setCity(e.target.value)}
                    >
                    </Form.Control>
                </Form.Group>
                <Form.Group controlid='address'>
                    <Form.Label>Address</Form.Label>
                    <Form.Control
                        type='text'
                        placeholder='address'
                        required
                        value={address}
                        onChange={e=>setAddress(e.target.value)}
                    >
                    </Form.Control>
                </Form.Group>
                <Form.Group controlid='postalCode'>
                    <Form.Label>PostalCode</Form.Label>
                    <Form.Control
                        type='number'
                        placeholder='postalCode'
                        value={postalCode}
                        onChange={e=>setPostalCode(e.target.value)}
                    >
                    </Form.Control>
                </Form.Group>
                <Form.Group controlid='country'>
                    <Form.Label>Country</Form.Label>
                    <Form.Control
                        type='text'
                        placeholder='country'
                        value={country}
                        onChange={e=>setCountry(e.target.value)}
                    >
                    </Form.Control>
                </Form.Group>
                <Button type='submit'> Next</Button>
            </Form>
        </FromContainer>
            
      )
}

export default Shipping
