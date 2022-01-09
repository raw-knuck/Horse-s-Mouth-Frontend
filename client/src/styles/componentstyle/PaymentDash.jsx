import { makeStyles } from "@material-ui/styles";

const useStyles=makeStyles((theme)=>({
    contain:{
        backgroundColor:"#e6e6e6",
        [theme.breakpoints.down('sm')]: {
            width:"100vw",
            overflow:"scroll",
            height:"100vh"
        },
    },
    details:{
        display:"flex",
        flexWrap:"wrap",
        width:"78vw",
        height:"86vh",
        borderRadius: "10px",
        backgroundColor:theme.root.primary.light,
        justifyContent:"space-evenly",
        alignItems:"center",
        [theme.breakpoints.down('sm')]: {
            overflow:"scroll"
        },
    },
    item:{
        width:"74vw",
        height:"14vh",
        backgroundColor:theme.root.primary.main,
        borderRadius: "10px",
    }
}))

export default useStyles