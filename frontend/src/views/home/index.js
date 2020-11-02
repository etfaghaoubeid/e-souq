import React ,{useState,useEffect}from 'react';
import {Row ,Col} from 'react-bootstrap';
import {useDispatch,useSelector} from 'react-redux'
 import { getProducts } from '../../actions/product'
import Product from '../product'
const Home = () => {
    const dispactch =useDispatch();
    const product = useSelector(state => state.product);
    const {fetching ,errors,products } = product
    useEffect(() => {
       dispactch(getProducts())
    }, [])
    return (
        fetching?(<h2 className='text-center'>Loading...</h2>):errors? (<h3> Error</h3>):
        (<>
        <h3 className='text-center'>Latest Product</h3>
        <Row>  
            {products.map(product=>(
                <Col sm={12} md={6} lg={4} xl={3} key={product._id}>< Product  product={product}/></Col>
            ))}
        </Row>
            
        </>) 
    )
}

export default Home;
