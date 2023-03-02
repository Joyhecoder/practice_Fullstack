import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';

import Form from 'react-bootstrap/Form';


const Login = () => {

  return (
    <>
    <Form className="login-form">
      <div className="login-container">

      <h3>Login</h3>
      <br />
      
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
    
      <Button variant="success" type="submit">
       Let's go
      </Button>
      </div>
    </Form>
    </>
  )
}

export default Login