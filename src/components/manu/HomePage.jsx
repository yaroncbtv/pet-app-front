import React from 'react';
import ProfileSettings from '../manu/ProfileSettings';
import Cards from './Cards';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  import { Container } from '@material-ui/core';
  import UserContext from "../../context/UserContext";
  import { useState, useEffect ,useContext} from "react";
  import Axios from "axios";

export default function HomePage() {
   let cnt = 0;
    const { userData, setUserData } = useContext(UserContext);
    const [usePetsRes, setPetsRes] = useState(null);

    useEffect(() => {
        const petsData = async () => {
            const petsRes = await Axios.get("http://localhost:5000/pets/get-pet", {
            });
            
            await setPetsRes(petsRes.data)
           
        };
        petsData();
      }, []);

      
        if(usePetsRes){
            return(
                <>
                <div style={{display:'flex',flexWrap: 'wrap', justifyContent:'center'}}>
                    {
                       usePetsRes.map(function(card){
                            return (<Cards value = {card} key = {cnt++}/>)
                          })
                    }
                </div>
                </>
            )
        }

        return(
            <>
            </>
        )
}