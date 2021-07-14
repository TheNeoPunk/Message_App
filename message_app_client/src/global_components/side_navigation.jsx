import React, { Component } from 'react';

//Import source CSS
import '../global_components_css/side_navigation.css'

//Bootstrap CSS imports
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.rtl.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.rtl.min.css';
import '../../node_modules/bootstrap/dist/css/bootstrap-grid.css';
import '../../node_modules/bootstrap/dist/css/bootstrap-utilities.css';

class Side_nav extends Component {
    state = { 

        nav_items: ['', '' , '','']

     }
    render() { 
    
        return ( 
            
            <React.Fragment>

                <ul className="nav-container">
                {this.state.nav_items.map(

                    item => <li className="nav-icon-container"><div className="nav-icon rounded-circle">{item}</div></li>
                    
                )}
                </ul>
                  
           


            </React.Fragment>
           
        );
    }
}

export default Side_nav;
