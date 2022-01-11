import { Box, Button, Checkbox, FormControlLabel, TextField, Typography } from '@material-ui/core'
import React, { useState } from 'react'
import styling from '../styles/pagestyles/MentorReg'


const Register = () => {
    const classes=styling();
    const [curredu, setcurredu] = useState("");
    const [prevedu, setprevedu] = useState("");
    const [campus, setcampus] = useState("");
    const [pref1, setpref1] = useState("");
    const [pref2, setpref2] = useState("");
    const [pref3, setpref3] = useState("");
    const [lang, setlang] = useState("");
    const [bio, setbio] = useState("");
    const [linkedin, setlinkedin] = useState("")
    const [checked, setchecked] = useState(false)

    const handleChange = () =>{
        (checked)?
        setchecked(false)
        :
        setchecked(true)
    }
    
    return (
        <>
            <div className={classes.box}>
            <Typography variant="h4" style={{color:"#6E3CBC",fontWeight:"700",margin:"10px 0px"}} className={classes.heading}>Mentor sign up</Typography>
            <Typography variant="h6" style={{marginBottom:"16px"}} className={classes.subheading}>please enter your details below to sign up as a mentor</Typography>
            <div className={classes.innerbox}>
                <label htmlFor="curredu" className={classes.title}> UNIVERSITY</label>
                <input type="text" name="curredu" className={classes.sminput} onChange={(event)=>{setcurredu(event.target.value)}} value={curredu} required={true}/>
                <br />
                <label htmlFor="curredu" className={classes.title}> COURSE NAME</label>
                <input type="text" name="curredu" className={classes.sminput} onChange={(event)=>{setprevedu(event.target.value)}} value={prevedu} required={true}/>
                <br />
                <label htmlFor="curredu" className={classes.title}> DEGREE NAME</label>
                <input type="text" name="curredu" className={classes.sminput} onChange={(event)=>{setcampus(event.target.value)}} value={campus} required={true}/>
                <br />
                <label htmlFor="curredu" className={classes.title}> AREA OF STUDY</label>
                <input type="text" name="curredu" className={classes.sminput} onChange={(event)=>{setpref1(event.target.value)}} value={pref1} required={true}/>
                <br />
                <label htmlFor="curredu" className={classes.title}> UNIVERSITY RELATION</label>
                <input type="text" name="curredu" className={classes.sminput} onChange={(event)=>{setpref2(event.target.value)}} value={pref2} required={true}/>
                <br />
                <label htmlFor="curredu" className={classes.title}> UNIVERSITY EMAIL ID (if current student)</label>
                <input type="text" name="curredu" className={classes.sminput} onChange={(event)=>{setpref3(event.target.value)}} value={pref3} required={true}/>
                <br />
                <label htmlFor="curredu" className={classes.title}> YEAR OF GRADUATION</label>
                <input type="text" name="curredu" className={classes.sminput} onChange={(event)=>{setlang(event.target.value)}} value={lang} required={true}/>
                <br />
                <label htmlFor="curredu" className={classes.title}> COUNTRY OF STUDY</label>
                <input type="text" name="curredu" className={classes.sminput} onChange={(event)=>{setlang(event.target.value)}} value={lang} required={true}/>
                <br />
                <label htmlFor="curredu" className={classes.title}> PREVIOUS EDUCATIONAL INSTITUTE</label>
                <input type="text" name="curredu" className={classes.sminput} onChange={(event)=>{setlang(event.target.value)}} value={lang} required={true}/>
                <br />
                <label htmlFor="curredu" className={classes.title}> SPECIALIZATION</label>
                <input type="text" name="curredu" className={classes.sminput} onChange={(event)=>{setlang(event.target.value)}} value={lang} required={true}/>
                <br />
                <FormControlLabel
                    control={<Checkbox checked={checked} onChange={handleChange} name="checkedA" style={{color:"#6E3CBC"}}/>} required={true}
                    label="Ever had an on campus job ?"
                />
                <FormControlLabel
                    control={<Checkbox checked={checked} onChange={handleChange} name="checkedA" style={{color:"#6E3CBC"}}/>} required={true}
                    label="Do you hold a scholarship ?"
                />
                <label htmlFor="curredu" className={classes.title}> PLACE OF STAY</label>
                <input type="text" name="curredu" className={classes.sminput} onChange={(event)=>{setlang(event.target.value)}} value={lang} required={true}/>
                <br />
                <label htmlFor="curredu" className={classes.title}> PRIMARY AND SECONDARY LANGUAGES</label>
                <input type="text" name="curredu" className={classes.sminput} onChange={(event)=>{setlang(event.target.value)}} value={lang} required={true}/>
                <br />
                <label htmlFor="curredu" className={classes.title}> BIO</label>
                <textarea name="curredu" id="" cols="30" rows="10" className={classes.biggertext} onChange={(event)=>{setbio(event.target.value)}} value={bio} required={true}></textarea>
                <br />
                <label htmlFor="curredu" className={classes.title}> CURRENT GPA</label>
                <input type="text" name="curredu" className={classes.sminput} onChange={(event)=>{setchecked(event.target.value)}} value={linkedin} required={true}/>
                <br />
                <label htmlFor="curredu" className={classes.title}> GMAT SCORE (FOR MASTER’S DEGREES)</label>
                <input type="text" name="curredu" className={classes.sminput} onChange={(event)=>{setlang(event.target.value)}} value={lang} required={true}/>
                <br />
                <label htmlFor="curredu" className={classes.title}> SAT SCORE (FOR BACHELOR’S DEGREES)</label>
                <input type="text" name="curredu" className={classes.sminput} onChange={(event)=>{setlang(event.target.value)}} value={lang} required={true}/>
                <br />
                <Button variant="contained" className={classes.button}>Secondary</Button>
            </div>
            </div>
        </>
    )
}

export default Register
