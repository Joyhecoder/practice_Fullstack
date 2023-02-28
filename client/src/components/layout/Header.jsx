import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Header = () => {
  return (
    <>
        <Navbar bg="light" expand="lg" sticky="top">
            <Container className='navBar'>
                <Navbar.Brand>Healthcare Resource</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="/">Home/Search</Nav.Link>
                    <Nav.Link href="/saved">Saved</Nav.Link>
                    <NavDropdown title="User Info" id="basic-nav-dropdown">
                        <NavDropdown.Item href="/register">Register an account</NavDropdown.Item>
                        <NavDropdown.Item href="/login">
                            Login
                        </NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="/signout">
                            Sign out
                        </NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
 
    </>
  )
}

export default Header