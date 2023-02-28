import React from 'react'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';


const Register = () => {
  return (
    <>
      <Form className="login-form">
        <div className="login-container">

        <h3>Register</h3>
        <br />
        <Row>
          <Col>
          <Form.Label>First Name</Form.Label>
            <Form.Control placeholder="First name" />
          </Col>
          <Col>
          <Form.Label>Last Name</Form.Label>
            <Form.Control placeholder="Last name" />
          </Col>
        </Row>

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
          Register
        </Button>
        </div>
      </Form>
    </>
  )
}

export default Register