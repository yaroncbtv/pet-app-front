import React from 'react';
import HeaderWelcomeLogin from './HeaderWelcomeLogin';
import ProfileSettings from './ProfileSettings';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
export default class HomePage extends React.Component{
    constructor(props) {
        super(props);
        
    }
    
    
    render(){
        return(
            <>
                
                <HeaderWelcomeLogin/>
                
            </>
        )
    }
}