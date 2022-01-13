import { Box, Button, IconButton, TextField, Typography } from '@material-ui/core';
import React,{ useEffect, useState } from 'react'
import styling from '../styles/componentstyle/UniversityDash'
import PageviewIcon from '@material-ui/icons/Pageview';
import Spinner from '../styles/spinner/Spinner.gif'
import cred from '../utils/creds.json'
import axios from 'axios';
import { signOut } from "firebase/auth";
import { authentication } from "../utils/init-firebase";
import { Alert } from '@material-ui/lab';

const UniversityDash = () => {
    const classes=styling();

    const url=cred.api_url;
    const usertoken=localStorage.getItem("token");

    const [loading, setloading] = useState(true)
    const [senduni, setsenduni] = useState(false)
    const [err, seterr] = useState(false)
    const [country, setcountry] = useState("")
    const [uniname, setuniname] = useState("")


    let [data, setdata] = useState([])

    useEffect(()=>{
        axios.get(`${url}/university`,{
            headers: {
              'Authorization': `Bearer ${usertoken}`,
              'Content-Type': 'application/json'
            }})
        .then(response => {
            setdata(response.data.universities);
            if(data!==[])
            {
                datasort();
            }
            setloading(false)
    })
    .catch(function(error)
    {
        if(error.response.status===401)
          {
              signOut(authentication).then()
          }
    })
    if(createuni)
    {
    axios.post(`${url}/university`,{
            headers: {
              'Authorization': `Bearer ${usertoken}`,
              'Content-Type': 'application/json'
            },
        data:{
            "name":uniname,
            "country":country
        }})
        .then(response => {
            setdata(response);
    })
    .catch(function(error)
    {
        if(error.response.status===401)
          {
              signOut(authentication).then()
          }
    })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[senduni])

    // async function getUniversity() {
    //     // console.log(usertoken)
    //     try {
    //       const response = await axios.get(`${url}/university`,{
    //           headers: {
    //             'Authorization': `Bearer ${usertoken}`,
    //             'Content-Type': 'application/json'
    //           }
    //       });
    //     //   console.log(response)
    //       setdata(response.data.universities);
    //       if(data!==[])
    //       {
    //           datasort();
    //       }
    //       setloading(false)
    //     } catch (error) {
    //       if(error.response.status===401)
    //       {
    //           await signOut(authentication)
    //       }
    //     }
    //   }


    
    const [createuni, setcreateuni] = useState(false)
    // getUniversity()
    const datasort = () =>{
        data.sort((a,b)=>{return b.searches-a.searches})
    }
    return (
        <>
            <Box 
                className={classes.contain}
                width="80vw"
                height="90vh"
                display="flex"
                justifyContent="center"
                alignItems="center"
                >
                <div className={classes.details}>
                <div className={classes.createbutton}>
                    <Button size="large" variant="contained" onClick={()=>{(createuni)?setcreateuni(false):setcreateuni(true)}}>Create</Button>
                </div>
                {
                    (createuni)?
                    <div className={classes.createuni}>
                        <form onSubmit={(event)=>
                        {   event.preventDefault();
                            if(uniname!=="" && country!==""){
                                (senduni)?
                                setsenduni(false)
                                :setsenduni(true)
                            }
                            else
                            {
                                seterr(true)
                            }
                        }} className={classes.form}>
                            <TextField name='uniname' error={(err)?true:false} onChange={(event)=>{setuniname(event.target.value)}} value={uniname} label="University Name" variant="outlined" required={true}/>
                            <br/>
                            <TextField name='country' error={(err)?true:false} onChange={(event)=>{setcountry(event.target.value)}} value={country} label="Country" variant="outlined" required={true} />
                            <br/>
                            <Button variant="contained" color="primary" type='submit' size="large" style={{backgroundColor:"#6E3CBC"}}>Submit</Button>
                        </form>
                    {(err)?<Alert severity="error">Please check your email address or password!</Alert>:null}
                    </div>:null
                }
                {
                    (loading)?
                    <div style={{backgroundImage:`url(${Spinner})`,backgroundPosition: "center",position: "fixed",zIndex: 1,backgroundRepeat: "no-repeat",width: "100%",height: "100vh"}}></div>:
                    (data===[])?
                    data.map((ele)=>{
                        return (
                        <div className={classes.item}>
                            <Typography className={classes.title}>{ele.name}</Typography>
                            <div className={classes.icons}>
                            <Typography className={classes.title}>{ele.searchCount}</Typography>
                            <IconButton><PageviewIcon /></IconButton>
                            </div>
                        </div>)
                    }):
                    <h1 className={classes.nouni}>No universities registered</h1>
                }
                </div>
                    

            </Box>
        </>
    )
}

export default UniversityDash
