import React, { useState } from 'react'
import Button from '@material-ui/core/Button';
import { getAuth, onAuthStateChanged,signOut} from 'firebase/auth';
import { Navigate,useNavigate } from "react-router-dom"
import { authentication } from '../utils/init-firebase';

const Home = () => {
    let [user, setuser] = useState({})

    const signing_out = async() =>{
        console.log("called the function")
        setuser(await signOut(authentication));
        console.log(user);
    }
    const auth = getAuth();
    const history = useNavigate();

    onAuthStateChanged(auth, (user) => {
    console.log(user)
    if (!user) {
        return history("/login");
    }
    else
    {
        user=this.user
    }
    });


    return (
        <>
            <Button variant="contained">
                Success
            </Button>
            {user?<button onClick={signing_out}>Sign Out</button>:null}
        </>
    )
}

export default Home
