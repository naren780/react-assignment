import { Grid } from '@mui/material';
// import { Container } from '@mui/system';
import React from 'react';
import CardImg from './CardImg';
import CardsText from './CardsText';
const CardSec2 = () => {
  return (
     
    <Grid container columnSpacing={0} >
        <Grid item xs={12} md={6} lg={4}>
             <div className='card-section'>
                 <CardsText number="61%"
                            para="this is normal text"/>
             </div>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
               <div className='card-section'>
                   <CardImg url="Images/percent.png"
                            para="this is normal text"/>
               </div>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
               <div className='card-section'>
                  <CardsText number="89%"
                             para="this is normal text"/>
                 </div>
        </Grid>
        {/* second row */}
        <Grid item xs={12} md={6} lg={4}>
                <div className='card-section'>
                   <CardImg url="Images/user.png"
                      para="this is normal text"/> 
                </div> 
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
              <div className='card-section'>
                  <CardsText number="55%"
                             para="this is normal text"/>
              </div>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
               <div className='card-section'>
                    <CardImg url="Images/heart.png"
                             para="this is normal text"/> 
                </div>  
        </Grid>
        {/* third row */}
        <Grid item xs={12} md={6} lg={4}>
               <div className='card-section'>
                   <CardImg url="Images/think.png"
                           para="this is normal text"/>  
                </div>  
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
                <div className='card-section'>
                    <CardsText number="90%"
                               para="this is normal text"/>
           </div>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
                   <div className='card-section'>
                      <CardsText number="99%"
                                 para="this is normal text"/>
                   </div>
        </Grid>
    </Grid> 
   
      

  )
}

export default CardSec2;
