/*
    ./src/components/Container.jsx
*/
import React,{Component} from 'react';

import ViewIntro from '../components/ViewIntro/ViewIntro';
import AboutMe from '../components/AboutMe/AboutMe';
import Experiences from '../components/Experiences/Experiences';
import Abilities from '../components/Abilities/Abilities';
import Projects from '../components/Projects/Projects';
import Hobbies from '../components/Hobbies/Hobbies';

import Aux from '../hoc/Auxiliary/Auxiliary';

class Container extends Component {

    state={
        screenWidth: null
    }

    componentDidMount(){
        this.calculeScreenWidth();
    }

    calculeScreenWidth = () => {
        this.setState({screenWidth: window.innerWidth})
    }

    render() {
        window.addEventListener('resize', this.calculeScreenWidth);
        return (
            <Aux>
                <ViewIntro/>
                <AboutMe width={this.state.screenWidth}/>
                <Experiences width={this.state.screenWidth}/>
                <Abilities width={this.state.screenWidth}/>
                <Projects width={this.state.screenWidth}/>
                <Hobbies/>
            </Aux>
        );
    }
}

export default Container; 