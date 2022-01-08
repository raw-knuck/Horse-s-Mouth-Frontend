import React,{ useState } from 'react'
import styling from "../styles/componentstyle/Navbar";
import { authentication } from "../utils/init-firebase";
import { signOut } from "firebase/auth";

//material ui components
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import Badge from "@material-ui/core/Badge";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import SearchIcon from "@material-ui/icons/Search";
import AccountCircle from "@material-ui/icons/AccountCircle";
import NotificationsIcon from "@material-ui/icons/Notifications";
import MoreIcon from "@material-ui/icons/MoreVert";

const Navbar = () => {
  
  //states
  const [user, setuser] = useState({})
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };


  //signout functionality calling the signout of firebase and setting user to that new json
  const signing_out = async () => {
    console.log("called the function");
    setuser(await signOut(authentication));
    console.log(user);
  };
  const classes = styling();

  return(
    <>
      <AppBar position='static' width="100vw" className={classes.bar}>
          <Typography variant="h6" className={classes.title}>
            Admin Panel
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
                <SearchIcon/>
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
          <div className={classes.account}>
            <IconButton aria-label="show 17 new notifications" color="inherit">
              <Badge badgeContent={17} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton
            edge="end"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer">
              <AccountCircle onClick={handleClick}/>
            </IconButton>
          </div>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
            style={{marginTop:"40px",padding:"30px 30px"}}
          >
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>Logout</MenuItem>
          </Menu>
      </AppBar>
    </>
  )
}

export default Navbar