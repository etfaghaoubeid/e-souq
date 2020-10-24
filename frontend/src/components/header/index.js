import React from 'react';
import {Link} from 'react-router-dom';
import { Container,Navbar, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const Header = () => {
    return (
    <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
        <Container>
            <LinkContainer to="/">
        <Navbar.Brand >Mern-Shop</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
            <LinkContainer to='/sign-in' >
            <Nav.Link ><i className='fas fa-user'></i>Sign In</Nav.Link>
            </LinkContainer>
            <LinkContainer  to="/cart">
            <Nav.Link > <i className='fas fa-shopping-cart'></i>Cart</Nav.Link>
            </LinkContainer>
        </Nav>

        </Navbar.Collapse>
        </Container>
     </Navbar>
    )
}

export default Header
