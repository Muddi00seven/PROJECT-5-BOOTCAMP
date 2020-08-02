import React from "react";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import { makeStyles } from "@material-ui/core/styles";



const useStyles = makeStyles((theme) => ({
  drawerPaper: {
    width: 240,
  },
}));



const RightDrawer = ({ open, onClickHandler }) => {
  const classes = useStyles();
//   const navigate = useNavigate();


  return (
    <Drawer
      variant="temporary"
      anchor="right"
      open={open}
      classes={{
        paper: classes.drawerPaper,
      }}
      onClick={onClickHandler}
    >
      <List>
        
       
      </List>
    </Drawer>
  );
};

export default RightDrawer;
