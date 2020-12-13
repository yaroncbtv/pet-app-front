import React from 'react'
import { Button } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
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
export default class SignUp extends React.Component {
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
      <img className='img-login' src="https://i.thecartoonist.me/pet-avatar-of-bulldog.png" alt=""/>
      <h1 style={{textAlign:'center'}}>SignUp</h1>
      </div>
      
      <Row>
    <Col>
      <Form.Label>First name</Form.Label>
      <Form.Control/>
    </Col>
    <Col>
    <Form.Label>Last name</Form.Label>
      <Form.Control/>
    </Col>
  </Row>

  <Row>
    <Col>
      <Form.Label>Email</Form.Label>
      <Form.Control type="email" placeholder="Enter email"/>
    </Col>
    <Col>
    <Form.Label>Phone Number</Form.Label>
      <Form.Control required type="tel"/>
    </Col>
  </Row>

  <Row>
    <Col>
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Password"/>
    </Col>
    <Col>
    <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Password"/>
    </Col>
  </Row>



      
      
  
    

    <Button style={{marginTop:'20px'}} variant="primary" type="submit">
        SignUp
    </Button>
    
    <Nav style={{
        justifyContent:'center'
    }} defaultActiveKey="/">
    <Nav.Link>
    <Link to="/">Already SignUp? Click ME to Login!</Link>
    </Nav.Link>
    
    </Nav>
    </Form>
  
    
      </Container>
      </>
    );
  }
  
  
}