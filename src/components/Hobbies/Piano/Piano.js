import React,{Component} from 'react';
import Aux from '../../../hoc/Auxiliary/Auxiliary';
import './Piano.css';

//notes
/*
import C from '../../../notes/C.mp3'
import Db from '../../../notes/Db.mp3'
import D from '../../../notes/D.mp3'
import Eb from '../../../notes/Eb.mp3'
import E from '../../../notes/E.mp3'
import F from '../../../notes/F.mp3'
import Gb from '../../../notes/Gb.mp3'
import G from '../../../notes/G.mp3'
import Ab from '../../../notes/Ab.mp3'
import A from '../../../notes/A.mp3'
import Bb from '../../../notes/Bb.mp3'
import B from '../../../notes/B.mp3'
*/

class Piano extends Component{
    render(){

        return(
            <Aux>
                <div className='upperPiano'>
                    <div className="piano">
                        <div data-note="C" className="key white"></div>
                        <div data-note="Db" className="key black"></div>
                        <div data-note="D" className="key white"></div>
                        <div data-note="Eb" className="key black"></div>
                        <div data-note="E" className="key white"></div>
                        <div data-note="F" className="key white"></div>
                        <div data-note="Gb" className="key black"></div>
                        <div data-note="G" className="key white"></div>
                        <div data-note="Ab" className="key black"></div>
                        <div data-note="A" className="key white"></div>
                        <div data-note="Bb" className="key black"></div>
                        <div data-note="B" className="key white"></div>
                    </div>
                </div>
                {/*
                <audio id="C"  src={C} ></audio>
                <audio id="Db" src={Db}></audio>
                <audio id="D"  src={D} ></audio>
                <audio id="Eb" src={Eb}></audio>
                <audio id="E"  src={E} ></audio>
                <audio id="F"  src={F} ></audio>
                <audio id="Gb" src={Gb}></audio>
                <audio id="G"  src={G} ></audio>
                <audio id="Ab" src={A} ></audio>
                <audio id="A"  src={Ab}></audio>
                <audio id="Bb" src={Bb}></audio>
                <audio id="B"  src={B} ></audio>*/}
            </Aux>
        )
    }
}

export default Piano;