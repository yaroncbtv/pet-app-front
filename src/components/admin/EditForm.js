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




export default function EditForm(props) {
  
    const [usePetsRes, setPetsRes] = useState(null);
    const [useUserRes, setUserRes] = useState(null);
    const classes = useStyles();
    const theme = useTheme();
    const [value, setValue] = React.useState(0);
    
    const [id, setId] = React.useState(props.value.id);
    const [type, setPetsType] = React.useState(props.value.type);
    const [name, setPetsName] = React.useState(props.value.name);
    const [adoptionStatus, setPetsAdoptionStatus] = React.useState(props.value.adoptionStatus);
    const [picture, setPetsPicture] = React.useState(props.value.picture);
    const [height, setPetsHeight] = React.useState(props.value.height);
    const [weight, setPetsWeight] = React.useState(props.value.weight);
    const [color, setPetsColor] = React.useState(props.value.color);
    const [bio, setPetsBio] = React.useState(props.value.bio);
    const [hypoallergenic, setPetsHypoallergenic] = React.useState(props.value.hypoallergenic);
    const [dietaryRestrictions, setDietaryRestrictions] = React.useState(props.value.dietaryRestrictions);
    const [breed, setPetsBreed] = React.useState(props.value.breed);
  
    async function handelSubmit (){
    const petsRes = await Axios.post("http://localhost:5000/pets/update", {
      id,
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
    
   }
    
    return (
        
            <>
            
            <Container className='box' component="main" maxWidth="xs">
          <CssBaseline />
          <div className={classes.paper}>
            {/* <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar> */}
            <Typography s component="h1" variant="h5">
              Update Pets
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
                    value={type}
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
                    value={name}
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
                    value={picture}
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
                    value={height}

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
                    value={weight}

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
                    value={color}

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
                    value={bio}

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
                    id="dietaryRestrictions"
                    label="Dietary Restrictions "
                    name="dietaryRestrictions"
                    autoComplete="dietaryRestrictions"
                    value={dietaryRestrictions}

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
                    value={breed}

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
                save change
              </Button>
              
            </form>
          </div>
          <Box mt={5}>
            <Copyright />
          </Box>
        </Container>
     </>
        
        
      );
    
}