import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom'


const Login = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loginErr, setLoginErr] = useState(false)

  // console.log(email, password);

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const body = { email, password }
      const response = await fetch('http://localhost:5000/login', {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(body)
      })
      if(response.status === 200){
        navigate('/saved')
      }else{
        setLoginErr(true)
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
    <Form className="login-form">
      <div className="login-container">

      <h3>Login</h3>
      <br />
      
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" onChange={e=>setEmail(e.target.value)} />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" onChange={e=>setPassword(e.target.value)} />
      </Form.Group>
    
      <Button variant="success" type="submit" onClick={e=>handleSubmit(e)}>
       Let's go
      </Button>

      {loginErr ? 
        <p style={{color : 'red', marginTop: '5px', fontSize: '1.5rem'}}>Email has been registered!</p>
      :
      <></>}
      </div>
    </Form>
    </>
  )
}

export default Login