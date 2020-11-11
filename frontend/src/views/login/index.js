import React , {useState , useEffect} from 'react';
import { Button, Form  , Col , Row} from 'react-bootstrap';
import {useSelector, useDispatch} from 'react-redux';

import { login } from '../../actions/auth';

import {Link} from 'react-router-dom';
import FormContainer from '../../components/form-container';

function Login({location}) {
    const auth = useSelector(state=>state.auth);
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password , setPassword] = useState('');
    const redirect = location.search.split('=')[1]

    const loginHandler = (event)=>{
        event.preventDefault();
        dispatch(login({email, password}))
    }
    const emailChangeHandler = event=>{
        setEmail(event.target.value);
    }
    const passwordChangeHandler = event=>{
        setPassword(event.target.value);
    }
    
    return (
        <FormContainer>
            <h2>Sign In</h2>
            <Form onSubmit={loginHandler}>
                <Form.Group>
                    <Form.Label controlId='email'>
                        Email Address
                    </Form.Label>
                    <Form.Control   placeholder='Enter you Email' type='email' value={email} onChange={emailChangeHandler}>

                    </Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Label controlId='password'>
                        Password
                    </Form.Label>
                    <Form.Control placeholder='Enter you Password' type='password' value={password} onChange={passwordChangeHandler}>

                    </Form.Control>
                </Form.Group>
                <Button type='submit' variant='primary'> Login</Button>


            </Form>
            <Row className='my-3'>
                <Col>
                New Customer ? <Link to={redirect? `/register?redirect=${redirect}`:'/register'}>Reguster</Link>
                </Col>
            </Row>

        </FormContainer>
    ) 
}

export default Login
