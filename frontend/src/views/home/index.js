import React ,{useEffect}from 'react';
import {Row ,Col} from 'react-bootstrap';
import {useDispatch,useSelector} from 'react-redux'
 import { getProducts } from '../../actions/product-list'
import Loader from '../../components/loader';
import Message from '../../components/message';
import Product from '../product'
const Home = () => {
    const dispactch =useDispatch();
    const productList = useSelector(state => state.productList);
    console.log(productList)
    const {fetching ,error,products } = productList
    useEffect(() => {
       dispactch(getProducts()); 
    }, [dispactch])
    return (
    fetching?<Loader/>:error? (<Message variant='danger'>{error}</Message>):
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
