import React, { useEffect } from 'react';
import { Typography, makeStyles} from "@material-ui/core";
import '../../css/Section.css';
import useWebAnimations from "@wellyshen/use-web-animations";
import iMac from '../../../assets/imac.svg'
import AOS from 'aos'
import 'aos/dist/aos.css';
const useStyles = makeStyles({
    HeadingComponent: {
        color: 'black',
        marginTop: '25%',
        width: '50%',
        fontFamily: 'Tahoma, Geneva, sans-serif'


    },
    buildSection:{
        marginTop: '10%',
        marginLeft: '5%',
        marginRight : '4%',
        fontFamily: 'Tahoma, Geneva, sans-serif'

    }

   

  });

  

const ThirdSection = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  });
  
    const classes = useStyles();

    const build = useWebAnimations({
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
        build.getAnimation().play(build);
     
    
    }
    
  
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
        <section className={classes.buildSection}>
            <div className="buildSection">
        <div className={classes.HeadingComponent}>
            <Typography variant="h2" component="h2">
            What Can You Build?

            </Typography>
            <br/>            <br/>

            <Typography data-aos="fade-zoom-in" variant="h6">
            The possibilities of what you can build on the Syscoin
            platform are limited only by your imagination. Here are a some use cases to get your wheels turning:            </Typography>
        </div>

    
            <img src={iMac} alt="build" ref={build.ref }data-aos="fade-zoom-in"/>

        </div>
        </section>


        

        </>
    )
}

export default ThirdSection
