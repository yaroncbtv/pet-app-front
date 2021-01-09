import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary">
      {'Copyright © '}
      <Link color="inherit" href="https://ycdeveloper.com/">
        {'<Y.C> Developer'}
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  main: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2),
  },
  footer: {
    padding: theme.spacing(3, 2),
    marginTop: 'auto',
    backgroundColor:"#FFDF6C"
   
  },
}));

export default function StickyFooter() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Container style={{padding:'50px'}} component="main" className='box' maxWidth="sm">
        <Typography variant="h2" component="h1" gutterBottom>
          Welcome To: <br/> Pets App!
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom>
          {'Pets App is a limited admission animal shelter whose mission is to save'}
          {'socialize and secure loving homes for unwanted or abandoned animals.'}
        </Typography>
        <Typography variant="body1">Please Login or SignUp to continue with Adopt.</Typography>
      </Container>
      <footer className={classes.footer}>
        <Container  maxWidth="sm">
          <Typography variant="body1">{'Contact with me:' + ' '}
          <Link color="inherit" href="https://ycdeveloper.com/">{'ycdeveloper.com'}</Link>
          </Typography>
          
          <Copyright />
        </Container>
      </footer>
    </div>
  );
}