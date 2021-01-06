import React from 'react';
import './FloatingToolbar.css';
import NavigationItems from '../NavigationItems/NavigationItems';
import Aux from '../../../hoc/Auxiliary/Auxiliary';

const floatingToolbar = (props) =>{

    let floatingT = null;
    if(!props.hide){
        floatingT = (
            <div id='floating_toolbar' className='FloatingToolbar'>
                <nav className='DesktopOnly'>
                    {/*<a href="#aboutme">About Me</a>
                    <a href="#experiences">Experiences</a>
                    <a href="#projects">Projects</a>
                    <a href="#contact">Contact</a>*/}
                    <NavigationItems/>
                </nav>
            </div>
        )
    }

    return(
        <Aux>
            {floatingT}
        </Aux>
    )
}

export default floatingToolbar;