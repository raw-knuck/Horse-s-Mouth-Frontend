import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  contain: {
    backgroundColor: "#bb9ee6",
    [theme.breakpoints.down("sm")]: {
      width: "100vw",
      overflow: "scroll",
      height: "100vh",
    },
    overflow: "hidden",
  },
  details: {
    display: "flex",
    height: "100%",
    width: "100%",
  },
  about: {
    display: "flex",
    flexDirection: "column",
    margin:"30px 0px"
  },
  avatar: {
    height: "200px !important",
    width: "200px !important",
    backgroundColor: "#ffffff",
    border: "10px solid #bb9ee6",
    margin:"30px 30px"
  },
}));

export default useStyles;
