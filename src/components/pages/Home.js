import React, { useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../../context/UserContext";
import HomePage from '../manu/HomePage';
import Container from '@material-ui/core/Container';
import { Alert, AlertTitle } from '@material-ui/lab';
import Button from '@material-ui/core/Button';
import Admin from '../admin/Admin';

export default function Home() {
  const { userData } = useContext(UserContext);
   
    if(userData.user !== undefined){
if(userData.user.email === "Admin@Admin.com"){
    return (
      <>
        <Admin/>
      </>
    )
  }else{
    return (
      <div className="page">
        {userData.user ? (
          <>
          {/* <h1>Welcome {userData.user.displayName + ' ' + userData.user.lastName}</h1> */}
          <HomePage/>
          {console.log(userData)}
          </>
        ) : (
          <>
            
          </>
        )}
      </div>
    );
  }

    }
      return(
        <>
        <Container>
            <div className='box' style={{
              display:'flex',
              flexDirection:'column',
              alignItems:'center',
              justifyContent:'center',
              alignContent:'center'
              
            }}>
              <h1>Welcome To Pets App</h1>
          <Alert style={{marginBottom:'20px'}} severity="error">
            <AlertTitle>Info</AlertTitle>
            You ate not Login — <strong>lets Login!</strong>
          </Alert>
            
          <Button style={{marginBottom:'20px'}} variant="contained" color="primary">
          <Link style={{color:'white'}} to="/login">Login</Link>
          </Button>
            
            </div>
          
            
            </Container>
        </>
      )
    
  
    
  
  
  
  
}
