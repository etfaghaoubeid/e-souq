import React, { useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {Button, Col, Form, Row} from 'react-bootstrap';
import FormContainer from '../../components/form-container';
import { Link } from 'react-router-dom';
import { register } from '../../actions/auth';


const  Register= ()=> {
    const [email , setEmail] = useState('');
    const [name , setName] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const auth = useSelector(state=>state.aut)
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
       dispatch( register({email ,name , password}))
        
    }
    return (
      <FormContainer> 
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
                   Already had an Account?  <Link to='/login'> Login</Link>
                </Col>

            </Row>
          </Form>
      </FormContainer>
    )
}

export default Register
