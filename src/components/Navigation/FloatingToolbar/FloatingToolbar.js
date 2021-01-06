import React from 'react';
import classes from './FloatingToolbar.module.css';
import NavigationItems from '../NavigationItems/NavigationItems';

const floatingToolbar = (props) =>{

    let attachedClasses = [classes.FloatingToolbar]
    if(props.hide){
        console.log("props.open: "+props.open);
        attachedClasses = [classes.FloatingToolbar,classes.FloatingToolbar_display]
    }

    return(
        <div id='floating_toolbar' className={attachedClasses.join(' ')}>

            <nav className={classes.DesktopOnly}>
                {/*<a href="#aboutme">About Me</a>
                <a href="#experiences">Experiences</a>
                <a href="#projects">Projects</a>
                <a href="#contact">Contact</a>*/}
                <NavigationItems/>
            </nav>
        </div>
    )
}

export default floatingToolbar;