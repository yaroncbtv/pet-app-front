import React, { useContext , useState } from "react";
import { useHistory } from "react-router-dom";
import UserContext from "../../context/UserContext";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import ListItemText from '@material-ui/core/ListItemText';
import Button from '@material-ui/core/Button';
import Switch1 from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import PetsContext from "../../context/PetsContext";
import { getGlobal, resetGlobal, setGlobal, useGlobal } from 'reactn';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  titleLogout:{
    width:'100%'
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  btnUser: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  test: {
    [theme.breakpoints.down('xs')]: {
      display: 'none',
    },
  },
 
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));



export default function AuthOptions() {
  const { petsDataContext, setPetsDataContext } = useContext(PetsContext);
  const [ petsDataState, setPetsDataState ] = useState('');
  const { userData, setUserData } = useContext(UserContext);
  const [ drawer, setDrawer ]  = useState(false);
  const history = useHistory();
  const [ global, setGlobal ] = useGlobal()

  const register = () => history.push("/register");
  const login = () => history.push("/login");
  const logout = () => {
    setUserData({
      token: undefined,
      user: undefined,
    });
    localStorage.setItem("x-auth-token", "");
  };
  const classes = useStyles();
  const toggle = () => setDrawer(!drawer);

  function LinkMyPetsPage(){
    let path = `mypetspage`;
    history.push(path);
  }

  function profileSettings(){
    let path = `profilesettings`;
    history.push(path);
  }
  function homePage(){
    let path = ``;
    history.push(path);
  }

  setGlobal({ pets: petsDataState});
  
  return (

    <div className={classes.root}>
            
      <AppBar position="static">
   
        <Toolbar>
    
        {userData.user ? (
        <>
        <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
            onClick={toggle}
          >
            <MenuIcon />
          </IconButton>
          <React.Fragment key={"left"}>
                <Drawer
                  variant="temporary"
                  anchor="left"
                  open={drawer} 
                >
                  <div className={classes.drawerHeader}>
                <IconButton onClick={toggle} style={{float:'right'}}>
                    
                  <ChevronLeftIcon />
                  <span style={{fontSize:'20px'}}>Close</span>
                  </IconButton>
                  </div>
                  
                  <List style={{width:'250px'}}>
                  <Divider />
                  <ListItem button>
                      <ListItemText onClick={homePage} style={{textAlign:'center'}} primary={'Home Page'}/>
                  </ListItem>
                  <Divider />

                  <ListItem button>
                      <ListItemText onClick={LinkMyPetsPage} style={{textAlign:'center'}} primary={'My Pets Page'}/>
                  </ListItem>
                  <Divider />

                  <ListItem button >
                      <ListItemText onClick={profileSettings} style={{textAlign:'center'}} primary={'Profile Settings '}/>
                  </ListItem>
                  <Divider />

                  </List>
                </Drawer>
                </React.Fragment> 
        </>
      ) : (
        <>
          
        </>
      )}
  
          
          
          
          {userData.user ? (
        <>
        
        <Typography className={classes.title} variant="h6" noWrap>
        <span>Welcome {userData.user.displayName + ' ' + userData.user.lastName}</span>
        </Typography>
        </>
      ) : (
        <>
        <Typography className={classes.titleLogout} variant="h6" noWrap>
          <span>
          <img src='https://www.logolynx.com/images/logolynx/3e/3eec2bcb4f7ab1f14812d1f9d4134895.png' width="40" height="40" style={{borderRadius: '50%',marginRight:'10px'}}></img>
            Pets App
            </span>
          </Typography>
        </>
      )}
          {userData.user ? (
        <>
        <div className={classes.search}>
          
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
              onChange={e => setPetsDataState(e.target.value)}
            />
            
          </div>
          <FormControlLabel
                      control={<Switch1 name="checkedA" />}
                      style={{margin:'0px'}}
                    />
                    <span className={classes.test}>Advanced Search</span>
        </>
      ) : (
        <>
          
        </>
      )}
          
          
          {userData.user ? (
        <Button size="small" style={{marginLeft:'10px'}} onClick={logout} variant="contained" color="secondary">Logout</Button>
      ) : (
        <>
                  <Button size="small" style={{marginLeft:'10px'}} onClick={register} variant="contained" color="secondary">Signup</Button>
                  <Button size="small" style={{marginLeft:'10px'}} onClick={login} variant="contained" color="secondary">Login</Button>

          
        </>
      )}
        </Toolbar>
      </AppBar>
    </div>
  );
}
