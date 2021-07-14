import React, { Component } from 'react';

//Component exports
import Side_nav from '../global_components/side_navigation';

//Bootstrap CSS imports
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.rtl.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.rtl.min.css';
import '../../node_modules/bootstrap/dist/css/bootstrap-grid.css';
import '../../node_modules/bootstrap/dist/css/bootstrap-utilities.css';

class Dashboard_Component extends Component {
    state = {  }
    render() { 

      return ( 

        <div className="fill-window container-fluid">
            <div className="row fill-height no-padding">
              <nav className="side-nav-column no-padding">
                
                <Side_nav />
             
              </nav>
              <div className="col-11 no-match-pass-div rounded-3">
                <p className="logo fw-bold text-center fs-1">
                  LOGO
                </p>
              </div>
            
             
            </div>
        </div>   
        

      );
    }
}   
 
export default Dashboard_Component
