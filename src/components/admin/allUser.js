import React, { useState } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import { withStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      maxWidth: '36ch',
      backgroundColor: theme.palette.background.paper,
    },
    inline: {
      display: 'inline',
    },
  }));

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


  export default function AllUser(props) {
    let cnt = 0;
    let petsUser;
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const classes = useStyles();
  
  
  
  return (
       
      <div style={{display:'flex',justifyContent:'center'}}>



<div>
      
      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          {'Pets User: ' + props.user.displayName + ' ' + props.user.lastName}
        </DialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom>
          
          {
            props.user.pets ?
            props.user.pets.map(function(pet){
                return (
                <>
                <p>{'Name' + ': ' +pet.name}</p>
                <p>{'Type' + ': ' +pet.type}</p>
                <p>{'Bio' + ': ' +pet.bio}</p>
                <p>{'Breed' + ': ' +pet.breed}</p>
                <p>{'Color' + ': ' +pet.color}</p>
                <p>{'Height' + ': ' +pet.height}</p>
                <p>{'Hypoallergenic' + ': ' +pet.hypoallergenic}</p>
                <p>{'Weight' + ': ' +pet.weight}</p>
                <p>{'Adoption Status' + ': ' +pet.adoptionStatus}</p>
                <Divider/>
                </>
                )
              })
              :
              <><h3>This User NOT have any pets.</h3></>
              
        }

          
  
              
  
          
         
        
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose} color="primary">
            OK
          </Button>
        </DialogActions>
      </Dialog>
    </div>







        <List  className={classes.root}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt={props.user.displayName[0]} src="/static/images/avatar/1.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary={props.user.displayName + ' ' + props.user.lastName}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                Email
              </Typography>
              {" — " + props.user.email}
              <br/>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                Phone
              </Typography>
              {" — " + props.user.phone}
            </React.Fragment> 
          }
        />
        
      </ListItem>
      <Button size="small" variant="contained" color="primary" onClick={handleClickOpen}>
        Pets User
      </Button>
      <Divider variant="inset" component="li" />
    </List>
        </div> 
  );
}