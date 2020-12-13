import React from 'react'
import { Button } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import  HeaderWelcome  from './HeaderWelcome';
import '../App.css'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
export default class Login extends React.Component {
  render(){
   
    return (
      <>
    <HeaderWelcome/>



      <Container
      style={{
        display:'flex',
        flexDirection:'column', 
        alignContent:'center',
        justifyContent:'center'
    }}>
        
      <Form
      style={{
          display:'flex',
          flexDirection:'column'
      }}
      
      className='box'>
      <div style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
      <img className='img-login' src="https://image.freepik.com/free-vector/cute-brown-dog-avatar_79416-70.jpg" alt=""/>
      <h1 style={{textAlign:'center'}}>Login</h1>
      </div>
      
      <Form.Group controlId="formBasicEmail">
      <Form.Label>Email address</Form.Label>
      <Form.Control type="email" placeholder="Enter email" />
      <Form.Text className="text-muted">
        We'll never share your email with anyone else.
      </Form.Text>
    </Form.Group>
  
    <Form.Group controlId="formBasicPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Password" />
    </Form.Group>
    <Form.Group controlId="formBasicCheckbox">
      <Form.Check type="checkbox" label="Check me out" />
    </Form.Group>
    <Button variant="primary" type="submit">
      Login
    </Button>
    
    <Nav style={{
        justifyContent:'center'
    }} defaultActiveKey="/signup">
    <Nav.Link>
    <Link to="/signup">New Here? Click Me To SignUp!</Link>
    </Nav.Link>
    
    </Nav>
    </Form>
  
    
      </Container>
      </>
    );
  }
  
  
}