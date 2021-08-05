import React, { Component } from 'react';

//Import source CSS
import '../global_components_css/side_navigation.css';
import '../App.css';

//Bootstrap CSS imports
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.rtl.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.rtl.min.css';
import '../../node_modules/bootstrap/dist/css/bootstrap-grid.css';
import '../../node_modules/bootstrap/dist/css/bootstrap-utilities.css';
import { BrowserRouter as Router, Route, Switch, Link, NavLink, Redirect } from 'react-router-dom';  //import for page navigation

//React Icon imports
import { BsArrowLeft } from "react-icons/bs";

class Side_nav extends Component {

    //globalize state properties
    constructor(props) {

        super(props);

        this.state = { 

            nav_items: [
                {to: '/dashboard'}, 
                {to: '/messages'}, 
                {to: '/contacts'},
                {to: '/settings'}],  // nav instances
            authToLogout: false
        }
       
    }

    logout = () => {

        //Authorize redirect
        this.setState({

            authToLogout: true

        });

        //Disable login auth
        window.protectAuth = false;

        //Remove localstorage and clear data for next 
        localStorage.clear()

    }

    render() { 

        if(this.state.authToLogout){

            console.log(this.state.authToLogout);
            return <Redirect to="/" />

        }  

        return ( 
        
            <React.Fragment>
                <nav className="side-nav-column no-padding d-flex flex-column">
                    <ul className="nav-container no-padding">
                        {this.state.nav_items.map(
                            link => <NavLink to={link.to} activeClassName="nav-icon-active"> <li className="nav-icon-container"><div className="nav-icon rounded-circle"></div></li></NavLink>
                        )}
                    </ul>
                    <div className="mt-auto mx-auto logout-button fill-width d-flex">
                        <div className="flex-grow-1"></div>
                        <button className="logout-button-container" onClick={this.logout}><BsArrowLeft style={{color: "white"}} /></button>
                        <div className="flex-grow-1"></div>
                    </div>
                </nav>
            </React.Fragment> 
            
        );
    }
}

export default Side_nav;
