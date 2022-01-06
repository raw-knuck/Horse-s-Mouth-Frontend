import { onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import React,{useState} from 'react'
import { auth } from '../utils/init-firebase';


const Login = () => {


    //states
    const [email, setemail] = useState("")
    const [pass, setpass] = useState("")
    const [user, setuser] = useState({})


    //submitting form
    const submitlogin = async(event) => {
        event.preventDefault();
        try {
            const user= await signInWithEmailAndPassword(auth,email,pass)
        } catch (error) {
            console.log(error);
        }
    }
    
    onAuthStateChanged(auth,(currentUser)=>{
        setuser(currentUser)
    })

    const signing_out = async() =>{
        await signOut(auth)
    }
    return (
        <>
            <form onSubmit={submitlogin}>
                <input type="text" placeholder='email address' name='email' onChange={(event)=>{setemail(event.target.value)}} value={email}/>
                <br />
                <input type="text" placeholder='password' name='password' onChange={(event)=>{setpass(event.target.value)}} value={pass}/>
                <br />
                <button type="submit">Login</button>
            </form>
            <h4>{user?user.email:""}</h4>
            <button onClick={signing_out}>Sign Out</button>
        </>
    )
}

export default Login
