import React from 'react'
import styling from '../styles/componentstyle/ApplicantDash'
import { IconButton, Avatar, Typography } from '@material-ui/core';
import FindInPageIcon from '@material-ui/icons/FindInPage';
import ApplicationDash from './ApplicationDash';
import profile from '../assets/images/avatar.png'

const ApplicantDash = (props) => {
  const classes=styling();
  const closeapplication = () =>{
    props.details.setapplicationopen(true);
    <ApplicationDash/>
}
  return (
    <>
        <div className="navigation"></div>
        <div className={classes.details}>
        <Avatar alt="Remy Sharp" src={profile} className={classes.avatar}/>
        <div className={classes.about}>
        <Typography variant="h3" style={{margin:"12px 20px"}}><b>Shaan Das</b></Typography>
        <Typography variant="h6" style={{textAlign:"center"}}><cite><q>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure doloribus magni mollitia quae vitae tempora doloremque ipsa dolor dicta et. Natus, recusandae, aliquid quam officiis, distinctio laudantium porro nobis voluptate voluptatibus velit blanditiis excepturi voluptatem ab unde eos obcaecati? Nesciunt sequi ut, officia ea reiciendis ipsam maiores deleniti eum quod?</q></cite></Typography>
        </div>
        </div>
    </>
  )
}

export default ApplicantDash