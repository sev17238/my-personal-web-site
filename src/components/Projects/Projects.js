/*
    ./src/components/main/Projects.jsx
*/
import React from 'react';
import './Projects.css';
import { /*Container, */Row, Col } from 'reactstrap';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';
import Fade from 'react-reveal/Fade';

import onepunch from '../../images/onepunch-ee.png'
import undercooked from '../../images/UnderCooked_.png'
import piano from '../../images/piano.PNG'

const projects = (props) => {

    let rowsToRender = (
        <div className='div2-pro'>
            <Row className='row'>
                <Col xs="5" className='Fst-col'>
                    <Fade>
                        <Card >
                            <CardImg top width="50%" src={undercooked} alt="Card image cap" />
                            <CardBody>
                            <CardTitle>Undercooked</CardTitle>
                            <CardSubtitle>Overcooked clone</CardSubtitle>
                            <CardText>Undercooked is a clone of Overcooked the videogame. This project was part of Advanced 
                                Videogame programming course in Universidad del Valle.
                            </CardText>
                            <Button href='https://diego-sevilla.itch.io/undercooked-cookitnow'>See Project</Button>
                            </CardBody>
                        </Card>  
                    </Fade>
                </Col>
                <Col xs="5" className='Snd-col'>
                    <Fade>
                        <Card>
                            <CardImg top width="100%" src={piano} alt="Card image cap" />
                            <CardBody>
                            <CardTitle>Rhythm, Chords and Music Generator</CardTitle>
                            <CardSubtitle>Computational Music Project</CardSubtitle>
                            <CardText>This project was part of Computational Music course in Universidad del Valle.
                                The goal was to create a seudo-random music generator aplying music theory in the process.
                            </CardText>
                            <Button href='https://diego-sevilla.itch.io/rythm-chords-and-melodies-generator'>See Project</Button>
                            </CardBody>
                        </Card>
                    </Fade>
                </Col>
            </Row>
            <Row className='row'>
                <Col xs="5" className='Fst-col'>
                    <Fade>
                        <Card>
                            <CardImg top width="100%" src={onepunch} alt="Card image cap" />
                            <CardBody>
                            <CardTitle>One Punch Memory</CardTitle>
                            <CardSubtitle>The Card Game</CardSubtitle>
                            <CardText>
                                This project was part of Web Systems and Technologies course in Universidad del Valle.
                                Have fun with this card game made with react.js featuring the most popular one punch 
                                man characters.
                            </CardText>
                            <Button href='https://github.com/sev17238/MemoryGame_ONEPUNCHMAN'>See Project</Button>
                            </CardBody>
                        </Card> 
                    </Fade>
                </Col>
            </Row>
        </div>
    )
    if(props.width <= 850){
        rowsToRender = (
            <div className='div2-pro'>
                <Row className='row'>
                    <Col xs="12" >
                        <Fade>
                            <Card className='Card-container'>
                                <CardImg top width="50%" src={undercooked} alt="Card image cap" />
                                <CardBody>
                                <CardTitle>Undercooked</CardTitle>
                                <CardSubtitle>Overcooked clone</CardSubtitle>
                                <CardText>Undercooked is a clone of Overcooked the videogame. This project was part of Advanced 
                                    Videogame programming course in Universidad del Valle.
                                </CardText>
                                <Button href='https://diego-sevilla.itch.io/undercooked-cookitnow'>See Project</Button>
                                </CardBody>
                            </Card>  
                        </Fade>
                    </Col>
                </Row>
                <Row className='row'>
                    <Col xs="12" >
                        <Fade>
                            <Card className='Card-container'>
                                <CardImg top width="100%" src={piano} alt="Card image cap" />
                                <CardBody>
                                <CardTitle>Rhythm, Chords and Music Generator</CardTitle>
                                <CardSubtitle>Computational Music Project</CardSubtitle>
                                <CardText>This project was part of Computational Music course in Universidad del Valle.
                                    The goal was to create a seudo-random music generator aplying music theory in the process.
                                </CardText>
                                <Button href='https://github.com/sev17238/Project1_WebPage'>See Project</Button>
                                </CardBody>
                            </Card>
                        </Fade>
                    </Col>
                </Row>
                <Row className='row'>
                    <Col xs="12" >
                        <Fade>
                            <Card className='Card-container'>
                                <CardImg top width="100%" src={onepunch} alt="Card image cap" />
                                <CardBody>
                                <CardTitle>onepunch</CardTitle>
                                <CardSubtitle>The videogame</CardSubtitle>
                                <CardText>
                                    This project was part of Web Systems and Technologies course in Universidad del Valle.
                                    Have fun with this card game made with react.js featuring the most popular one punch 
                                    man characters.
                                </CardText>
                                <Button href='https://github.com/sev17238/MemoryGame_ONEPUNCHMAN'>See Project</Button>
                                </CardBody>
                            </Card> 
                        </Fade>
                    </Col>
                </Row>
            </div>
        )
    }
    return (
        <section>
            <div id='projects' className='Projects'>
                <div className='innerDivProjects'>
                    <h3 className='title-pro'>Projects</h3>
                    {rowsToRender}
                </div>
            </div>
        </section>
    );
}

export default projects;