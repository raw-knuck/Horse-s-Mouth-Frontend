import { Box } from '@material-ui/core'
import React from 'react'
import styling from '../styles/pagestyles/Register'


const Register = () => {
    const classes=styling();
    
    return (
        <>
            <Box
                display="flex"
                flexDirection="row"
                width="100vw"
                height="100vh"
                className={classes.box}
                style={{overflow:"hidden"}}
            >
            
            </Box>
        </>
    )
}

export default Register
