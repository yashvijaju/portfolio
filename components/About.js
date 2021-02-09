import React  from 'react';
import Link from 'next/link';
import { Grid, Typography, Hidden } from '@material-ui/core';
import { AttachFile } from '@material-ui/icons';
import { Fade } from 'react-reveal';

const grey = '#efefef'

const descriptor = {color: '#43b14e', fontWeight: '600'}

export default function AboutMe() {
    return(
        <div>
            <Fade bottom>
            <Grid container direction="row" style={{'padding': '10vh 2vw 5vh 2vw'}}>
                <Grid item xs={1}/>
                <Hidden smUp>
                    <Grid item xs={10} style={{backgroundColor: grey, 'borderRadius': '15px', padding: '4vh 4vw 4vh 4vw'}}>
                        <Typography variant="h6" style={{paddingBottom: '2vh', fontWeight: 'normal', color: '#43b14e'}}>
                            &#123; About Me &#125;
                        </Typography>
                        <Typography variant="caption" style={{fontWeight: 'lighter'}}>
                            void aboutMe(int argc, char *argv[]) &#123;  <br/>
                            &emsp; &emsp;> Innovator* Yashvi = new Innovator(); <br/>
                            &emsp; &emsp;> Yashvi-><span style={descriptor}>lastName</span> = Jaju; <br/> 
                            <br/>
                            &emsp; &emsp;> Yashvi-><span style={descriptor}>university</span> = University of <br/> &emsp; &emsp; Southern California '24 <br/> &emsp; &emsp; (rising sophomore, but on a gap year); <br/>
                            &emsp; &emsp;> Yashvi-><span style={descriptor}>major</span> = Computer Science <br/> &emsp; &emsp; and Business Administration; <br/>
                            &emsp; &emsp;> Yashvi-><span style={descriptor}>minor</span> = Entrepreneurship; <br/>
                            <br/>
                            &emsp; &emsp;> Yashvi-><span style={descriptor}>skills</span> = ["C++", "JavaScript", <br/> &emsp; &emsp; "React", "Next.js", "MongoDB", <br/> &emsp; &emsp; "Active Directory", "Material UI", "Git", <br/> &emsp; &emsp; "Adobe CC", "Typography"]; <br/>
                            &emsp; &emsp;> Yashvi-><span style={descriptor}>interests</span> = ["Code", "Bake", <br/> &emsp; &emsp;"Create", "Paint", "Learn", "Read", <br/> &emsp; &emsp;"Write", "Dance (Kathak)", "Volunteer", <br/> &emsp; &emsp; "Save Photo Diaries"]; <br/>
                            <br/>
                            &emsp; &emsp;> Yashvi-><span style={descriptor}>currentlyReading</span> = Sapiens <br/> &emsp; &emsp; (Yuval Noah Harari); <br/>
                            &emsp; &emsp;> Yashvi-><span style={descriptor}>currentlyLearning</span> = Full<br/> &emsp; &emsp;Stack Development & UI / UX Design; <br/>
                            &emsp; &emsp;> Yashvi-><span style={descriptor}>currentlyBuilding</span> = <Link href="/work/ispirt"><span style={{color: '#0000EE'}}>iSPIRT <br/> &emsp; &emsp;Volunteer Management Tool</span></Link>; <br/>
                            &emsp; &emsp;> Yashvi-><span style={descriptor}>currentlyDesigning</span> = <a href="https://dribbble.com/yashvijaju"><span style={{color: '#0000EE', cursor: 'pointer'}}>100 <br/> &emsp; &emsp; Days of UI</span></a>; <br/>
                            <br/>
                            &emsp; &emsp;> Yashvi-><span style={descriptor}>currentlyInterningAt</span> = <a href="https://ispirt.in/" target="_blank" rel="noopener noreferrer" style={{color: '#0000EE'}}>iSPIRT <br/> &emsp; &emsp;(think-tank)</a>; <br/>
                            &emsp; &emsp;> Yashvi-><span style={descriptor}>currentlyFreelancingWith</span> = <a href="https://www.detourbus.com/" target="_blank" rel="noopener noreferrer" style={{color: '#0000EE'}}><br/> &emsp; &emsp; Detour Bus</a> and <a href="https://www.uniflowcampus.com/" target="_blank" rel="noopener noreferrer" style={{color: '#0000EE'}}>Uniflow</a>; <br/>
                            &emsp; &emsp;> Yashvi-><span style={descriptor}>currentlyActiveAt</span> = <a href="http://workbenchsc.com/" target="_blank" rel="noopener noreferrer" style={{color: '#0000EE'}}>USC <br/> &emsp; &emsp; WorkBench (venture studio)</a>, <br/> &emsp; &emsp; <a href="http://viterbimakers.usc.edu/" target="_blank" rel="noopener noreferrer" style={{color: '#0000EE'}}>USC Makers (engineering)</a>, <br/> &emsp; &emsp; <a href="https://troylabs.vc/" target="_blank" rel="noopener noreferrer" style={{color: '#0000EE'}}>USC TroyLabs (entrepreneurship)</a>; <br/>
                            <br/>
                            &emsp; &emsp;> Yashvi-><span style={descriptor}>Resume</span> = <a href="https://drive.google.com/file/d/1UYa99LI9qB2Mj7QITz1ezya8gDcA9Bd7" target="_blank" rel="noopener noreferrer" style={{textDecoration: 'none', fontWeight: 'lighter', color: '#0000EE'}}><AttachFile fontSize="small" style={{color:'grey'}}/> click to open; <br/>
                            </a>
                            &#125;
                        </Typography>
                    </Grid>
                </Hidden>
                <Hidden xsDown>
                    <Grid item xs={10} style={{backgroundColor: grey, 'borderRadius': '15px', padding: '4vh 4vw 4vh 4vw'}}>
                        <Typography variant="h5" style={{paddingBottom: '2vh', fontWeight: 'normal', color: '#43b14e'}}>
                            &#123; About Me &#125;
                        </Typography>
                        <Typography variant="body2" style={{fontWeight: 'lighter'}}>
                            void aboutMe(int argc, char *argv[]) &#123;  <br/>
                            &emsp; &emsp;> Innovator* Yashvi = new Innovator(); <br/>
                            &emsp; &emsp;> Yashvi-><span style={descriptor}>lastName</span> = Jaju; <br/> 
                            <br/>
                            &emsp; &emsp;> Yashvi-><span style={descriptor}>university</span> = University of Southern California '24 (rising sophomore, but on a gap year); <br/>
                            &emsp; &emsp;> Yashvi-><span style={descriptor}>major</span> = Computer Science and Business Administration; <br/>
                            &emsp; &emsp;> Yashvi-><span style={descriptor}>minor</span> = Entrepreneurship; <br/>
                            <br/>
                            
                            &emsp; &emsp;> Yashvi-><span style={descriptor}>skills</span> = ["C++", "JavaScript", "React", "Next.js", "MongoDB", "Active Directory", "Material UI", "Git", "Adobe CC", "Typography"]; <br/>
                            &emsp; &emsp;> Yashvi-><span style={descriptor}>interests</span> = ["Coding", "Creating", "Baking", "Painting", "Learning", "Reading", "Writing", "Dancing (Kathak)", "Volunteering", "Saving Photo Diaries"]; <br/>
                            <br/>
                            &emsp; &emsp;> Yashvi-><span style={descriptor}>currentlyReading</span> = Sapiens (Yuval Noah Harari); <br/>
                            &emsp; &emsp;> Yashvi-><span style={descriptor}>currentlyLearning</span> = Full Stack Development & UI / UX Design; <br/>
                            &emsp; &emsp;> Yashvi-><span style={descriptor}>currentlyBuilding</span> = <Link href="/work/ispirt"><span style={{color: '#0000EE', cursor: 'pointer'}}>iSPIRT Volunteer Management Tool</span></Link>; <br/>
                            &emsp; &emsp;> Yashvi-><span style={descriptor}>currentlyDesigning</span> = <a href="https://dribbble.com/yashvijaju"><span style={{color: '#0000EE', cursor: 'pointer'}}>100 Days of UI</span></a>; <br/>
                            <br/>
                            &emsp; &emsp;> Yashvi-><span style={descriptor}>currentlyInterningAt</span> = <a href="https://ispirt.in/" target="_blank" rel="noopener noreferrer" style={{color: '#0000EE'}}>iSPIRT (think-tank)</a>; <br/>
                            &emsp; &emsp;> Yashvi-><span style={descriptor}>currentlyFreelancingWith</span> = <a href="https://www.detourbus.com/" target="_blank" rel="noopener noreferrer" style={{color: '#0000EE'}}>Detour Bus (web design & development)</a> and <a href="https://www.uniflowcampus.com/" target="_blank" rel="noopener noreferrer" style={{color: '#0000EE'}}>Uniflow (frontend developer)</a>; <br/>
                            &emsp; &emsp;> Yashvi-><span style={descriptor}>currentlyActiveAt</span> = <a href="http://workbenchsc.com/" target="_blank" rel="noopener noreferrer" style={{color: '#0000EE'}}>USC WorkBench (venture studio)</a>, <a href="http://viterbimakers.usc.edu/" target="_blank" rel="noopener noreferrer" style={{color: '#0000EE'}}>USC Makers (engineering)</a>, <a href="https://troylabs.vc/" target="_blank" rel="noopener noreferrer" style={{color: '#0000EE'}}>USC TroyLabs (entrepreneurship)</a>; <br/>

                            <br/>
                            &emsp; &emsp;> Yashvi-><span style={descriptor}>Resume</span> = <a href="https://drive.google.com/file/d/1UYa99LI9qB2Mj7QITz1ezya8gDcA9Bd7" target="_blank" rel="noopener noreferrer" style={{color: '#0000EE', fontWeight: 'lighter'}}><AttachFile fontSize="small" style={{color:'grey'}}/> click to open; <br/>
                            </a>
                            &#125;
                        </Typography>
                    </Grid>
                </Hidden>
            </Grid>
            </Fade>
        </div>
    )
}