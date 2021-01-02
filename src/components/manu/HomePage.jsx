import React from 'react';
import Cards from './Cards';
import { getGlobal, resetGlobal, setGlobal, useGlobal } from 'reactn';
import UserContext from "../../context/UserContext";
import { useState, useEffect ,useContext} from "react";
import Axios from "axios";

export default function HomePage() {
   let cnt = 0;
    const { userData, setUserData } = useContext(UserContext);
    const [usePetsRes, setPetsRes] = useState(null);
    const [ global, setGlobal ] = useGlobal()

    
    useEffect(() => {
        const petsData = async () => {
            const petsRes = await Axios.get("http://localhost:5000/pets/get-pet", {
            });
            
            await setPetsRes(petsRes.data)
           
        };
        petsData();
      }, []);
      
        
      useEffect(() => {
        
            const petsData = async () => {
                const petsRes = await Axios.get(`http://localhost:5000/pets/pet-search/${global.pets}`, {
                });
                
                await setPetsRes(petsRes.data)
            };
                if(global.pets !== ""){
                    petsData();
                }
                 
                 else{
                    const petsData2 = async () => {
                        const petsRes = await Axios.get("http://localhost:5000/pets/get-pet", {
                        });
                        
                        await setPetsRes(petsRes.data)
                       
                    };
                    petsData2();
                 }
             
             

          }, [global]);
      
      
       
        
        
      
      
       
        if(usePetsRes){
                            return(
                    <>                
                    <div style={{display:'flex',flexWrap: 'wrap', justifyContent:'center'}}>
                        {
                           usePetsRes.pets.map(function(card){
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