import React, { useEffect  } from 'react';
import { Typography, makeStyles } from "@material-ui/core";
import '../../css/Section.css';
import useWebAnimations from "@wellyshen/use-web-animations";
import LandingImage from '../../../assets/firstMain.svg'
import AOS from 'aos'
import 'aos/dist/aos.css';


const useStyles = makeStyles({
    HeadingComponent: {
        color: 'black',
        width: '50%',
        fontFamily: 'Tahoma, Geneva, sans-serif'


    },
    first:{
      marginTop: '5%',
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
            Syscoin Bridge

            </Typography>
            <br/>            <br/>

            <Typography variant="h6" data-aos="fade-zoom-in" className={classes.firstPara}>
            Syscoin 4.0 introduces a first-of-its-kind, two-way bridge to Ethereum. This allows Ethereum developers to move ERC20 tokens back and forth between
             the Ethereum network and Syscoin Platfom, where they can make use of the scalability and high-transaction-throughput that Syscoin offers. This is done 
             using a unique, permissionless burn/mint process that moves a quantity of ERC20 tokens into a corresponding Syscoin Platform Token (SPT), which the user has created.
              The bridge makes it possible to maintain a presence on both the Syscoin network and Ethereum network.
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
