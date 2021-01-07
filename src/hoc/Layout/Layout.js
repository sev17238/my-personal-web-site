import React, {Component} from 'react';
import Aux from '../Auxiliary/Auxiliary';

import Footer from '../../components/Footer/Footer';
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
        showNavbar: true
    }

    onScrollHandler = () => {
        let toolbar = document.getElementById('toolbar');
        let windowsScrollTop = window.pageYOffset;
        if(windowsScrollTop <= 660){
            this.setState({showNavbar: true})
        }else{           
            this.setState({showNavbar: false})
        }
        if(window.innerWidth > 800){
            if(windowsScrollTop <= 660){
                toolbar.classList.remove('hide');
            }else if (windowsScrollTop > 661 ){           
                toolbar.classList.add('hide');
            }
        }else if(window.innerWidth <= 799){
            toolbar.classList.remove('hide');
        }
    }

    sideDrawerClosedHandler = () =>{
        this.setState({showSideDrawer: false})
    }

    sideDrawerToggleHandler = () =>{ /*Always use prevState when setting state that depends on the oldState.*/
        this.setState((prevState) => {
            return {showSideDrawer: !prevState.showSideDrawer};
        })
    }

    render(){
        window.addEventListener('scroll', this.onScrollHandler);
        return(
            <Aux>
                <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler}/>
                <FloatingToolbar hide={this.state.showNavbar}/>
                <SideDrawer
                    open={this.state.showSideDrawer} 
                    closed={this.sideDrawerClosedHandler}/>
                <main>
                    {this.props.children}
                </main>
                <Footer/>
            </Aux>
        )
    }
}

export default Layout;