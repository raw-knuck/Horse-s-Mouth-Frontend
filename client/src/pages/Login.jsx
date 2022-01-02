import React,{useState} from 'react'

//states
const [email, setemail] = useState("")
const [pass, setpass] = useState("")


const submitlogin = (event) => {
    preventDefault();
    
}
const Login = () => {
    return (
        <>
            <form onSubmit={submitlogin}>
                <input type="text" placeholder='email address' name='email'/>
                <input type="text" placeholder='password' name='password'/>
                <button type="submit">Login</button>
            </form>
        </>
    )
}

export default Login
