import React from 'react';
import './Hobbies.css';
import classes from './Hobbies.module.css';
import Piano from './Piano/Piano';
import Mountains from './Mountains/Mountains';
import { /*Container, */Row, Col } from 'reactstrap';
import Aux from '../../hoc/Auxiliary/Auxiliary';

/*
import { Parallax} from 'react-parallax';
import Zoom from 'react-reveal/Zoom';
import instruments from '../../images/piano-guitar_purple.jpg';
import crowd from '../../images/crowd2.png';
*/

const hobbies = () =>{
    return(
        <Aux>
            <section className={classes.sectionHobbies}>
                <div id="hobbies" className={classes.Hobbies}>
                    <div className={classes.innerDivHobbies}>
                        <h3 className={classes.titleHobbies}>Hobbies</h3>
                        <Row className='row'>
                            <Col xs="2" >
                            </Col>
                            <Col xs="8" >
                                <div >
                                    <p className={classes.pHobbiesDescription}>
                                        I like to play the piano! I think music is a cool way to express yourself to others. 
                                        It helps you remind good things and moments of life.
                                    </p>
                                </div>
                            </Col>
                            <Col xs="2" >
                            </Col>
                        </Row>
                        <Row >
                            <Col >
                                <Piano/>
                            </Col>
                        </Row>
                    </div>
                </div>
            </section>
            <section className={classes.sectionHobbies}>
                <div id="hobbies" className={classes.Hobbies}>
                    <div className={classes.innerDivHobbies}>
                    <Row className='row'>
                            <Col xs="2" >
                            </Col>
                            <Col xs="8" >
                                <div >
                                    <p className={classes.pHobbiesDescriptionVar}>
                                        I have climbed some volcanoes! I see it like a way of escape of all human being wars. 
                                        At the top, you can stop time and reflect on how insignificant we are.
                                    </p>
                                </div>
                            </Col>
                            <Col xs="2" >
                            </Col>
                        </Row>
                        <Row >
                            <Col >
                            </Col>
                        </Row>
                    </div>
                    <Mountains/>
                </div>
            </section>
        </Aux>
    )
}

export default hobbies;

/*
        <section className="Hobbies">
            <Parallax
                blur={0}
                bgImage={instruments}
                bgImageAlt="Hobbies"
                strength={300}>
                <Zoom>
                    <div className='div1-hobbies'>
                        <Zoom>
                            <div id='hobbies' className='div2-center-hobbies'>
                                <p className="p-hobbies">HOBBIES!!!</p>
                            </div> 
                        </Zoom>
                    </div>
                </Zoom>
                <Parallax
                    blur={0}
                    bgImage={crowd}
                    bgImageAlt="crowd"
                    strength={100}>
                    <div className='crowdHobbies'></div>
                </Parallax>
            </Parallax>
        </section>
*/