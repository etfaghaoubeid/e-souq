import React, {useState, useEffect} from 'react'
import {useDispatch , useSelector} from 'react-redux';
import Message from '../../components/message';
import Loader from '../../components/loader';
import { Button, Col, Form,  Row } from 'react-bootstrap';
import { updateProfile,getProfile } from '../../actions/auth';

const Profile =({history})=> {
    const [name, setName ] = useState('');
    const [email, setEmail]= useState('');
    const [password, setPassword] = useState('');
    const [confimePassword , setConfimePassword] = useState('');
    const [message, setMessage] = useState(null);
    const loginReducer = useSelector(state => state.loginReducer);
    const profileDetailsReducer = useSelector(state => state.profileDetailsReducer);
    const profileReducer = useSelector(state => state.profileReducer);
    const { success } = profileReducer;
    const dispatch = useDispatch();
    const { userInfo, error,  } = loginReducer;
    const {user,isLoading} =  profileDetailsReducer
    const handleNameChange = (event)=>{
        setName(event.target.value);
    }
    const handleEmailChange  =(event)=>{
        setEmail(event.target.value);
    };
    const handlePasswordChange = (event)=>{
        setPassword(event.target.value);
    }
    const handleConfirmPasswordChange  = (event)=>{
        setConfimePassword(event.target.value);
    };
    
    const handleSubmit =(event)=>{
        event.preventDefault();
        if( password && password ===confimePassword){
            dispatch(updateProfile({ name, email, password , token: userInfo.token}));
            history.push('/profile')
        }else{
            setMessage('Password does not match')
        }
    }
    useEffect(()=>{
        if (!userInfo) {
            history.push('/login')
        } else {
            if (!user.name) {
                dispatch(getProfile('profile'))
                
            } else {
                setName(user.name);
                setEmail(user.email)
            }
        }

    }, [user , userInfo,message, success])

    return (
        <Row>
            <Col md={4}> 
                <h3>Profile</h3>
                {message && <Message>{message}</Message>}
                {success&&<Message variant='success'>profile updated succesafuly</Message>}
                
                {isLoading ? <Loader /> : (
                    <Form onSubmit={handleSubmit}>
                    <Form.Group>
                        <Form.Label controlId='name'>
                            Name
                        </Form.Label>
                        <Form.Control 
                        type='text' value={name}
                         onChange={handleNameChange} 
                         placeholder='Enter your name'>
                            
                        </Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label controlId='email'>
                            Email
                        </Form.Label>
                        <Form.Control type='email'
                         value={email}
                          onChange={handleEmailChange}
                           placeholder='Enter the new Email'>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label
                         controlId='password'> 
                            Password
                        </Form.Label>
                        <Form.Control type='password'
                         value={password} 
                         onChange={handlePasswordChange} 
                         placeholder='Enter the new password'>
                        </Form.Control>

                    </Form.Group>
                    <Form.Group>
                        <Form.Label controlId='confirmPassword'>
                            Confirm Password
                        </Form.Label>
                        <Form.Control type='password' value={confimePassword} onChange={handleConfirmPasswordChange} placeholder='Please retype your password'>

                        </Form.Control>
                    </Form.Group>
                    <Button type='submit' > Update</Button>

                </Form>
                    
                )}
                

            </Col>
            <Col md={8}>
                <h3>Orders</h3>
            </Col>
        </Row>
    )
}

export default Profile
