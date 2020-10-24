import React from 'react';
import { Container } from 'react-bootstrap';
import {Route}  from 'react-router-dom'
import Footer from './components/footer';
import Header from './components/header';
import Home from './views/home'
import SignIn from './components/signin'
import ProductDetails from './views/product-details';


function App() {
  return (
    <div className="App">
      <header>
        <Header/>
      </header>
      <main className='py-3' >
        <Container>
          <Route exact path= '/' component={Home}/>
          <Route path= '/sign-in' component={SignIn}/>
          <Route path= '/product-details/:id' component={ProductDetails}/>
        </Container>
      </main>
      
        <Footer/>
    </div>
  );
}

export default App;
