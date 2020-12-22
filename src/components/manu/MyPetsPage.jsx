import React from 'react';
import { fade, withStyles  } from '@material-ui/core/styles';
import { withRouter } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import Cards from './Cards';
class MyPetsPage extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <>
                
                <Container>
                <h1>My Pets Page:</h1>
                <Cards/>
                </Container>
                
            </>
        )
    }
}


export default withRouter(MyPetsPage);