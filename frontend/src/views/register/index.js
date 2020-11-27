import React, { useEffect, useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {Button, Col, Form, Row} from 'react-bootstrap';
import FormContainer from '../../components/form-container';
import { Link } from 'react-router-dom';
import {  login, register } from '../../actions/auth';
import Loader from '../../components/loader';
import Message from '../../components/message';


const Register = ({ history , location}) => {
    
    const [email , setEmail] = useState('');
    const [name , setName] = useState('');
    const [password, setPassword] = useState('');
    const [message , setMessage] = useState('')
    const dispatch = useDispatch();
    const registerReducer = useSelector(state => state.registerReducer);
    const { userInfo, error, isLoading } = registerReducer;
    const redirect =  location.search.split('=')[1]||'/'
    const nameChangeHandler = (event)=>{
        setName(event.target.value);
    }
    const emailChangeHandler = (event)=>{
        setEmail(event.target.value)
    }
    const passwordChangeHandler = (event)=>{
        setPassword(event.target.value)
    }
    const registerHandler= (event)=>{
        event.preventDefault();
        dispatch(register({ email, name, password }));
        dispatch(login(email, password))
          
    }
    useEffect(() => {
        if (userInfo) {
            history.push(redirect)
        }
    },[userInfo])
    return (
        <FormContainer> 
            {isLoading && <Loader />}
            {error && <Message variant='danger'>{error}</Message>}
          <h2>Register</h2>
          <Form onSubmit={registerHandler}>
            <Form.Group>
                <Form.Label controlId='name'>
                    Name
                </Form.Label>
                <Form.Control
                 onChange={nameChangeHandler} 
                 value={name} 
                 type='text' 
                 placeholder='Enter your Name'>
                        
                </Form.Control>
            </Form.Group>
            <Form.Group>
                <Form.Label controlId='email'>
                    Email
                </Form.Label>
                <Form.Control
                 onChange={emailChangeHandler} 
                 value={email} 
                 type='email' 
                 placeholder='Enter your Email'>
                        
                </Form.Control>
            </Form.Group>
            <Form.Group>
                <Form.Label controlId='password'>
                    Password
                </Form.Label>
                <Form.Control
                 onChange={passwordChangeHandler} 
                 value={password} 
                 type='password' 
                 placeholder='Enter your Password'>
                        
                </Form.Control>
            </Form.Group>
            <Button type='submit' > Register</Button>
            <Row className='my-3'>
                <Col>
                   Already had an Account?  <Link to={redirect? `/login?redirect=${redirect}`:'login'}> Login</Link>
                </Col>

            </Row>
          </Form>
      </FormContainer>
    )
}

export default Register
