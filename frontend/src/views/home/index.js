import React ,{useState,useEffect}from 'react';
import {Row ,Col} from 'react-bootstrap';
import Product from '../product'
const Home = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [products, setProducts] = useState([])
    const fetchProducts = async ()=>{
        setIsLoading(true)
        console.log(isLoading , 'after sart')
        const response = await fetch('/products');
        const data = await response.json();
        setProducts(data);
        setIsLoading(false)
        console.log(isLoading , 'after end')

    }
    useEffect(() => {
       fetchProducts()
        
    }, [])
    ///console.log(products,"state", isLoading)
    return (
        isLoading?<h2 className='text-center'>Loading...</h2>:(
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
export default Home
