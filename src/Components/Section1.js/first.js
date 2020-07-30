import React from 'react';
import landingImage from '../../assets/firstMain.svg';
import './first.css';
import { Typography, makeStyles } from "@material-ui/core";

// import useWebAnimations from "@wellyshen/use-web-animations";


const useStyles = makeStyles({
    landingImage:{
        // height: '60%'
        width:'100%'

        
    },
    firstSection:{
    },
    firstText:{
        position: 'absolute',
        color: 'red',
        marginLeft:'10%',
        widht: '10%'


    },
    heading1:{

    },

    subHeading:{
        marginTop: '15%',

    }
})

const First = () => {
    const styles = useStyles();
    return (
    <>
    <div>
        <div className={styles.firstText}>
            <Typography variant="h2" className={styles.heading1}>
                WELCOME TO THE
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
