import React ,{useState,useEffect}from 'react';
import {Row ,Col} from 'react-bootstrap';
import {connect} from 'react-redux'
 import { getProducts } from '../../actions/product'
import Product from '../product'
const Home = ({products,getProducts,fetching}) => {
    useEffect(() => {
        const fetchProducts = async ()=>{
            await getProducts() ;  
        }
        fetchProducts();
    }, [])
    return (
        fetching?<h2 className='text-center'>Loading...</h2>:(
        <>
        <h3 className='text-center'>Latest Product</h3>
        <Row>  
            {products.map(product=>(
                <Col sm={12} md={6} lg={4} xl={3} key={product._id}>< Product  product={product}/></Col>
            ))}
        </Row>
            
        </>
        ) 
    )
}
const mapStateToProps = ({product})=>({
    products:product.products,
    fetching:product.fetching
})
const mapDispatchToProps = dispatch=>({
    getProducts:()=>dispatch(getProducts()),

    
})
export default connect(mapStateToProps,mapDispatchToProps)(Home);
