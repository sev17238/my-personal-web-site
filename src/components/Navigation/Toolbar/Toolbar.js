import React from 'react';
import classes from './Toolbar.css';
import Logo from '../../UI/Logo/Logo';
//import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';

/**
 * Functional component that contains the toolbar, with a logo and navigation buttons
 * @param {*} props 
 */
const toolbar = (props) => (
    <header id='toolbar' className='Toolbar'>
        <DrawerToggle clicked={props.drawerToggleClicked}/>
        {/*<Logo height="80%"/> //another aproach for adjusting movil and desktop preferences*/}
        <div className={classes.Logo}>
            <Logo/>
        </div>
        <nav className={classes.DesktopOnly}>
            {/*<NavigationItems/>*/}
        </nav>
    </header>
);

export default toolbar;