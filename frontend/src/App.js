import React from 'react';
import { Container } from 'react-bootstrap';
import {Route}  from 'react-router-dom'
import Footer from './components/footer';
import Header from './components/header';
import Home from './views/home'
import SignIn from './components/signin'
import ProductDetails from './views/product-details';
import Cart from './views/cart';
import Login from './views/login';


function App() {
  return (
    <div className="App">
      <header>
        <Header/>
      </header>
      <main className='py-3' >
        <Container>
          <Route exact path= '/' component={Home}/>
          <Route path= '/sign-in' component={Login}/>
          <Route path= '/product-details/:id' component={ProductDetails}/>
          <Route path='/cart/:id?' component={Cart}/>
        </Container>
      </main>
      
        <Footer/>
    </div>
  );
}

export default App;
