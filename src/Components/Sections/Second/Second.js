import React, { useEffect } from 'react';
import { Typography, makeStyles } from "@material-ui/core";
import '../../css/Section.css';
import Button from '@material-ui/core/Button';
import useWebAnimations from "@wellyshen/use-web-animations";
import iMac from '../../../assets/imac.svg'
import "animate.css/animate.min.css";
import AOS from 'aos'
import 'aos/dist/aos.css';

const useStyles = makeStyles({
    HeadingComponent: {
        color: 'black',
        width: '50%',
        fontFamily: 'Tahoma, Geneva, sans-serif'


    },
    CryptoSection:{
      marginTop : '20%',
        marginLeft: '5%',
        marginRight : '4%',
        fontFamily: 'Tahoma, Geneva, sans-serif'

    },
    buttons : {
        color: 'black',
        borderBlockStyle: 'solid',
        border: '5px',
        width: '200px',
        height: '42x',
        fontSize: '18px',
        // transition: 'background-color 0.4s linear',
        transition: 'border-radius  0.4s linear',
        cursor: 'pointer',
        fontFamily: 'Tahoma, Geneva, sans-serif',
        borderRadius: '40px',
        marginBottom: '15px',
        marginLeft: '10px',
        '&:hover': {
            backgroundColor: '#4075c9',
            color: 'white',
            borderRadius: '10px'
           
        },
   
    }
   

  });



const SecondSection = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  });
  
    const classes = useStyles();
    
    const CryptoSection = useWebAnimations({
        keyframes: {
          transform: "translateX(15px)",
        },
        timing: {
          duration: 1500, // Run for 1000ms
          iterations: 2, // Repeat once
          direction: "alternate", // Run the animation forwards and then backwards
          easing: "ease-in-out", // Use a fancy timing function
        },
      });
    
      function scrollFor() {
        CryptoSection.getAnimation().play(CryptoSection);
 
    
    }
    
    
    // const [scrollY,] = useState(0);
    
    useEffect(() => {
      function watchScroll() {
        window.addEventListener("scroll", scrollFor);
      }
      watchScroll();
      return () => {
        window.removeEventListener("scroll", scrollFor);
      };
    });

    return (
        <>
        <section className={classes.CryptoSection}>
            <div className="buildSection">
            <img src={iMac} alt="CryptoSection" ref={CryptoSection.ref}/>
        <div className={classes.HeadingComponent}>
            <Typography variant="h2" component="h2">
            Create Crypto Tokens
            </Typography>
            <br/>            <br/>
       
            <Typography variant="h6" data-aos="fade-zoom-in">
        
            Syscoin Platform Tokens (SPT) allow anyone to quickly create their own cryptocurrency token on Syscoin Platform. An example of an SPT is LODE,
             a new cryptographic money system backed by physical silver. Other use cases include loyalty points, coins supported by physical assets, and service-backed currency.

            </Typography>
            <br/><br/><br/>

            <div>
        <Button variant="outlined" className={classes.buttons}> LEARN MORE</Button>

        </div>
        </div>
       


       

        </div>
        </section>


        

        </>
    )
}

export default SecondSection
