import React, { useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../../context/UserContext";
import HomePage from '../manu/HomePage';
import Container from '@material-ui/core/Container';
import { Alert, AlertTitle } from '@material-ui/lab';
import Button from '@material-ui/core/Button';

export default function Home() {
  const { userData } = useContext(UserContext);
  return (
    <div className="page">
      
      {userData.user ? (
        <>
        <h1>Welcome {userData.user.displayName + ' ' + userData.user.lastName}</h1>
        <HomePage/>
        </>
      ) : (
        <>
          <Container>
          <div className='box' style={{
            display:'flex',
            flexDirection:'column',
            alignItems:'center',
            justifyContent:'center',
            alignContent:'center'
            
          }}>
        <Alert style={{marginBottom:'20px'}} severity="error">
          <AlertTitle>Info</AlertTitle>
          You ate not Login — <strong>lets Login!</strong>
        </Alert>
          
        <Button variant="contained" color="primary">
        <Link style={{color:'white'}} to="/login">Login</Link>
        </Button>
          
          </div>
        

          </Container>
        </>
      )}
    </div>
  );
}
