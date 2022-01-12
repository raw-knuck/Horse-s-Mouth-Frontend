import { Box, IconButton, Typography } from '@material-ui/core';
import React, { useState } from 'react'
import styling from '../styles/componentstyle/PaymentDash'
import CheckCircleRoundedIcon from '@material-ui/icons/CheckCircleRounded';
import { IsoRounded } from '@material-ui/icons';
import Spinner from '../styles/spinner/Spinner.gif'

const PaymentDash = () => {
    const classes=styling();

    let data=[
        {
            name:"Subhash",
            cost:"200"
        },
        {
            name:"Subhash",
            cost:"200"
        },
        {
            name:"Subhash",
            cost:"200"
        },
        {
            name:"Subhash",
            cost:"200"
        },
        {
            name:"Subhash",
            cost:"200"
        },
        {
            name:"Subhash",
            cost:"200"
        },
        {
            name:"Subhash",
            cost:"200"
        },
        {
            name:"Subhash",
            cost:"200"
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
                {(loading)?
                    <div style={{backgroundImage:`url(${Spinner})`,backgroundPosition: "center",position: "fixed",zIndex: 1,backgroundRepeat: "no-repeat",width: "100%",height: "100vh"}}></div>:
                    (
                    data.map((ele)=>{
                        return (<div className={classes.item}>
                            <Typography className={classes.title}>{ele.name}</Typography>
                            <div className={classes.icons}>
                            <Typography className={classes.cost}>Rs.{ele.cost}</Typography>
                            <IconButton><CheckCircleRoundedIcon/></IconButton>
                            </div>
                        </div>)
                    })
                    )
                }
                </div>
                    

            </Box>
        </>
    )
}

export default PaymentDash
