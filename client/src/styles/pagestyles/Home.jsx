import { makeStyles } from "@material-ui/styles";
import { alpha } from '@material-ui/core/styles';

const useStyles=makeStyles((theme)=>({
    root:{
        primary:{
            backgroundColor:theme.root.primary.main
        }
    },
    box:{
        backgroundColor:theme.root.primary.light,
    },
    grow: {
        flexGrow: 1,
        backgroundColor:'#FFFFFF !important',
      },
      menuButton: {
        marginRight: theme.spacing(2),
      },
      title: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
          display: 'block',
        },
      },
      search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
          backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        '&.MuiInputBase-root':{
            marginLeft: "30px !important"
        },
        marginRight: theme.spacing(2),
        marginLeft: "60px !important",
        width: '100%',
        [theme.breakpoints.up('sm')]: {
          marginLeft: theme.spacing(3),
          width: "auto",
        },
        [theme.breakpoints.up('lg')]: {
          marginLeft: theme.spacing(3),
          width: '70vw',
        },
      },
      searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },
      inputRoot: {
        color: '#FFFFFF !important',
        marginLeft: '53px',
      },
      inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
          width: '20ch',
        },
      },
      sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
          display: 'flex',
        },
      },
      sectionMobile: {
        display: 'flex',
        [theme.breakpoints.up('md')]: {
          display: 'none',
        },
      },
}))

export default useStyles