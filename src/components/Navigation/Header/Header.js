/*
    ./src/components/Header.jsx
*/
import React from 'react';
import HeaderNav from './HeaderNav/HeaderNav';
import Logo from '../../UI/Logo/Logo';
import './Header.css';

export default class Header extends React.Component {
    render() {
        return (
            <header id='navbar' className='header'>
                <div id='headercontent' className='header-content'>
                    <div className='header-content-left'>
                        <div className='header-content-left-in'> 
                            <Logo/>
                        </div> 
                    </div>
                    <div className='header-content-right'>
                        <HeaderNav/>
                    </div> 
                </div>
            </header>
        );
    }
}