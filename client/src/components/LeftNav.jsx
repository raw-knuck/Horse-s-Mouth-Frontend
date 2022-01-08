import React from "react";
import { Box } from "@material-ui/core";
import styling from "../styles/componentstyle/LeftNav";

const LeftNav = () => {
  //AppBar states and functions
  const classes = styling();
  return (
    <>
      <Box 
      className={classes.leftbar}
      width="20vw"
      height="90vh"
      >

      </Box>
    </>
  );
};

export default LeftNav;
