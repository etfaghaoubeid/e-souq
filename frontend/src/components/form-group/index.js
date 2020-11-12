import React from 'react'
import { Form } from 'react-bootstrap'

function FormGroupComponent({type, label, id , placeholder,handleChange , value }) {
    return (
        <Form.Group>
            <Form.Label controlId={id}>
                {label}
            </Form.Label>
            <Form.Control type={type}  value = { value}placeholder={placeholder} onChange= {handleChange} >

            </Form.Control>
            
        </Form.Group>
    )
}

export default FormGroupComponent
