import React from 'react'
import { Card, Form } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import {LinkContainer} from 'react-router-bootstrap'
import Rating from '../../components/rating'

const Product = ({product}) => {
    return (
        <Card className='my-3 p-3 rounded'>
            <LinkContainer to={`/product-details/${product._id}`}>
                <Card.Img src={product.imageURL} variant='top' />
            </LinkContainer>
            <Card.Body>
                <LinkContainer to={`/product/${product._id}`} >
                    <Card.Title as='div'>
                        <strong>
                            {product.name}
                        </strong>

                    </Card.Title>
                </LinkContainer>
                <Card.Text as='div'>
                    <div className='my-3'>
                        <Rating  value={product.rating} text = {`${product.numViewers} viewers`}/>
                    </div>

                </Card.Text>
                <Card.Text as='h3'>
                    ${product.price}

                </Card.Text>
            </Card.Body>

           
        </Card>
    )
}

export default Product
