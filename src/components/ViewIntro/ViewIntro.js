import React from 'react';
import './Viewintro.css';
import { Parallax} from 'react-parallax';
import Zoom from 'react-reveal/Zoom';

import AwesomeView from '../../images/skyme.JPG';

const viewIntro = (props) =>{

    return(
        <section className='ViewIntroSection'>
            <div className='test'>
                <Parallax
                    blur={0}
                    bgImage={AwesomeView}
                    bgImageAlt="Skyme"
                    strength={200}>
                    <Zoom>
                        <div className='divv1-cloud'>
                            <Zoom cascade>
                                <div className='divv2-center-cloud'>
                                    <div className='cloud1'></div>
                                    <div className='cloud2'></div>
                                    <p className="NameIntro">Great View!</p>
                                    <p className="Name">Isn&lsquo;t it?</p>
                                </div> 
                            </Zoom>
                        </div>
                    </Zoom>
                </Parallax>
            </div>
        </section>
    )
}

export default viewIntro;