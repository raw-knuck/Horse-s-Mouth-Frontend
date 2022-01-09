import { Box, IconButton, Typography } from '@material-ui/core';
import React, { useState } from 'react'
import styling from '../styles/componentstyle/MentorDash'
import MoneyOffIcon from '@material-ui/icons/MoneyOff';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

const PaymentDash = () => {
    const classes=styling();

    const [opentext, setopentext] = useState(false);
    let data=[
        {
            id:1,
            name:"Mentor1",
            cost:"200"
        },
    ]

    const penalise= (id) =>{
        console.log(id);
        (opentext)?
        setopentext(false):setopentext(true);
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
                {
                    data.map((ele)=>{
                        return (<div className={classes.item}>
                            <Typography className={classes.title}>{ele.name}</Typography>
                            <div className={classes.icons}>
                            <IconButton><MoneyOffIcon onClick={penalise.bind(this, ele.id)}/></IconButton>
                            {(opentext)?<div className="reason">Open</div>:null}
                            <IconButton><DeleteForeverIcon/></IconButton>
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
