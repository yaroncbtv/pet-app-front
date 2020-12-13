import React from 'react'
import Login from './Component/Login';
import SignUp from './Component/SignUp';
import Homepage from './Component/HomePage';
import '@fortawesome/fontawesome-free/css/all.min.css'; 
import 'bootstrap-css-only/css/bootstrap.min.css'; 
import'mdbreact/dist/css/mdb.css';
import ProfileSettings from './Component/ProfileSettings';
import MyPetsPage from './Component/MyPetsPage';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
class App extends React.Component {
  
  constructor(props){
    super(props)

      this.state = {
        isLogin:true
      }
  }
  
  render(){
    let isLogin;
    if(this.state.isLogin){
      isLogin = 
        <>
          <Router>
            <Switch>
            <Route exact path="/">
              {/* <Login /> */}
                <Homepage/>
            </Route>
            <Route path="/signup">
              <SignUp />
            </Route>
            <Route path="/profilesettings">
              <ProfileSettings />
            </Route>
            <Route path="/MyPetsPage">
              <MyPetsPage />
            </Route>
          </Switch>
        </Router>
        </>
      
    }else{
      isLogin = 
        <>
        <Router>
          <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route path="/signup">
            <SignUp />
          </Route>
        </Switch>
      </Router>


      </>
    
    }
   return(
      <>
      {isLogin}
      </>
   );
   
      
  }
  
  
}

export default App;
