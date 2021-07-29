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
import { BrowserRouter as Router, Route, Switch, Link, NavLink } from 'react-router-dom';  //import for page navigation

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
    
        }
       
    }

    render() { 

        return ( 
        
            <React.Fragment>
                     
              
                <ul className="nav-container no-padding">

                    {this.state.nav_items.map(

                        link => <NavLink to={link.to} activeClassName="nav-icon-active"> <li className="nav-icon-container"><div className="nav-icon rounded-circle"></div></li></NavLink>

                    )}

                </ul>
              

            </React.Fragment> 

            
                
            
        );
    }
}

export default Side_nav;
