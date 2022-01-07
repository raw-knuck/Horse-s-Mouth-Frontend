import { makeStyles } from "@material-ui/styles";
import theme from '../themes/Main'

const useStyles=makeStyles((theme)=>({
    root:{
        primary:{
            backgroundColor:theme.root.primary.main
        }
    },
    box:{
        backgroundColor:theme.root.primary.light,
        [theme.breakpoints.down('sm')]: {
            width:'100vw'
          },
    },
    icon:{
        fontSize:147,
        color:theme.root.primary.main,
    },
    form:{
        '& .MuiTextField-root': {
            // margin: theme.spacing(7),
            width: '90%',
        },
        '& .MuiButton-root':
        {
            // margin: theme.spacing(7),
            width: '90%'
        },
        '& .MuiOutlinedInput-input':{
            padding:theme.spacing(4.3,50),
            [theme.breakpoints.down('sm')]:{
                padding: theme.spacing(4.3,30)
            },
        },
        padding: theme.spacing(21,16),
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center",
        [theme.breakpoints.down('sm')]:{
            padding: theme.spacing(0,0)
        },
    }
}))

export default useStyles