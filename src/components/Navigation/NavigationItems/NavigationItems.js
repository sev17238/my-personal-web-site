import React from 'react';
import classes from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';
/**
 * Functional component that contains the navigation items to go to diferent pages in the burger app.
 */
const navigationItems = () =>(
    <ul className={classes.NavigationItems}>
        <NavigationItem tag="about_me">About Me</NavigationItem>
        <NavigationItem tag="experiences">Experiences</NavigationItem>
        <NavigationItem tag="abilities">Abilities</NavigationItem>
        <NavigationItem tag="projects">Projects</NavigationItem>
        <NavigationItem tag="hobbies">Hobbies</NavigationItem>
        <NavigationItem tag="contact">Contact</NavigationItem>
    </ul>
);

export default navigationItems;