import React from 'react';
import './Hobbies.css';
import { Parallax} from 'react-parallax';
import Zoom from 'react-reveal/Zoom';

import instruments from '../../images/piano-guitar_purple.jpg';
import crowd from '../../images/crowd2.png';

const hobbies = () =>{
    return(
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
    )
}

export default hobbies;