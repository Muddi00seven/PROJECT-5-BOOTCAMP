import React, { useEffect  } from 'react';
import { Typography, makeStyles } from "@material-ui/core";
import '../../css/Section.css';
import LandingImage from '../../../assets/firstMain.svg'
import AOS from 'aos'
import 'aos/dist/aos.css';


const useStyles = makeStyles({
    HeadingComponent: {
      marginTop: '10%',
        color: 'black',
        width: '50%',
        fontFamily: 'Tahoma, Geneva, sans-serif'


    },
    first:{
        marginLeft: '4%',
        marginRight : '4%',
        fontFamily: 'Tahoma, Geneva, sans-serif'

    },
    firstPara:{
        fontSize: '18px',
        marginLeft: '4%',
        marginRight : '4%',
        fontFamily: 'Tahoma, Geneva, sans-serif'

    },
    firstImage: {
        height: '650px',
        width: '600px',

    }
   

  });



const FirstSection = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  });
    const classes = useStyles();
  

    return (
        <>
        <section className={classes.first}>
            <div className="buildSection">
        <div className={classes.HeadingComponent}>
            <Typography variant="h2" component="h2">
              Work From Home
            </Typography>
            <br/>            <br/>

            <Typography variant="h6" data-aos="fade-zoom-in" className={classes.firstPara}>
            The work-from-home job force just got a big push from the current global 
            coronavirus pandemic. But even before COVID-19 became a factor, increasing numbers of people have been saying goodbye to their onerous commute to work.
             </Typography>
             <br/> <br/>
          
        </div>

  
             
        
                 <img src={LandingImage} data-aos="fade-zoom-in" alt="working at home" className={classes.firstImage}/>

        </div>
        </section>



        </>
    )
}

export default FirstSection;
