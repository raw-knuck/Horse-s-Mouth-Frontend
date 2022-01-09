import { Box, IconButton, Typography } from '@material-ui/core';
import React from 'react'
import styling from '../styles/componentstyle/AppointmentDash'
import ImportExportIcon from '@material-ui/icons/ImportExport';

const PaymentDash = () => {
    const classes=styling();


    let data=[
        {
            id:1,
            name:"Student1",
        },
    ]

    const deactivate = (id) =>{
        console.log(id)
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
                            <IconButton><ImportExportIcon onClick={deactivate.bind(this, ele.id)}/></IconButton>
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
