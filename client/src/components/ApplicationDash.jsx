import { Box, IconButton, Typography } from '@material-ui/core';
import React, { useState } from 'react'
import styling from '../styles/componentstyle/ApplicationDash'
import FindInPageIcon from '@material-ui/icons/FindInPage';
import Spinner from '../styles/spinner/Spinner.gif'

const ApplicationDash = () => {
    const classes=styling();

    const [name, setname] = useState("");
    const [university, setuniversity] = useState("");
    const [wallet, setwallet] = useState(0);
    const [appointments, setappointments] = useState(0)
    const [applicationopen, setapplicationopen] = useState(true)


    
    const showapplication = (details) =>{
        setname(details.name);
        setuniversity(details.university);
        setwallet(details.wallet);
        setappointments(details.appointments);
        (applicationopen)?setapplicationopen(false):setapplicationopen(true)
    }
    const closeapplication = () =>{
        (applicationopen)?setapplicationopen(false):setapplicationopen(true)
    }
    let data=[
        {
            id:1,
            name:"Application1",
            university:"university1",
            wallet:12,
            appointments:20
        },
        {
            id:1,
            name:"Application1",
            university:"university1",
            wallet:12,
            appointments:20
        },
        {
            id:1,
            name:"Application1",
            university:"university1",
            wallet:12,
            appointments:20
        },
        {
            id:1,
            name:"Application1",
            university:"university1",
            wallet:12,
            appointments:20
        },
        {
            id:1,
            name:"Application1",
            university:"university1",
            wallet:12,
            appointments:20
        },
    ]

    const [loading, setloading] = useState(true)
    setTimeout(() => {
        setloading(false)
    }, 2000);
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
                {
                    (loading)?
                    <div style={{backgroundImage:`url(${Spinner})`,backgroundPosition: "center",position: "fixed",zIndex: 1,backgroundRepeat: "no-repeat",width: "100%",height: "100vh"}}></div>:
                    (applicationopen)?
                    data.map((ele)=>{
                        return (<div className={classes.item}>
                            <Typography className={classes.title}>{ele.name}</Typography>
                            <div className={classes.icons}>
                            <IconButton><FindInPageIcon onClick={showapplication.bind(this, ele)}/></IconButton>
                            </div>
                            </div>)
                    })
                    :
                    <div className={classes.detail}>
                        <IconButton><FindInPageIcon onClick={closeapplication}/></IconButton>
                    </div>
                }
                </div>
                    

            </Box>
        </>
    )
}

export default ApplicationDash
