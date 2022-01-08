import { makeStyles } from "@material-ui/styles";

const useStyles=makeStyles((theme)=>({
    leftbar:{
        backgroundColor:theme.root.primary.main,
        [theme.breakpoints.down('sm')]: {
            display:"none"
        },
    },
}))

export default useStyles