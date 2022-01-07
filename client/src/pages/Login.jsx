import { onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import React,{useState} from 'react'
import { Navigate } from "react-router-dom"
import { authentication } from '../utils/init-firebase';
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Box from '@material-ui/core/Box'
import styling from '../styles/pagestyles/Login'
import AccountCircleTwoToneIcon from '@material-ui/icons/AccountCircleTwoTone';
const Login = () => {


    //states
    const [email, setemail] = useState("")
    const [pass, setpass] = useState("")
    const [user, setuser] = useState({})

    //submitting form
    const submitlogin = async(event) => {
        event.preventDefault();
        try {
            const user= await signInWithEmailAndPassword(authentication,email,pass)

        } catch (error) {
            alert("User authetication failed!")
        }
    }
    
    onAuthStateChanged(authentication,(currentUser)=>{
        setuser(currentUser)
    })

    const checkValidation = () =>{
        if(user?.email)
        {
            return <Navigate to='/'/>;
        }
    }
    const classes=styling();
    return (
        <>
        {checkValidation()}
        <Box height="50%" className={classes.box} display="flex" flexDirection="column" width="50vw" justifyContent="center" alignItems="center" boxShadow={20} borderRadius={16}>
            <AccountCircleTwoToneIcon className={classes.icon}/>
            <form onSubmit={submitlogin} className={classes.form}>
                <TextField name='email' onChange={(event)=>{setemail(event.target.value)}} value={email} label="Email address" variant="outlined" required={true}/>
                <br/>
                <TextField name='password' onChange={(event)=>{setpass(event.target.value)}} value={pass} label="Password" variant="outlined" required={true} type={"password"}/>
                <br/>
                <Button variant="contained" color="primary" type='submit' size="large" style={{backgroundColor:"#6E3CBC"}}>Login</Button>
            </form>
            <h4>{user?.email}</h4>
        </Box>
        </>
    )
}

export default Login
