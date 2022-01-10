import { Box, IconButton, Typography } from '@material-ui/core';
import React,{ useState } from 'react'
import styling from '../styles/componentstyle/UniversityDash'
import PageviewIcon from '@material-ui/icons/Pageview';
import Spinner from '../styles/spinner/Spinner.gif'

const UniversityDash = () => {
    const classes=styling();


    let data=[
        {
            id:1,
            name:"University1",
            searches:50
        },
        {
            id:1,
            name:"University2",
            searches:100
        },
        {
            id:1,
            name:"University3",
            searches:30
        },
        {
            id:1,
            name:"University4",
            searches:200
        },
        {
            id:1,
            name:"University5",
            searches:0
        },
    ]

    const [loading, setloading] = useState(true)
    setTimeout(() => {
        setloading(false)
    }, 2000);
    data.sort((a,b)=>{return b.searches-a.searches})
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
                    data.map((ele)=>{
                        return (<div className={classes.item}>
                            <Typography className={classes.title}>{ele.name}</Typography>
                            <div className={classes.icons}>
                            <Typography className={classes.title}>{ele.searches}</Typography>
                            <IconButton><PageviewIcon /></IconButton>
                            </div>
                            </div>)
                    })
                }
                </div>
                    

            </Box>
        </>
    )
}

export default UniversityDash
