import { fade, withStyles  } from '@material-ui/core/styles';
import { withRouter } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import Cards from './Cards';
import React, { useState, useEffect ,useContext} from "react";
import Axios from "axios";
import CardsMyProfile from './CardsMyProfile';
import { Alert, AlertTitle } from '@material-ui/lab';

export default function MyPetsPage (){
    const [userData, setUserData] = useState('');

    useEffect(() => {
        const checkLoggedIn = async () => {
          let token = localStorage.getItem("x-auth-token");
          if (token === null) {
            localStorage.setItem("x-auth-token", "");
            token = "";
          }
          const tokenRes = await Axios.post(
            "https://pets-app-server-nodejs.herokuapp.com/users/tokenIsValid",
            null,
            { headers: { "x-auth-token": token } }
          );
          if (tokenRes.data) {
            const userRes = await Axios.get("https://pets-app-server-nodejs.herokuapp.com/pets/get-user-save-pet", {
              headers: { "x-auth-token": token },
            });
            
            setUserData(userRes.data)
            
          }
    
        };
    
        checkLoggedIn();
        
      }, []);
      let cnt =0;
      let result;
      
            // console.log(userRes.data)
      if(userData.userPets){
        if(userData.userPets.length === 0){
            result = <Alert style={{marginTop:'20px'}} severity="info">
            <AlertTitle>Info</AlertTitle>
            You currently do not own or foster any pets. 
          </Alert>
      }else{
        result =  <div style={{display:'flex',flexWrap: 'wrap', justifyContent:'center'}}>
        {
           userData.userPets.map(function(card){
                return (<CardsMyProfile value = {card} key = {cnt++}/>)
              })
        }
    </div>
      }

         
      }else{
        result = 'Loading...'
      }
      
      return(
            <>
                <Container>
                {result}
                </Container>
                
            </>
        )
}



// import React from "react";
// import { Link } from "react-router-dom";
// import AuthOptions from "../auth/AuthOptions";

// export default function Header() {
//   return (
//     <header id="header">
//       <Link to="/">
//       </Link>
//       <AuthOptions />
//     </header>
//   );
// }
