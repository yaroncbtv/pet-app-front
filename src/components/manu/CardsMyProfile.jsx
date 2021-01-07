import React, { useState } from "react";

import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Alert from '@material-ui/lab/Alert';
import Button from '@material-ui/core/Button';
import Axios from "axios";


const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    margin:'20px'
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));



export default function Cards(props) {
  //const { userData, setUserData } = useContext(UserContext);
  
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  

  const deletePetFromUser = async (props) =>{ 
    console.log(props.value.id)
    let token = localStorage.getItem("x-auth-token");
      if (token === null) {
        localStorage.setItem("x-auth-token", "");
        token = "";
      }
    
    const tokenRes = await Axios.post(
      "http://localhost:5000/users/tokenIsValid",
      null,
      { headers: { "x-auth-token": token } }
    );
    if (tokenRes.data) {
      const userRes = await Axios.delete(
        `http://localhost:5000/pets/pet/${props.value.id}/delete`,
      
      { headers: { "x-auth-token": token } }
    );
      
    }
    window.location.reload();
}


  
  if( props.value !== undefined){
    return (
      <Card className={classes.root}>
        <CardHeader
          avatar={
            <Avatar aria-label="recipe" className={classes.avatar}>
             {props.value.name[0]}
            </Avatar>
          }
           action={
            <Alert severity="info">{props.value.adoptionStatus}</Alert>
  
          //   <IconButton aria-label="settings">
          //     <MoreVertIcon />
          //   </IconButton>
          
           }
          title={props.value.name}
          

          //subheader="September 14, 2016"
        />
        
     
        
        
        <CardMedia
          className={classes.media}
          image={props.value.picture}
          title={props.value.name}
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            This impressive paella is a perfect party dish and a fun meal to cook together with your
            guests. Add 1 cup of frozen peas along with the mussels, if you like.
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
        <Button
      onClick={() => deletePetFromUser(props)}
      variant="contained"
      color="secondary"
      size="small"
      className={classes.button}
      
    >
      delete
    </Button>
        {/* {adoptionStatusBtn} */}
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded,
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          
          <CardContent>
            <Typography paragraph>description:</Typography>
            <Typography paragraph>
              Type: {props.value.type} <br/> 
              Name: {props.value.name}<br/> 
              Adoption Status: {props.value.adoptionStatus}<br/> 
              Picture: {props.value.picture }<br/> 
              Height: {props.value.height }<br/> 
              Weight: {props.value.weight }<br/> 
              Color: {props.value.color}<br/> 
              Bio: {props.value.bio}<br/> 
              Hypoallergenic: {props.value.hypoallergenic? 'Yes':'No'}<br/> 
              Dietary Restrictions: {props.value.dietaryRestrictions}<br/> 
              Breed: {props.value.breed}
            </Typography>
  
          </CardContent>
        </Collapse>
      </Card>
    );
  }
  return(
    <>
    </>
)
}
