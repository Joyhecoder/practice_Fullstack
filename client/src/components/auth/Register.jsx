import React, { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useNavigate } from 'react-router-dom'


const Register = () => {
  const navigate = useNavigate()
  const [fName, setFName] = useState('')
  const [lName, setLName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [userExisted, setUserExisted] = useState(false)
  // console.log(fName, lName, password, email);

  const handleSubmit = async (e) => { 
    e.preventDefault()
    try {
      const body = { fName, lName, email, password }
      const response = await fetch('http://localhost:5000/register', {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(body)
      })
      console.log(response)
      if(response.status === 200){
        navigate('/login')
   
      }else{
        setUserExisted(true)
      }
    } catch (error) {
      
      console.log(error)
    }
   }

   //when user email is registered, any changes in the input field will clear the userexisted message
   useEffect(() => {
     setUserExisted(false)
   
   }, [fName, lName, email, password])
   
  return (
    <>
      <Form className="login-form">
        <div className="login-container">

        <h3>Register</h3>
        <br />
        <Row>
          <Col>
          <Form.Label>First Name</Form.Label>
            <Form.Control placeholder="First name" onChange={e=> setFName(e.target.value)} />
          </Col>
          <Col>
          <Form.Label>Last Name</Form.Label>
            <Form.Control placeholder="Last name" onChange={e=> setLName(e.target.value)} />
          </Col>
        </Row>

        <br />

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" onChange={e => setEmail(e.target.value)} />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" onChange={ e => setPassword(e.target.value)} />
        </Form.Group>
      
        <Button variant="success" type="submit" onClick={e=>handleSubmit(e)}>
          Register
        </Button>

        {userExisted ? 
        <p style={{color : 'red', marginTop: '5px', fontSize: '1.5rem'}}>Email has been registered!</p>
      :
      <></>}
        </div>
      </Form>
    </>
  )
}

export default Register