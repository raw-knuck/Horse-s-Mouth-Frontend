import { Box } from '@material-ui/core';
import React from 'react'
import styling from '../styles/componentstyle/PaymentDash'
import { DataGrid } from '@material-ui/data-grid'

const PaymentDash = () => {
    const classes=styling();
     
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
                    <div className={classes.item}></div>
                </div>
            </Box>
        </>
    )
}

export default PaymentDash
