import React, { useState, useEffect } from 'react';
// import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Axios from "axios";
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import CardsAdmin from './CardsAdmin'
import AllUser from './allUser';

function Copyright() {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="https://material-ui.com/">
          Your Website
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }
  
  function TabPanel(props) {
    const { children, value, index, ...other } = props;
    return (
        <div
          role="tabpanel"
          hidden={value !== index}
          id={`full-width-tabpanel-${index}`}
          aria-labelledby={`full-width-tab-${index}`}
          {...other}
        >
          {value === index && (
            <Box p={3}>
              <Typography>{children}</Typography>
            </Box>
          )}
        </div>
      );
    }

    TabPanel.propTypes = {
        children: PropTypes.node,
        index: PropTypes.any.isRequired,
        value: PropTypes.any.isRequired,
      };
      
      function a11yProps(index) {
        return {
          id: `full-width-tab-${index}`,
          'aria-controls': `full-width-tabpanel-${index}`,
        };
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

export default function Admin() {
    const [usePetsRes, setPetsRes] = useState(null);
    const [useUserRes, setUserRes] = useState(null);
    const classes = useStyles();
    const theme = useTheme();
    const [value, setValue] = React.useState(0);
    
    const [type, setPetsType] = React.useState('');
    const [name, setPetsName] = React.useState('');
    const [adoptionStatus, setPetsAdoptionStatus] = React.useState('');
    const [picture, setPetsPicture] = React.useState('');
    const [height, setPetsHeight] = React.useState('');
    const [weight, setPetsWeight] = React.useState('');
    const [color, setPetsColor] = React.useState('');
    const [bio, setPetsBio] = React.useState('');
    const [hypoallergenic, setPetsHypoallergenic] = React.useState('');
    const [dietaryRestrictions, setDietaryRestrictions] = React.useState('');
    const [breed, setPetsBreed] = React.useState('');
    let cnt = 0;
    useEffect(() => {
        const petsData = async () => {
            const petsRes = await Axios.get("http://localhost:5000/pets/get-pet", {
            });
            
            await setPetsRes(petsRes.data)
           
        };
        petsData();

        const userData = async () => {
            const usersRes = await Axios.get("http://localhost:5000/all-user", {
            });
            
            await setUserRes(usersRes.data)
        };
        userData();
      }, []);


    async function handelSubmit(e){
            const petsRes = await Axios.post("http://localhost:5000/pets/add-pet", {
                type,
                name,
                adoptionStatus,
                picture,
                height,
                weight,
                color,
                bio,
                hypoallergenic,
                dietaryRestrictions,
                breed
            });
        e.preventDefault();
    }

    const handleChange = (event, newValue) => {
        setValue(newValue);
      };
    
      const handleChangeIndex = (index) => {
        setValue(index);
      };
  return (
    <>

<div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="Add Pets" {...a11yProps(0)} />
          <Tab label="All Pets" {...a11yProps(1)} />
          <Tab label="All Users" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
        <Container className='box' component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        {/* <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar> */}
        <Typography style={{paddingTop:'20px'}} component="h1" variant="h5">
          Add Pets
        </Typography>
        <form className={classes.form}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={4}>
              <TextField
                autoComplete="type"
                name="type"
                variant="outlined"
                required
                fullWidth
                id="type"
                label="Type"
                autoFocus
                onChange={e => setPetsType(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="name"
                label="Name"
                name="name"
                autoComplete="name"
                onChange={e => setPetsName(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              {/* <TextField
                variant="outlined"
                required
                fullWidth
                id="adoptionStatus"
                label="Adp Status"
                name="adoptionStatus"
                autoComplete="adoptionStatus"
                onChange={e => setPetsAdoptionStatus(e.target.value)}
              /> */}
              <FormControl required  style={{width:'100%'}} variant="filled" className={classes.formControl}>
                <InputLabel id="demo-simple-select-filled-label2">Adp Status</InputLabel>
                <Select
                labelId="demo-simple-select-filled-label2"
                id="demo-simple-select-filled2"
                >
                <MenuItem value="">
                </MenuItem>
                <MenuItem value='Available' onClick={() => setPetsAdoptionStatus('Available')}>Available</MenuItem>
                <MenuItem value='Adopt' onClick={() => setPetsAdoptionStatus('Adopt')}>Adopt</MenuItem>
                <MenuItem value='Foster' onClick={() => setPetsAdoptionStatus('Foster')}>Foster</MenuItem>
                </Select>
            </FormControl>
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="picture"
                label="Picture URL"
                name="picture"
                autoComplete="picture"
                onChange={e => setPetsPicture(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="height"
                label="Height"
                name="height"
                autoComplete="height"
                type="number"
                onChange={e => setPetsHeight(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="weight"
                label="Weight"
                name="weight"
                type="number"
                autoComplete="weight"
                onChange={e => setPetsWeight(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="color"
                label="Color"
                name="color"
                autoComplete="color"
                onChange={e => setPetsColor(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="bio"
                label="Bio"
                name="bio"
                autoComplete="bio"
                onChange={e => setPetsBio(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              {/* <TextField
                variant="outlined"
                required
                fullWidth
                id="hypoallergenic"
                label="Hypoallergenic"
                name="hypoallergenic"
                autoComplete="hypoallergenic"
                onChange={e => setPetsHypoallergenic(e.target.value)}
              /> */}
              
        <FormControl required  style={{width:'100%'}} variant="filled" className={classes.formControl}>
        <InputLabel id="demo-simple-select-filled-label">Hypoallergenic</InputLabel>
        <Select
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
        >
          <MenuItem value="">
          </MenuItem>
          <MenuItem value='Yes' onClick={() => setPetsHypoallergenic(true)}>Yes</MenuItem>
          <MenuItem value='No' onClick={() => setPetsHypoallergenic(false)}>No</MenuItem>
        </Select>
      </FormControl>
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="DietaryRestrictions"
                label="Dietary Restrictions "
                name="DietaryRestrictions"
                autoComplete="DietaryRestrictions"
                onChange={e => setDietaryRestrictions(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                variant="outlined"
                required={true}
                fullWidth
                id="breed"
                label="Breed"
                name="breed"
                autoComplete="breed"
                onChange={e => setPetsBreed(e.target.value)}

              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={handelSubmit}
          >
            save pets
          </Button>
          
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
        
        {usePetsRes ? 
        <>
                    <div style={{display:'flex',flexWrap: 'wrap', justifyContent:'center'}}>
                        {
                           usePetsRes.pets.map(function(card){
                                return (<CardsAdmin value = {card} key = {cnt++}/>)
                              })
                        }
                    </div>
        </>
        
        : <></>}
        
        
                   
                    
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          
        

            
        {
            useUserRes ?
            useUserRes.map(function(user){
                return (<AllUser user = {user} key={cnt}/>)
              })
              :
              <></>
        }
        
  




        </TabPanel>
      </SwipeableViews>
    </div>





    
    </>

    
    
  );

}