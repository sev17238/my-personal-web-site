/*
    ./src/components/main/Experiences.jsx
*/
import React,{Component} from 'react';
import './Experiences.css';
import ModExp from './ExperiencesModule/ExperiencesModule';
import Flip from 'react-reveal/Flip';
import LightSpeed from 'react-reveal/LightSpeed';

import school from '../../images/Icons/school.png';
import gears from '../../images/Icons/gears.png';
import code from '../../images/Icons/code.png';
import music from '../../images/Icons/music.png';
import circuit from '../../images/Icons/circuit.png';
import cloud from '../../images/Icons/cloud.png';

class Experiences extends Component {

    render() {
        return (
            <section>
                <div id='experiences' className='Experiences'>
                    <div className='innerDivExperiences'>
                        <h3 className='titleExperiences'>Experiences</h3>
                        <div className='div2-exp'>
                            <h4 className='edu-exp'>Education</h4>
                            <Flip bottom>
                                <ModExp 
                                    width={this.props.width}
                                    Name='Colegio Capouilliez' 
                                    Date='Jan 2003 - Oct 2013' 
                                    Acknowledgment='Primary and Middle School Studies' 
                                    Description="I spent almost 10 years in this lovely school when I was a child. 
                                    I remember I used to love Natural Science classes about the human body and cells. 
                                    I will always remember going to the musical appreciation class
                                    where my teacher played funny piano songs for all the class."
                                    src={school}>
                                </ModExp>
                            </Flip>    
                            <Flip bottom>
                                <ModExp 
                                    width={this.props.width}
                                    Name='Instituto Tecnico Laboral Kinal' 
                                    Date='Jan 2014 - Nov 2016' 
                                    Acknowledgment='Industrial Electronics Technician' 
                                    Description="Kinal is a well known high school in Guatemala because of it's dicipline, good
                                    work and trained students. I studied here for 3 years and I learned about electronics, mechanics and
                                    basic programing. In my third year of school I realized that I wanted to know more about software 
                                    and programming."
                                    src={circuit}>
                                </ModExp>
                            </Flip>   
                            <Flip bottom>
                                <ModExp 
                                    width={this.props.width}
                                    Name='Universidad del Valle de Guatemala' 
                                    Date='Jan 2017 - Nov 2022 (expected graduation date)' 
                                    Acknowledgment='Computer Science and Information Technologies Engineer' 
                                    Description="I'm currently in my third year of education in this university and I think
                                    the way of learning has a combination of different approaches as User Experience, 
                                    Security, long term maintenance and more. I have learned about JAVA, Python, C#, SQL, 
                                    Javascript, Web Technologies and to use lots of useful tools to get along well with all this stuff."
                                    src={code}>
                                </ModExp>
                            </Flip>    
                            <Flip bottom>
                                <ModExp 
                                    width={this.props.width}
                                    Name='Conservatorio Nacional de Música (Guatemala)' 
                                    Date='Jan 2013 - Nov 2016' 
                                    Acknowledgment='Elementary musical training with a specialization in piano' 
                                    Description="I studied here for more than 4 years and I learned about the essential 
                                    concepts of music theory and harmony. I learned to play the piano as well and
                                    participated in several recitals."
                                    src={music}>
                                </ModExp>
                            </Flip>
                            <h4 className='edu-exp'>Work Experience</h4>
                            <LightSpeed left>
                                <ModExp 
                                    width={this.props.width}
                                    Name='DACSA' 
                                    Date='Jun 2016 - Nov 2016' 
                                    Acknowledgment='Full Time - Electronic Technician' 
                                    Description="DACSA is a custom label printer in Guatemala city. As part of Kinal's 
                                    graduating process I had to work here for about 4 months, fixing diferent kinds of 
                                    electronic devices as electronic balances, sealers, labellers and more. It was a good 
                                    experience realize how it is to have a full time job."
                                    src={gears}>
                                </ModExp>
                            </LightSpeed> 
                            <LightSpeed left>
                                <ModExp 
                                    width={this.props.width}
                                    Name='CELERA' 
                                    Date='Jul 2020 - Nov 2020' 
                                    Acknowledgment='Part Time - Cloud Engineer' 
                                    Description="CELERA is the name of a startup enterprise dedicated to promote  
                                    digital solutions related to Digital Signature Services in Guatemala. I was in charge 
                                    of centralize AWS Services on a testing web site and I also spent time interacting with 
                                    some AWS Services such as lambda, S3, EC2, IAM and more."
                                    src={cloud}>
                                </ModExp>
                            </LightSpeed>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Experiences;