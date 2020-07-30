import React from 'react';
import landingImage from '../../../assets/firstMain.svg';
import './first.css';
import { Typography, makeStyles } from "@material-ui/core";
import Typical from 'react-typical';

// import useWebAnimations from "@wellyshen/use-web-animations";


const useStyles = makeStyles({
 

    heading1:{
        marginTop: '15%',
        marginLeft: '-35%'

        
    },
  
        
    firstContiner:{
        position: 'absolute',
        color: 'red',
        marginLeft:'10%',
        widht: '10%'


    },

    subHeading:{
        marginTop: '15%',
        // marginTop: '%',
        width:'50%',
        float: 'left',
        marginLeft: '10%'

    
    },
   

    landingImage:{
        // height: '60%'
        width:'50%',
        float: 'right'
        
    },
});

const First = () => {
    const styles = useStyles()
    return (
    <>
    <div>
        <div className={styles.firstContiner}>
            <Typography variant="h2" className={styles.heading1}>
       
            <Typical steps={['', 1000, 'Welcome to ... ', 500]}
        loop={1}
        wrapper="p"
        
        />    
                </Typography>

            <Typography variatn="h6" className={styles.subHeading}>
            Technology is evolving so do we seek new ideas and inspirations to build elegant and cunning designs of
             websites with asounding quality, future proof designs and responsive layouts. 
            </Typography>
        </div>
        <div>  
            <img className={styles.landingImage} src={landingImage}/>
        </div>
    </div>
    </>
    )
    }

    export default First