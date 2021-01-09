import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Axios from "axios";
import Header from "./components/layout/Header";
import Home from "./components/pages/Home";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import UserContext from "./context/UserContext";
import ProfileSettings from './components/manu/ProfileSettings'
import MyPetsPage from './components/manu/MyPetsPage'
import "./style.css";
import Container from '@material-ui/core/Container';

export default function App() {
  const [userData, setUserData] = useState({
    token: undefined,
    user: undefined,
    cards:{
      img: '',
      petsName: '',
      petsCurrentStatus: '',
      seeMoreBtn: '',
    }
  });
  
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
        const userRes = await Axios.get("https://pets-app-server-nodejs.herokuapp.com/users/", {
          headers: { "x-auth-token": token },
        });
        setUserData({
          token,
          user: userRes.data,
          cards:[{
            img: 'imgURL',
            petsName: 'dog',
            petsCurrentStatus: 'true',
            seeMoreBtn: 'see more',
          }]
        });
      }

    };

    checkLoggedIn();
    
  }, []);

  return (
    <>
      <BrowserRouter>
        <UserContext.Provider value={{ userData, setUserData }}>
          <Header />
          <Container>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/login" component={Login} />
              <Route path="/register" component={Register} />
              <Route path="/profilesettings">
              <ProfileSettings />
            </Route>
            <Route path="/mypetspage">
              <MyPetsPage />
            </Route>
            
            </Switch>
          </Container>
        </UserContext.Provider>
      </BrowserRouter>
    </>
  );
}
