import { Box, Button, IconButton, Typography } from '@material-ui/core';
import React,{ useEffect, useState } from 'react'
import styling from '../styles/componentstyle/UniversityDash'
import PageviewIcon from '@material-ui/icons/Pageview';
import Spinner from '../styles/spinner/Spinner.gif'
import cred from '../utils/creds.json'
import axios from 'axios';
import { signOut } from "firebase/auth";
import { authentication } from "../utils/init-firebase";

const UniversityDash = () => {
    const classes=styling();

    const url=cred.api_url;
    const usertoken=localStorage.getItem("token");

    const [loading, setloading] = useState(true)
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

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
                    <Button size="large" variant="contained">Create</Button>
                </div>
                {
                    (loading)?
                    <div style={{backgroundImage:`url(${Spinner})`,backgroundPosition: "center",position: "fixed",zIndex: 1,backgroundRepeat: "no-repeat",width: "100%",height: "100vh"}}></div>:
                    (data===[])?
                    data.map((ele)=>{
                        return (<div className={classes.item}>
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
