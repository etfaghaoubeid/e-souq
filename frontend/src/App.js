import React from 'react';
import { Container } from 'react-bootstrap';
import {Route}  from 'react-router-dom'
import Footer from './components/footer';
import Header from './components/header';
import Home from './views/home'
import ProductDetails from './views/product-details';
import Cart from './views/cart';
import Login from './views/login';
import Register from './views/register';
import Profile from './views/profile'
import Shipping from './views/shipping';
import Payment from './views/payment';



function App() {
  return (
    <div className="App">
      <header>
        <Header/>
      </header>
      <main className='py-3' >
        <Container>
          <Route exact path='/' component={Home} />
          <Route path='/shipping' component={Shipping} />
          <Route path='/payment' component={Payment}/>
          <Route path= '/login' component={Login}/>
          <Route path='/register' component={Register}/>
          <Route path='/profile' component={Profile}/>
          <Route path= '/product-details/:id' component={ProductDetails}/>
          <Route path='/cart/:id?' component={Cart}/>
        </Container>
      </main>
      
        <Footer/>
    </div>
  );
}

export default App;
