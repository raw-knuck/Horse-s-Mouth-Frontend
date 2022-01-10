import { Box } from '@material-ui/core'
import React from 'react'
import LeftNav from '../components/LeftNav'
import Navbar from '../components/Navbar'
import AppointmentDash from '../components/AppointmentDash'
import styling from '../styles/pagestyles/Appointment'


const Appointment = () => {
    const classes=styling();
    
    return (
        <>
            <Navbar/>
            <Box
                display="flex"
                flexDirection="row"
                width="100vw"
                height="90vh"
                className={classes.box}
                style={{overflow:"hidden"}}
            >
            <LeftNav/>
            <AppointmentDash/>
            </Box>
        </>
    )
}

export default Appointment
