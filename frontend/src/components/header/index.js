import React from 'react';
import { Container,Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import {useDispatch, useSelector} from 'react-redux';
import { logout } from '../../actions/auth';

const Header = ({history}) => {
    const loginReducer = useSelector(state=>state.loginReducer);
    const dispatch = useDispatch();
    const {userInfo} = loginReducer;
    // let userInfo=null
    const handleLogout = ()=>{
        dispatch(logout())
    }
    return (
    <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
        <Container>
            <LinkContainer to="/">
        <Navbar.Brand >Mern-Shop</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
        <LinkContainer  to="/cart">
            <Nav.Link > <i className='fas fa-shopping-cart'></i>Cart</Nav.Link>
            </LinkContainer>
            {userInfo?
            (<NavDropdown title={userInfo.name} id='username'>
                <LinkContainer to='/profile'>
                    <NavDropdown.Item>
                    Profile
                    </NavDropdown.Item>
                </LinkContainer>
                
                    <NavDropdown.Item onClick={handleLogout}>
                    Logout
                    </NavDropdown.Item>
               


            </NavDropdown>):( 
                <>
                <LinkContainer to='/login' >
                <Nav.Link ><i className='fas fa-user'></i>Login</Nav.Link>
                </LinkContainer>
                <LinkContainer to='/register' >
                <Nav.Link ><i className='fas fa-user-plus'></i>Register</Nav.Link>
                </LinkContainer>
                </>
            )

            }
            
           
        </Nav>

        </Navbar.Collapse>
        </Container>
     </Navbar>
    )
}

export default Header
