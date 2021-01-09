import React, { useState } from "react";
import { withStyles } from '@material-ui/core/styles';
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
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import CloseIcon from '@material-ui/icons/Close';
import EditForm from './EditForm';

import SaveIcon from '@material-ui/icons/Save';
import Button from '@material-ui/core/Button';
import Axios from "axios";
const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

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
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = (props) => {
    setOpen(true);

    console.log(props)
  };
  const handleClose = () => {
    setOpen(false);
  };

  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  

  const savePetToUser = async (props) =>{ 
    console.log(props)
    // let token = localStorage.getItem("x-auth-token");
    //   if (token === null) {
    //     localStorage.setItem("x-auth-token", "");
    //     token = "";
    //   }
    
    // const tokenRes = await Axios.post(
    //   "http://localhost:5000/users/tokenIsValid",
    //   null,
    //   { headers: { "x-auth-token": token } }
    // );
    // if (tokenRes.data) {
    //   const userRes = await Axios.post(
    //     `http://localhost:5000/pets/pet/${props.value.id}/save`,
    //   null,
    //   { headers: { "x-auth-token": token } }
    // );
      
    // }
    // return(
    //   alert("The Pets is Save to Your Pets Page.")
    // )
   
}

  
  if( props.value !== undefined){
    let adoptionStatusBtn;
    // if(props.value.adoptionStatus === 'Available'){
      adoptionStatusBtn = <Button
      onClick={() => handleClickOpen(props)}
      variant="contained"
      color="primary"
      size="small"
      className={classes.button}
      
    >
      Edit
    </Button>
    // }else{
    //   adoptionStatusBtn = null;
    // }
    return (
     <>
      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        {/* <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          Update Pets
        </DialogTitle> */}
        <DialogContent dividers>
          <Typography gutterBottom>
            <EditForm {...props}/>
          </Typography>
          
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>





     
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
            This is a short description For a full description please click on the arrow below.<br/> <br/>
            Short Description : <br/>
            Type : {props.value.type} <br/> 
            Color : {props.value.color}
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
      </>
    );
  }
  return(
    <>
    </>
)

}




