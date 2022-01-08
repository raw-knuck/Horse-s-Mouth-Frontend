import React from "react";
import { onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import AppBar from "../components/Navbar";
import firebasetoken from "../contexts/firebaseauth/firebasetoken";
import { authentication } from "../utils/init-firebase";

//all styling imports
import Box from "@material-ui/core/Box";
import styling from "../styles/pagestyles/Home";

const Home = () => {
  //all variables
  const history = useNavigate();

  //function that gets called when any change on user happens by firebase
  onAuthStateChanged(authentication,(user) => {
    if (!user) {
      history("/login");
      return null;
    } else {
      console.log(user)
  }
  })
  //AppBar states and functions
  const classes = styling();
  return (
    <>
      <Box
        display="flex"
        flexDirection="row"
        width="100vw"
        height="100vh"
        className={classes.box}
        style={{overflow:"hidden"}}
      >
      <AppBar/>
      </Box>
      {/* <Firebasestate token={user.accessToken}/> */}
      {/* {user ? <button onClick={signing_out}>Sign Out</button> : null}
      <h4>{token}</h4> */}

    </>
  );
};

export default Home;
