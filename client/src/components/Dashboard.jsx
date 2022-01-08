import React from "react";
import { Box } from "@material-ui/core";
import styling from "../styles/componentstyle/Dashboard";

const LeftNav = () => {
  //AppBar states and functions
  const classes = styling();
  return (
    <>
      <Box 
      className={classes.contain}
      width="80vw"
      height="90vh">

      </Box>
    </>
  );
};

export default LeftNav;
