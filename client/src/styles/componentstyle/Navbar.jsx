import { makeStyles } from "@material-ui/styles";
import { alpha } from '@material-ui/core/styles';

const useStyles=makeStyles((theme)=>({
  root:{
    primary:{
        backgroundColor:theme.root.primary.main
    }
    },
    bar:{
      backgroundColor:'#6E3CBC !important',
      justifyContent:'center',
      height:"10vh",
      display:"flex",
      flexDirection:"row !important",
      alignItems:"center"
    },
    title:
    {
      color:theme.root.primary.light,
      margin:"0px 40px 0px 0px !important"
    },
    search:
    {
      backgroundColor: alpha(theme.palette.common.white, 0.15),
      '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
      },
      width: '60vw',
      height:"60%",
      display:"flex",
      alignItems:"center"
    },
    searchIcon:{
      marginLeft:"22px"
    },
    inputRoot:{
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      width:"100%",
      color:"#FFFFFF"
    },
    account:{
      width:"25vw",
      display:"flex",
      justifyContent:"flex-end !important"
    },
    menuButton:{

    }
}))

export default useStyles