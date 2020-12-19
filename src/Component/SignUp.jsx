import React from 'react'
import { Button } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { Alert } from 'react-bootstrap';
import  HeaderWelcome  from './HeaderWelcome';
import axios from 'axios';

import '../App.css'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

  function allnumeric(inputtxt)
  {
     var numbers = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
     if(inputtxt.match(numbers)){
     return true;
    }else{
      return false;
     }
  } 

  function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

export default class SignUp extends React.Component {
    constructor(props){
      super(props)
      this.state = {
          firstName: '',
          lastName: '',
          email:'',
          phone:'',
          password:'',
          configPassword:'',
          passwordIsEquals:null,
          signup: null,
          chackEmail:null,
          chackPhone:null

      }

      this.handleChangeFirstName = this.handleChangeFirstName.bind(this);
      this.handleChangeLastName = this.handleChangeLastName.bind(this);
      this.handleChangeEmail = this.handleChangeEmail.bind(this);
      this.handleChangePhone = this.handleChangePhone.bind(this);
      this.handleChangePassword = this.handleChangePassword.bind(this);
      this.handleChangeConfigPassword = this.handleChangeConfigPassword.bind(this);
      
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChangeFirstName(event) {
      this.setState({firstName: event.target.value});
    }
    handleChangeConfigPassword(event) {
      this.setState({configPassword: event.target.value});
    }
    handleChangePassword(event) {
      this.setState({password: event.target.value});
    }
    handleChangePhone(event) {
      this.setState({phone: event.target.value});
    }
    handleChangeEmail(event) {
      this.setState({email: event.target.value});
    }
    handleChangeLastName(event) {
      this.setState({lastName: event.target.value});
    }
    handleSubmit(event) {
      event.preventDefault();
      console.log(this.state.chackEmail)
      this.setState({chackEmail:!validateEmail(this.state.email)})
      this.setState({chackPhone:!allnumeric(this.state.phone)})
      if(this.state.password !== this.state.configPassword){
        this.setState({passwordIsEquals:true})
      }
      else{
        this.setState({passwordIsEquals:false})
        axios.post('http://localhost:4000/signup', this.state)
        .then(function (response) {
          console.log(response);
        })
        
      }
          
      
    }
    

    
  
  render(){
   
    let passIsEqul;
    if(this.state.passwordIsEquals)
        passIsEqul = <Alert key={'passIsEqul'} variant={'danger'}>
         The Password Don't Much! Try Again
      </Alert>
      else 
      passIsEqul=null
      
      let EmailOk;
      if(this.state.chackEmail)
      EmailOk = <Alert key={'EmailOk'} variant={'danger'}>
         The Email Not Correct! Try Again.
      </Alert>
      else 
      EmailOk=null

      let phoneOk1;
      if(this.state.chackPhone)
      phoneOk1 = <Alert key={'phoneOk1'} variant={'danger'}>
         The Phone Not Correct! Try Again.
      </Alert>
      else 
      phoneOk1=null

      let signUp = null;
      if(this.state.passwordIsEquals === false && 
        this.state.chackPhone === false &&
        this.state.passwordIsEquals === false
        )
        signUp = <>
        <Alert style={{textAlign:'center'}} key={'signUp'} variant={'success'}>
            SignUp success! <Link to="/">Go To Login</Link>
        </Alert>
        </>

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
      <Form.Control required value={this.state.firstName} onChange={this.handleChangeFirstName}/>
    </Col>
    <Col>
    <Form.Label>Last name</Form.Label>
      <Form.Control required value={this.state.lastName} onChange={this.handleChangeLastName}/>
    </Col>
  </Row>

  <Row>
    <Col>
      <Form.Label>Email</Form.Label>
      <Form.Control required value={this.state.email} onChange={this.handleChangeEmail} type="email"/>
    </Col>
    <Col>
    <Form.Label>Phone Number</Form.Label>
      <Form.Control required value={this.state.phone} onChange={this.handleChangePhone}  type="tel"/>
    </Col>
  </Row>

  <Row>
    <Col>
      <Form.Label>Password</Form.Label>
      <Form.Control required value={this.state.password} onChange={this.handleChangePassword} type="password" />
    </Col>
    <Col>
    <Form.Label>Password</Form.Label>
      <Form.Control required value={this.state.configPassword} onChange={this.handleChangeConfigPassword} type="password"/>
    </Col>
  </Row>
      
    <Button onClick={this.handleSubmit} style={{marginTop:'20px'}} variant="primary" type="submit">
        SignUp
    </Button>
    
    <Nav style={{
        justifyContent:'center'
    }} defaultActiveKey="/">
    <Nav.Link>
    <Link to="/">Already SignUp? Click ME to Login!</Link>
    </Nav.Link>
    
    </Nav>
    {signUp}
    {phoneOk1}
    {EmailOk}
    {passIsEqul}
    </Form>
  
    
      </Container>
      </>
    );
  }
  
  
}