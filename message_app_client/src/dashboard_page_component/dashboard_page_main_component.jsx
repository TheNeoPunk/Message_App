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

        <div className="container p-4">
            <div className="row filler-xs">
              <div className="col">

                <Side_nav />
    

              </div>
              <div className="col no-match-pass-div rounded-3">
                <p className="text-danger fw-bold"> This is a Dashboard_Component </p>
              </div>
              <div className="col">
            
              </div>
            </div>
        </div>   
        

        );
    }
}   
 
export default Dashboard_Component
