import React, { useEffect } from 'react'
import { ListGroup, Row ,Col ,Image, Card, Button} from 'react-bootstrap';
import { useSelector, useDispatch} from 'react-redux'

import {Link} from 'react-router-dom';
import Rating from '../../components/rating';
import {getProduct} from '../../actions/product'

const ProductDetails = ({match,}) => {
    const id =match.params.id;
    const dispatch = useDispatch();
    const product = useSelector(state=>state.product.product);
    const fetching = useSelector(state=>state.product.fetching);
    useEffect(()=>{
       dispatch(getProduct(id))
       
    },[])
    return (
        fetching?<h3>Loading ... </h3>:
        (<>
        <Link to ='/' className='btn btn-light my-3'> Go Back</Link>
            <Row>
                <Col md={6}>
                    <Image src={product.imageURL} alt={product.name} fluid/>
                </Col>
                <Col md={3}>
                    <ListGroup variant='flush'>
                        <ListGroup.Item>
                            <h3>{product.name}</h3>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Rating value={product.rating} text={`${product.numViewers} Viewres`}/>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Price: ${product.price}
                        </ListGroup.Item>
                        <ListGroup.Item>
                           Description: {product.description}
                        </ListGroup.Item>
                    </ListGroup>
                    <ListGroup variant='flush'>
                    </ListGroup>
                </Col>
                <Col md={3}>
                    <Card>
                        <ListGroup>
                            <ListGroup.Item>
                                
                                <Row>
                                    <Col>
                                    Price: 
                                    </Col>
                                    <Col>
                                    ${product.price}
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Row>
                                    <Col>
                                    Status: 
                                    </Col>
                                    <Col>
                                    {product.countInStock>0?'In Stock': 'Out Of Stock'}
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                    <Button className='btn btn-block' disabled={product.countInStock==0}>Add To Cart</Button>
                            </ListGroup.Item>
                        </ListGroup>
                    </Card>
                </Col>
            </Row>
        </>)
    )
}


export default ProductDetails;
