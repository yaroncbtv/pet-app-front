import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { fade, withStyles  } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import Drawer from '@material-ui/core/Drawer';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import React, { useState } from 'react';
import { Redirect } from "react-router-dom";
import { withRouter } from 'react-router-dom';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch1 from '@material-ui/core/Switch';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const useStyles = theme => ({
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
    search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
      drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
      },
      marginLeft: 0,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
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
  });
  

  



  class HeaderWelcomeLogin extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            manuOpenClose: false,
            userName:'User',
            lastName:'User',
            LinkMyPetsPage: false,
            profileSettings: false,
            homePage: false
        }

        this.LinkMyPetsPage = this.LinkMyPetsPage.bind(this);
        this.profileSettings = this.profileSettings.bind(this);
        this.homePage = this.homePage.bind(this);

    }
    LinkMyPetsPage(){
      this.setState({LinkMyPetsPage:true})
      let path = `mypetspage`;
      this.props.history.push(path);
    }

    profileSettings(){
      this.setState({profileSettings:true})
      let path = `profilesettings`;
      this.props.history.push(path);
    }
    homePage(){
      this.setState({homePage:true})
      let path = ``;
      this.props.history.push(path);
    }

    render(){
        const { classes } = this.props;
        
        return (
            <div className={classes.root}>
              <AppBar position="static">
                <Toolbar>
                  <IconButton
                    edge="start"
                    className={classes.menuButton}
                    color="inherit"
                    aria-label="open drawer"
                    onClick={() => this.setState({manuOpenClose:true})}
                  >
                    <MenuIcon />
                  </IconButton>
                  <Typography className={classes.title} variant="h6" noWrap>
                    Welcome: {this.state.userName + ' ' + this.state.lastName} 
                  </Typography>
                  
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
                    />
                    
                  </div>
                  <FormControlLabel
                      control={<Switch1 name="checkedA" />}
                      label="Advanced Search"
                      style={{margin:'0px'}}
                    />
                </Toolbar>
              </AppBar>
      
              <React.Fragment key={"left"}>
                <Drawer
                  variant="temporary"
                  anchor="left"
                  open={this.state.manuOpenClose} 
                >
                  <div className={classes.drawerHeader}>
                <IconButton onClick={() => this.setState({manuOpenClose:false})} style={{float:'right'}}>
                    
                  <ChevronLeftIcon />
                  <span>Close</span>
                </IconButton>
                  </div>
                  <Divider />
                  <List style={{width:'250px'}}>
                 
                  <ListItem button>
                      <ListItemText onClick={this.homePage} style={{textAlign:'center'}} primary={'Home Page'}/>
                  </ListItem>

                  <ListItem button>
                      <ListItemText onClick={this.LinkMyPetsPage} style={{textAlign:'center'}} primary={'My Pets Page'}/>
                  </ListItem>
                  <ListItem button >
                      <ListItemText onClick={this.profileSettings} style={{textAlign:'center'}} primary={'Profile Settings '}/>
                  </ListItem>
                  </List>
                  <Divider />
                </Drawer>
                </React.Fragment> 
            </div>
          );
    }

    
  }
  export default withStyles(useStyles)(withRouter(HeaderWelcomeLogin));

  // export default withRouter(HeaderWelcomeLogin);
  // export default withStyles(useStyles)(HeaderWelcomeLogin)

