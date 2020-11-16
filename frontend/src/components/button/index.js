import React from 'react';
import { Button } from 'react-bootstrap';

const Button = ({variant , textValue , type})=> {
    return (
        <Button variant={variant} type={type}>
            { textValue}
        </Button>
    )
} 

export default Button
