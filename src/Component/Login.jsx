import React from 'react'
import { Button } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import  HeaderWelcome  from './HeaderWelcome';
import axios from 'axios';
import '../App.css'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  import { Alert } from 'react-bootstrap';


export default class Login extends React.Component {
  
  constructor(props){
      super(props)
      
      this.handleChangeEmail = this.handleChangeEmail.bind(this);
      this.handleChangePassword = this.handleChangePassword.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleState = this.handleState.bind(this);

      this.state = {
        email:'',
        password:'',
        getUserData:'',
        emailIsEqual: false,
        passwordIsEqual: false,
        emailAndPasswordIsEquals: null
      }

      
  }
  handleChangeEmail(event) {
    this.setState({email: event.target.value});
  }
  handleChangePassword(event) {
    this.setState({password: event.target.value});
  }
  
    componentDidMount(){
      axios.get("http://localhost:4000/users")
      .then(function(response) {
        this.setState({ getUserData: response.data });
      }.bind(this));
    }
  

    handleState(){
      for(var i = 0; i<this.state.getUserData.length; i++){
        if(this.state.getUserData[i].email === this.state.email){
              this.setState({emailIsEqual:true})
          }
          if(this.state.getUserData[i].password === this.state.password){
            this.setState({passwordIsEqual:true})
        }
        
      }
      if(this.state.passwordIsEqual ){
        this.setState({emailAndPasswordIsEquals:true})
        
      }else{
        this.setState({emailAndPasswordIsEquals:false})
      }
      
    }

  handleSubmit(event) {
    this.handleState();
    event.preventDefault();
  }
  


  render(){
    this.props.loginSate(this.state);
    //console.log(this.state)
    let notEqual;
    if(this.state.emailAndPasswordIsEquals === false)
        notEqual = <Alert key={'notEqual'} variant={'danger'}>
          Email Or Password Not Correct! Try Again.
        </Alert>
      else{
        notEqual = null
      }

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
      <Form.Control value={this.state.email} onChange={this.handleChangeEmail} type="email" placeholder="Enter email" />
      <Form.Text className="text-muted">
        We'll never share your email with anyone else.
      </Form.Text>
    </Form.Group>
  
    <Form.Group controlId="formBasicPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control value={this.state.password} onChange={this.handleChangePassword} type="password" placeholder="Password" />
    </Form.Group>
    <Button onClick={this.handleSubmit} variant="primary" type="submit">
      Login
    </Button>
    
    <Nav style={{
        justifyContent:'center'
    }} defaultActiveKey="/signup">
    <Nav.Link>
    <Link to="/signup">New Here? Click Me To SignUp!</Link>
    </Nav.Link>
    
    </Nav>
    {notEqual}
    </Form>
  
    
      </Container>
      </>
    );
  }
  
  
}