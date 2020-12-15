import React from 'react';
import HeaderWelcomeLogin from './HeaderWelcomeLogin';
import ProfileSettings from './ProfileSettings';
import Cards from './Cards';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  import { Container } from '@material-ui/core';

export default class HomePage extends React.Component{
    constructor(props) {
        super(props);
        
    }
    
    
    render(){
        
        return(
            <>
                
                <HeaderWelcomeLogin/>
                <Container style={{display:'flex',flexWrap: 'wrap', justifyContent:'center'}}>
                    <Cards/>
                    <Cards/>
                    <Cards/>
                    <Cards/>
                    <Cards/>
                    <Cards/>
                </Container>
            </>
        )
    }
}