import React from 'react'
import { Button } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { FormControl } from 'react-bootstrap';
import '../App.css'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import { render } from '@testing-library/react';

  export default class HeaderWelcome extends React.Component{
      constructor(props){
          super(props)
        this.state = {
            userName:'Yaron',
            lastName:'Cohen'
        }
      }
    
    
    
    render(){
        return(
            <>
                <Navbar 
                bg="dark" 
                variant="dark" 
                style={{
                    display:'flex',
                    justifyContent:'space-between'
                }}
                >
            <Navbar.Brand href="#">
            <img
                alt=""
                src="https://image.freepik.com/free-vector/cute-brown-dog-avatar_79416-70.jpg"
                width="30"
                height="30"
                className="d-inline-block align-top"
            />{' '}
            Welcome to Pets App 
            </Navbar.Brand>
            
            </Navbar>


            </>
        )
      }
  }