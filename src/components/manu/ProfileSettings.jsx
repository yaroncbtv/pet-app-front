import React, { useState, useEffect ,useContext} from "react";

import { useHistory } from "react-router-dom";
import UserContext from "../../context/UserContext";
import Axios from "axios";
import ErrorNotice from "../misc/ErrorNotice";

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
      YC-Developer

      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function ProfileSettings() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [passwordCheck, setPasswordCheck] = useState();
  const [displayName, setDisplayName] = useState();
  const [lastName, setLastName] = useState();
  const [phone, setPhone] = useState();
  const [error, setError] = useState();

  const {userData, setUserData } = useContext(UserContext);
  const history = useHistory();
  
  // const [userData, setUserData] = useState({
  //   token: undefined,
  //   user: undefined,
  // });

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
        const userRes = await Axios.get("https://pets-app-server-nodejs.herokuapp.com/users/profilesettings", {
          headers: { "x-auth-token": token },
        }); 
        setUserData({
          token,
          user: userRes.data,
        });
        setDisplayName(userRes.data.displayName)
        setLastName(userRes.data.lastName)
        setPhone(userRes.data.phone)
        setEmail(userRes.data.email)
      }
    };

    checkLoggedIn();
    
  }, []);
  
  const submit = async (e) => {
    try {
      const loginUser = { email, displayName, lastName, phone };
      const loginRes = await Axios.post(
        "https://pets-app-server-nodejs.herokuapp.com/users/update",
        loginUser
      );
    } catch (err) {
      err.response.data.msg && setError(err.response.data.msg);
    }
  };
  
  const classes = useStyles();
  return (
    
    <Container className='box' component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
        Profile Settings
        </Typography>
        <form onSubmit={submit} className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                id="firstName"
                label="First Name"
                defaultValue="Loading..."
                variant="outlined"
                value={displayName}
                onChange={(e) => setDisplayName(e.target.value)}
              />
            </Grid>
            
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                defaultValue="Loading..."
                value={lastName}
                label="Last Name"
                name="lastName"
                autoComplete="lname"
                
                onChange={(e) => setLastName(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="phone"
                label="Phone"
                name="Phone"
                autoComplete="phone"
                defaultValue="Loading..."
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="register-email"
                label="Email Address"
                name="email"
                autoComplete="email"
                type="email"
                defaultValue="Loading..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Grid>
            {/* <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="register-password"
                autoComplete="current-password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Verify password"
                type="password"
                id="verifyPassword"
                autoComplete="current-password"
                onChange={(e) => setPasswordCheck(e.target.value)}
              />
            </Grid> */}
            
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            save
          </Button>
          
        </form>
      </div>
      <Box mt={5}>
      {error && (
      <ErrorNotice message={error} clearError={() => setError(undefined)} />
      )}
        <Copyright />
      </Box>
    </Container>
  );
}
