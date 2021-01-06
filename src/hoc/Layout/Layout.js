import React, {Component} from 'react';
import Aux from '../Auxiliary/Auxiliary';

import Footer from '../../components/Footer/Footer';
import Header from '../../components/Navigation/Header/Header';
import FloatingToolbar from '../../components/Navigation/FloatingToolbar/FloatingToolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

class Layout extends Component{
    constructor(props){   
        super(props);
        this.state = {
            showSideDrawer: false,
            showNavbar: false
        }
    }

    hideNavbarOnScrollHandler(){
        let header = document.getElementById('headercontent'); 
        //let headernav = document.getElementById('headernav');
        let windowsScrollTop = window.pageYOffset;
        if(windowsScrollTop <= 420){
            header.classList.remove('bgColor');
        }else{           
            header.classList.add('bgColor');
        }
    }

    render(){
        window.addEventListener('scroll', this.hideNavbarOnScrollHandler);
        return(
            <Aux>
                <Header/>
                {/*<FloatingToolbar/>
                <SideDrawer/>*/}
                <main>
                    {this.props.children}
                </main>
                <Footer/>
            </Aux>
        )
    }
}

export default Layout;