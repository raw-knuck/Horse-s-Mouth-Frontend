import React from "react";
import styling from "../styles/componentstyle/ApplicantDash";
import { Avatar, Typography, } from "@material-ui/core";
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import ApplicationDash from "./ApplicationDash";
import IconButton from '@material-ui/core/IconButton';
import profile from "../assets/images/avatar.png";
import DescriptionIcon from '@material-ui/icons/Description';
import FacebookIcon from '@material-ui/icons/Facebook';
import MailIcon from '@material-ui/icons/Mail';
import CancelRoundedIcon from '@material-ui/icons/CancelRounded';
import CheckCircleRoundedIcon from '@material-ui/icons/CheckCircleRounded';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';

const ApplicantDash = (props) => {
  const classes = styling();
  const closeapplication = () => {
    props.details.setapplicationopen(true);
    <ApplicationDash />;
  };
  return (
    <>
      <div className="navigation"></div>
      <div className={classes.details}>
        <div className={classes.topnav}>
              <IconButton color="primary" aria-label="linkedin id" component="span">
                  <ChevronLeftIcon style={{backgroundColor:"#6e3cbc",color:"#ffffff",borderRadius:"30px",fontSize:"2.5rem",marginRight:"65vw"}} onClick={closeapplication}/>
              </IconButton>
              <IconButton color="primary" aria-label="linkedin id" component="span">
                  <CancelRoundedIcon style={{fontSize:"2.5rem"}} style={{backgroundColor:"red",color:"white",borderRadius:"30px",fontSize:"2.5rem"}}/>
              </IconButton>
              <IconButton color="primary" aria-label="linkedin id" component="span">
                  <CheckCircleRoundedIcon style={{backgroundColor:"green",color:"white",borderRadius:"30px",fontSize:"2.5rem"}}/>
              </IconButton>
        </div>
        <Avatar alt="Remy Sharp" src={profile} className={classes.avatar} />
        <div className={classes.about}>
          <Typography variant="h3" style={{ margin: "12px 20px" }}>
            <b>Shaan Das</b>
          </Typography>
          <Typography variant="h6" style={{ textAlign: "center" }}>
            <cite>
              <q>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure
                doloribus magni mollitia quae vitae tempora doloremque ipsa
                dolor dicta et. Natus, recusandae, aliquid quam officiis,
                distinctio laudantium porro nobis voluptate voluptatibus velit
                blanditiis excepturi voluptatem ab unde eos obcaecati? Nesciunt
                sequi ut, officia ea reiciendis ipsam maiores deleniti eum quod?
              </q>
            </cite>
          </Typography>
        </div>
        <div className={classes.general}>
          <div className={classes.segments}>
            <Typography variant="h6">
              <b>Campus Preference:</b>
            </Typography>
            <Typography variant="h6" style={{ paddingLeft: "10px" }}>
              urban
            </Typography>
          </div>
          <div className={classes.segments}>
            <Typography variant="h6">
              <b>Status:</b>
            </Typography>
            <Typography variant="h6" style={{ paddingLeft: "10px" }}>
              alumni
            </Typography>
          </div>
          <div className={classes.segments}>
            <Typography variant="h6">
              <b>Degree:</b>
            </Typography>
            <Typography variant="h6" style={{ paddingLeft: "10px" }}>
            bachelors
            </Typography>
          </div>
          <div className={classes.segments}>
            <Typography variant="h6">
              <b>Major:</b>
            </Typography>
            <Typography variant="h6" style={{ paddingLeft: "10px" }}>
            stem
            </Typography>
          </div>
          <div className={classes.segments}>
            <Typography variant="h6">
              <b>GPA:</b>
            </Typography>
            <Typography variant="h6" style={{ paddingLeft: "10px" }}>
              N/A
            </Typography>
          </div>
          <div className={classes.segments}>
            <Typography variant="h6">
              <b>GMAT:</b>
            </Typography>
            <Typography variant="h6" style={{ paddingLeft: "10px" }}>
              N/A
            </Typography>
          </div>
          <div className={classes.segments}>
            <Typography variant="h6">
              <b>SAT:</b>
            </Typography>
            <Typography variant="h6" style={{ paddingLeft: "10px" }}>
              N/A
            </Typography>
          </div>
          <div className={classes.segments}>
            <Typography variant="h6">
              <b>Scholarship:</b>
            </Typography>
            <Typography variant="h6" style={{ paddingLeft: "10px" }}>
              Yes
            </Typography>
          </div>
          <div className={classes.segments}>
            <Typography variant="h6">
              <b>Place of Stay:</b>
            </Typography>
            <Typography variant="h6" style={{ paddingLeft: "10px" }}>
              ofcampus
            </Typography>
          </div>
        </div>
        <hr style={{width:"73vw",height:"0.3vh",backgroundColor:"#ffffff"}}/>
        <div className={classes.segments} style={{width:"70vw",marginBottom:"5px"}}>
            <Typography variant="h6">
              <b>Specialization:</b>
            </Typography>
            <Typography variant="h6" style={{ paddingLeft: "10px" }}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam, totam eos veritatis dolore iure doloribus ullam laudantium nobis labore beatae.
            </Typography>
          </div>
        <div className={classes.segments} style={{width:"40vw",marginBottom:"5px"}}>
            <Typography variant="h6">
              <b>Previous Institute:</b>
            </Typography>
            <Typography variant="h6" style={{ paddingLeft: "10px" }}>
              Lorem ipsum dolor,
            </Typography>
          </div>
        <div className={classes.segments} style={{width:"26vw",marginBottom:"5px"}}>
            <Typography variant="h6">
              <b>Year of Graduation:</b>
            </Typography>
            <Typography variant="h6" style={{ paddingLeft: "10px" }}>
              26th October 2022
            </Typography>
          </div>
        <div className={classes.segments} style={{width:"33vw",marginBottom:"5px"}}>
            <Typography variant="h6">
              <b>Currency: </b>
            </Typography>
            <Typography variant="h6" style={{ paddingLeft: "10px" }}>
            philippine peso (php)
            </Typography>
          </div>
        <div className={classes.segments} style={{width:"33vw",marginBottom:"5px"}}>
            <Typography variant="h6">
              <b>Course Name: </b>
            </Typography>
            <Typography variant="h6" style={{ paddingLeft: "10px" }}>
             bba llb
            </Typography>
          </div>
        <div className={classes.segments} style={{width:"33vw",marginBottom:"5px"}}>
            <Typography variant="h6">
              <b>Country of study: </b>
            </Typography>
            <Typography variant="h6" style={{ paddingLeft: "10px" }}>
              india
            </Typography>
          </div>
        <div className={classes.segments} style={{width:"33vw",marginBottom:"5px"}}>
            <Typography variant="h6">
              <b>Country of Origin: </b>
            </Typography>
            <Typography variant="h6" style={{ paddingLeft: "10px" }}>
              China
            </Typography>
          </div>
        <div className={classes.segments} style={{width:"fit-content",marginBottom:"5px"}}>
            <Typography variant="h6" style={{paddingRight:"10px"}}>
              <b>Languages:</b>
            </Typography>
            <Typography variant="h6" className={classes.languages}>
              Bengali
            </Typography>
            <Typography variant="h6" className={classes.languages}>
              Hindi
            </Typography>
            <Typography variant="h6" className={classes.languages}>
              English
            </Typography>
          </div>
        <div className={classes.segments} style={{width:"fit-content",marginBottom:"5px"}}>
            <Typography variant="h6" style={{paddingRight:"10px"}}>
              <b>Interests:</b>
            </Typography>
            <Typography variant="h6" className={classes.languages}>
            Interest1
            </Typography>
            <Typography variant="h6" className={classes.languages}>
            Interest2
            </Typography>
            <Typography variant="h6" className={classes.languages}>
            Interest3
            </Typography>
          </div>
          <div className={classes.segments} style={{width:"33vw",marginBottom:"5px",alignItems:"center",padding:"0px 15px"}}>
            <Typography variant="h6">
              <b>Links: </b>
            </Typography>
            <a href="https://linkedin.com/" target="_blank"><IconButton color="primary" aria-label="linkedin id" component="span">
                  <LinkedInIcon style={{fontSize:"2.5rem"}} className={classes.icons}/>
              </IconButton>
            </a>
            <a href="https://linkedin.com/" target="_blank"><IconButton color="primary" aria-label="linkedin id" component="span">
                  <DescriptionIcon style={{fontSize:"2.5rem"}} className={classes.icons}/>
              </IconButton>
            </a>
            <a href="https://linkedin.com/" target="_blank"><IconButton color="primary" aria-label="linkedin id" component="span">
                  <FacebookIcon style={{fontSize:"2.5rem"}} className={classes.icons}/>
              </IconButton>
            </a>
            <a href="https://linkedin.com/" target="_blank"><IconButton color="primary" aria-label="linkedin id" component="span">
                  <MailIcon style={{fontSize:"2.5rem"}} className={classes.icons}/>
              </IconButton>
            </a>
          </div>
      </div>
    </>
  );
};

export default ApplicantDash;
