import { Box, IconButton, Typography } from '@material-ui/core';
import React, { useState } from 'react'
import styling from '../styles/componentstyle/MentorDash'
import MoneyOffIcon from '@material-ui/icons/MoneyOff';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import CheckCircleRoundedIcon from '@material-ui/icons/CheckCircleRounded';
import InputBase from "@material-ui/core/InputBase";

const PaymentDash = () => {
    const classes=styling();

    const [opentext, setopentext] = useState(false);
    let data=[
        {
            id:1,
            name:"Mentor1",
        },
        {
            id:2,
            name:"Mentor2",
        },
        {
            id:3,
            name:"Mentor3",
        },
        {
            id:4,
            name:"Mentor4",
        },
        {
            id:5,
            name:"Mentor5",
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
                            {(opentext)?
                            <div className={classes.textareas}>
                                <InputBase
                                placeholder="Reason"
                                classes={{
                                    root: classes.inputRoot,
                                }}
                                inputProps={{ 'aria-label': 'search' }}
                                />
                                <div className={classes.submitting}>
                                    <CheckCircleRoundedIcon/>
                                </div>
                        </div>
                        :null}
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
