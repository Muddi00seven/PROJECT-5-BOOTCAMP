import React, { useEffect } from 'react';
import { Typography, makeStyles} from "@material-ui/core";
import '../../css/Section.css';
import useWebAnimations from "@wellyshen/use-web-animations";
import Clock from '../../../assets/alarm-clock.svg'
import AOS from 'aos';
import 'aos/dist/aos.css';
const useStyles = makeStyles({
   
    buildSection:{
        marginTop: '20%',
        marginLeft: '5%',
        marginRight : '4%',
        fontFamily: 'Tahoma, Geneva, sans-serif'

    },
    HeadingComponent: {
      marginTop: '8%',
      color: 'black',
      width: '50%',
      fontFamily: 'Tahoma, Geneva, sans-serif'


  },
  image:{
    width: '60%',
    height: '10%'
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
              How Much Time We Save?
            </Typography>
            <br/>            <br/>

            <Typography data-aos="fade-up" data-aos-anchor-placement="top-center" variant="h6">
            Many people who work from home choose to start their work days 
            earlier—and subsequently boost their productivity. Freelancers can fill that former commute time with outreach to clients, getting certified in a new skill
            </Typography>
        </div>

    
            <img src={Clock} alt="build" ref={build.ref } data-aos="fade-up" data-aos-anchor-placement="top-center" className={classes.image}/>

        </div>
        </section>


        

        </>
    )
}

export default ThirdSection
