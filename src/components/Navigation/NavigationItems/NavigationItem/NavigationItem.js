import React from 'react';
import classes from './NavigationItem.module.css';

/**
 * functional component representing an anchor component 
 * @param {boolean} props active or not
 */
const navigationItem = (props) => {
    /*
    scrollHandler = () =>{
        window.scrollBy(0,)
    } 
*/
    return(
        <li className={classes.NavigationItem}>
            {/*<NavLink 
            exact={props.exact}
            activeClassName={classes.active}
            to={props.link} >
                {props.children}
            </NavLink>*/}
            <a onClick={props.clicked} href={'#'+props.tag}>
                {props.children}
            </a>
        </li>
    )
    
};

export default navigationItem;