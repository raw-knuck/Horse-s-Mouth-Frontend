import { Box, IconButton, Typography } from '@material-ui/core';
import React,{useState} from 'react'
import styling from '../styles/componentstyle/StudentDash'
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import Spinner from '../styles/spinner/Spinner.gif'

const PaymentDash = () => {
    const classes=styling();


    let data=[
        {
            id:1,
            name:"Student1",
        },
        {
            id:1,
            name:"Student2",
        },
        {
            id:1,
            name:"Student3",
        },
        {
            id:1,
            name:"Student4",
        },
        {
            id:1,
            name:"Student5",
        },
    ]
    const [loading, setloading] = useState(true)
    setTimeout(() => {
        setloading(false)
    }, 2000);

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
                {(loading)?
                <div style={{backgroundImage:`url(${Spinner})`,backgroundPosition: "center",position: "fixed",zIndex: 1,backgroundRepeat: "no-repeat",width: "100%",height: "100vh"}}></div>:
                    data.map((ele)=>{
                        return (<div className={classes.item}>
                            <Typography className={classes.title}>{ele.name}</Typography>
                            <div className={classes.icons}>
                            <IconButton><DeleteForeverIcon onClick={deactivate.bind(this, ele.id)}/></IconButton>
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
