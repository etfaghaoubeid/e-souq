import React , {useState , useEffect} from 'react';
import { Button, Form  , Col , Row} from 'react-bootstrap';
import {useSelector, useDispatch} from 'react-redux';

import { login } from '../../actions/auth';

import {Link} from 'react-router-dom';
import FormContainer from '../../components/form-container';
import Message from '../../components/message';
import Loader from '../../components/loader'
import FormGroupComponent from '../../components/form-group'

function Login({location, history}) {
    const loginReducer = useSelector(state=>state.loginReducer);
    const {error , isLoading , userInfo} = loginReducer
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password , setPassword] = useState('');
    const redirect = location.search? location.search.split('=')[1] :'/'

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
    useEffect(()=>{
        if(userInfo){
           history.push(redirect)
        }

    },[userInfo , redirect,history])
    return (
        <FormContainer>
            {error&& <Message variant='danger'>{error}</Message>}
            {isLoading&& <Loader/>}
            <h2>Sign In</h2>
            <Form onSubmit={loginHandler}>
                <FormGroupComponent label='Email'
                  id='email' type='email'
                  value={email} 
                  handleChange={emailChangeHandler}
                    placeholder='Enter your Email'
                />
                <FormGroupComponent
                    label='Password'
                    id='password'
                    type='password'
                    value={password} 
                    handleChange={passwordChangeHandler}
                    placeholder='Enter your password'
                />
                <Button type='submit' variant='primary'> Login</Button>
            </Form>
            <Row className='my-3'>
                <Col>
                New Customer ?
                 <Link to={redirect? `/register?redirect=${redirect}`: 
                 '/register'}>Reguster</Link>
                </Col>
            </Row>

        </FormContainer>
    ) 
}

export default Login
