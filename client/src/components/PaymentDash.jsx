import { Box, IconButton, Typography } from '@material-ui/core';
import React from 'react'
import styling from '../styles/componentstyle/PaymentDash'
import CheckCircleRoundedIcon from '@material-ui/icons/CheckCircleRounded';

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
                    data.map((ele)=>{
                        return (<div className={classes.item}>
                            <Typography className={classes.title}>{ele.name}</Typography>
                            <div className={classes.icons}>
                            <Typography className={classes.cost}>Rs.{ele.cost}</Typography>
                            <IconButton><CheckCircleRoundedIcon/></IconButton>
                            </div>
                        </div>)
                    })
                }
                </div>
                    

            </Box>
        </>
    )
}

export default PaymentDash
