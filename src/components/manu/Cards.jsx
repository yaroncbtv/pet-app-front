import React, { useState ,useEffect, useContext} from "react";
import UserContext from "../../context/UserContext";

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
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Alert from '@material-ui/lab/Alert';
import Snackbar from '@material-ui/core/Snackbar';


import SaveIcon from '@material-ui/icons/Save';
import Icon from '@material-ui/core/Icon';
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
  const { userData, setUserData } = useContext(UserContext);
  
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  

  const savePetToUser = async (props) =>{ 
    
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
      const userRes = await Axios.post(
        `http://localhost:5000/pets/pet/${props.value.id}/save`,
      null,
      { headers: { "x-auth-token": token } }
    );
      
    }
    return(
      alert("The Pets is Save to Your Pets Page.")
    )
   
}
  
  if( props.value !== undefined){
    let adoptionStatusBtn;
    // if(props.value.adoptionStatus === 'Available'){
      adoptionStatusBtn = <Button
      onClick={() => savePetToUser(props)}
      variant="contained"
      color="primary"
      size="small"
      className={classes.button}
      startIcon={<SaveIcon />}
    >
      Save
    </Button>
    // }else{
    //   adoptionStatusBtn = null;
    // }
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
        {adoptionStatusBtn}
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




























// import React from 'react';
// import { fade, withStyles  } from '@material-ui/core/styles';
// import { withRouter } from 'react-router-dom';
// import { makeStyles } from '@material-ui/core/styles';
// import clsx from 'clsx';
// import Card from '@material-ui/core/Card';
// import CardHeader from '@material-ui/core/CardHeader';
// import CardMedia from '@material-ui/core/CardMedia';
// import CardContent from '@material-ui/core/CardContent';
// import CardActions from '@material-ui/core/CardActions';
// import Collapse from '@material-ui/core/Collapse';
// import Avatar from '@material-ui/core/Avatar';
// import IconButton from '@material-ui/core/IconButton';
// import Typography from '@material-ui/core/Typography';
// import { red } from '@material-ui/core/colors';
// import FavoriteIcon from '@material-ui/icons/Favorite';
// import ShareIcon from '@material-ui/icons/Share';
// import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
// import MoreVertIcon from '@material-ui/icons/MoreVert';
// const useStyles = theme => ({
//     root: {
//       maxWidth: 345,
//       margin:'20px'
//     },
//     media: {
//       height: 0,
//       paddingTop: '56.25%', // 16:9
//     },
//     expand: {
//       transform: 'rotate(0deg)',
//       marginLeft: 'auto',
//       transition: theme.transitions.create('transform', {
//         duration: theme.transitions.duration.shortest,
//       }),
//     },
//     expandOpen: {
//       transform: 'rotate(180deg)',
//     },
//     avatar: {
//       backgroundColor: red[500],
//     },
//   });

  

// class Cards extends React.Component{
//     constructor(props){
//         super(props)
//         this.state ={
//             expanded: false
//         }
//     this.handleExpandClick = this.handleExpandClick.bind(this);

//     }
//     handleExpandClick(){
//         if(this.state.expanded){
//             this.setState({expanded:false});
//         }else{
//             this.setState({expanded:true});
//         }
        
//       };
    
//     render(){
//         const { classes } = this.props;
//         return(
//             <>
//                 <Card className={classes.root}>
//       <CardHeader
//         avatar={
//           <Avatar aria-label="recipe" className={classes.avatar}>
//             R
//           </Avatar>
//         }
//         action={
//           <IconButton aria-label="settings">
//             <MoreVertIcon />
//           </IconButton>
//         }
//         title="Shrimp and Chorizo Paella"
//         subheader="September 14, 2020"
//       />
//       <CardMedia
//         className={classes.media}
//         image="https://static.toiimg.com/thumb/msid-60132235,imgsize-169468,width-800,height-600,resizemode-75/60132235.jpg"
//         title="Paella dish"
//       />
//       <CardContent>
//         <Typography variant="body2" color="textSecondary" component="p">
//           This impressive paella is a perfect party dish and a fun meal to cook together with your
//           guests. Add 1 cup of frozen peas along with the mussels, if you like.
//         </Typography>
//       </CardContent>
//       <CardActions disableSpacing>
//         <IconButton aria-label="add to favorites">
//           <FavoriteIcon />
//         </IconButton>
//         <IconButton aria-label="share">
//           <ShareIcon />
//         </IconButton>
//         <IconButton
//           className={clsx(classes.expand, {
//             [classes.expandOpen]: this.state.expanded,
//           })}
//           onClick={this.handleExpandClick}
//           aria-expanded={this.state.expanded}
//           aria-label="show more"
//         >
//           <ExpandMoreIcon />
//         </IconButton>
//       </CardActions>
//       <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
//         <CardContent>
//           <Typography paragraph>Method:</Typography>
//           <Typography paragraph>
//             Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
//             minutes.
//           </Typography>
//           <Typography paragraph>
//             Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high
//             heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly
//             browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken
//             and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion, salt and
//             pepper, and cook, stirring often until thickened and fragrant, about 10 minutes. Add
//             saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
//           </Typography>
//           <Typography paragraph>
//             Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook
//             without stirring, until most of the liquid is absorbed, 15 to 18 minutes. Reduce heat to
//             medium-low, add reserved shrimp and mussels, tucking them down into the rice, and cook
//             again without stirring, until mussels have opened and rice is just tender, 5 to 7
//             minutes more. (Discard any mussels that don’t open.)
//           </Typography>
//           <Typography>
//             Set aside off of the heat to let rest for 10 minutes, and then serve.
//           </Typography>
//         </CardContent>
//       </Collapse>
//     </Card>
                
//             </>
//         )
//     }
// }


//export default withStyles(useStyles)(withRouter(Cards));