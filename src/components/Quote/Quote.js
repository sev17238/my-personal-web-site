/*
    ./src/components/Experiences.jsx
*/
import React, {Component} from 'react';
import './Quote.css';
import Pulse from 'react-reveal/Pulse';

export default class Experiences extends Component {
    /*constructor(props) {
        super(props);
        this.quote = props.quote;
        this.author = props.author;
    }*/
    render() {
        let attachedClasses = ['div-quote']
        if(this.props.border){
            attachedClasses = ['div-quote', 'div-quote-background']
        }
        return (
            <div className={attachedClasses.join(' ')}>
                <div className='div-quote-in'>
                    <Pulse>
                        <p className='p-quote'>
                            {this.props.quote}
                        </p>
                        <p className='p-quote-ref'>
                            {this.props.author}
                        </p>
                    </Pulse>
                </div>
            </div>
        );
    }
}