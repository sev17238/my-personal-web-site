import React, {Component} from 'react';
import Aux from '../Auxiliary/Auxiliary';

import Footer from '../../components/Footer/Footer';
import Header from '../../components/Navigation/Header/Header';
import FloatingToolbar from '../../components/Navigation/FloatingToolbar/FloatingToolbar';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

class Layout extends Component{
    /*constructor(props){   
        super(props);
        this.state = {
            showSideDrawer: false,
            showNavbar: false
        }
    }*/
    state = {
        showSideDrawer: false,
        showNavbar: false
    }

    hideNavbarOnScrollHandler = () => {
        //let header = document.getElementById('headercontent'); 

        //let floatingToolbar = document.getElementById('floating_toolbar');
        //let headernav = document.getElementById('headernav');
        let windowsScrollTop = window.pageYOffset;
        if(windowsScrollTop <= 660){
            //header.classList.remove('bgColor');

            //floatingToolbar.classList.remove('FloatingToolbar_display');
            this.setState({showNavbar: true})
        }else{           
            //header.classList.add('bgColor');
            //floatingToolbar.classList.add('FloatingToolbar_display');
            this.setState({showNavbar: false})
        }
    }

    sideDrawerToggleHandler = () =>{ /*Always use prevState when setting state that depends on the oldState.*/
        this.setState((prevState) => {
            return {showSideDrawer: !prevState.showSideDrawer};
        })
    }

    render(){
        window.addEventListener('scroll', this.hideNavbarOnScrollHandler);
        return(
            <Aux>
                {/*<Header />*/}
                <Toolbar/>
                <FloatingToolbar hide={this.state.showNavbar}/>
                <SideDrawer/>
                <main>
                    {this.props.children}
                </main>
                <Footer/>
            </Aux>
        )
    }
}

export default Layout;