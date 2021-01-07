import React from 'react';
import Logo from '../../UI/Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './SideDrawer.module.css';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../../hoc/Auxiliary/Auxiliary';

/**
 * Side drawer for navigation on movil devices
 * @param {*} props 
 */
const sideDrawer = (props) => {
    let attachedClasses = [classes.SideDrawer,classes.Close]
    if(props.open){
        attachedClasses = [classes.SideDrawer,classes.Open]
    }

    return(
        <Aux>
            <Backdrop show={props.open} clicked={props.closed}/>
            <div className={attachedClasses.join(' ')}> {/*attach classes as a single string*/}
                {/*<Logo height="11%"/> //another aproach for adjusting movil and desktop preferences*/}
                <div className={classes.Logo}>
                    <Logo/>
                </div>
                <nav>
                    <NavigationItems/>
                </nav>
            </div>
        </Aux>
    );
}

export default sideDrawer;
