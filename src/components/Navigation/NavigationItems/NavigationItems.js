import React from 'react';
import classes from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';
/**
 * Functional component that contains the navigation items to go to diferent pages in the burger app.
 */
const navigationItems = (props) =>(
    <ul className={classes.NavigationItems}>
        <NavigationItem clicked={props.clickedItem} tag="about_me">Profile</NavigationItem>
        <NavigationItem clicked={props.clickedItem} tag="experiences">Experiences</NavigationItem>
        <NavigationItem clicked={props.clickedItem} tag="abilities">Abilities</NavigationItem>
        <NavigationItem clicked={props.clickedItem} tag="projects">Projects</NavigationItem>
        <NavigationItem clicked={props.clickedItem} tag="hobbies">Hobbies</NavigationItem>
        <NavigationItem clicked={props.clickedItem} tag="contact">Contact</NavigationItem>
    </ul>
);

export default navigationItems;