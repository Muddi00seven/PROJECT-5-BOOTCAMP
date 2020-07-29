import React from 'react';
import landingImage from '../../assets/main.jpg';
import './first.css';
import { Typography, makeStyles } from "@material-ui/core";

import useWebAnimations from "@wellyshen/use-web-animations";


const useStyles = makeStyles({
    landingImage:{
        // height: '60%'
        width:'100%'

        
    },
    firstSection:{

    },
    firstText:{
        position: 'absolute',
        color: 'red'
    }
})

const First = () => {
    const styles = useStyles();
    return (
    <>
    <div className={styles.firstSection}>
        <div className={styles.firstText}>
            <Typography>
                WELCOME TO THE
            </Typography>

            <Typography>
            
            </Typography>
        </div>
        <div>
            <img src={landingImage} className={styles.landingImage} alt='landingImage'/>
        </div>
    </div>
    </>
    )
}

export default First
