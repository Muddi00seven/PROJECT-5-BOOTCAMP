import React from "react";
import './Header.css'
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { makeStyles } from "@material-ui/core/styles";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { Button } from "@material-ui/core";
import {Link} from 'react-router-dom';
import logo from '../../assets/LOGO.png'


const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    justifyContent: "space-between",
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    padding: 'auto',

    backgroundColor: 'white'
  },

  navButton : {
    color : 'red',
    fontSize: '16px',
    fontWeight: 'bold',
    transition: 'color 0.4s linear',

  '&:hover' :{
      color : 'red'
  },
  
  },

  links: {
    display: "flex",
  },
  menuButton: {
    color: theme.palette.primary.contrastText,
  },
  rightContainer: {
    [theme.breakpoints.up("md")]: {
      marginLeft: 80,
    },

    logo:{
      padding: '-100px'
    }
  }
}
));
const Header = ({ onMenuClickHandler }) => {
  const classes = useStyles();

  return (
    <div>
      <AppBar position="sticky" className={classes.appBar}  >
        <Toolbar className={classes.container }>
          {/* <Link to="/">
          </Link> */}
            <img className={classes.logo} src={logo} alt="logo" width="100px" height='80px'/>
          <Hidden xsDown>
            <div className={classes.links}>
            {/* LINKS WILL BE PUT HERE */}
              {/* <Button className={classes.navButton}>CURATOR  </Button>
                <Button className={classes.navButton}> LISTED PROJECTS </Button> 
            <Button className={classes.navButton} href="https://t.me/AntiScamTofficial" target="_blank"> TG </Button>
              
            <Button className={classes.navButton} href="https://antiscamtoken.cyou/AST.pdf"> WHITE PAPER </Button> */}

            </div>
          </Hidden>

          <div className={classes.rightContainer}>

            <Hidden smUp>
              <IconButton
                className={classes.menuButton}
                edge="end"
                aria-label="menu"
                onClick={onMenuClickHandler}
              >
                <MenuIcon />
              </IconButton>
            </Hidden>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
