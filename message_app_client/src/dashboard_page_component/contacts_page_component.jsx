import React, { Component } from 'react';
import {BrowserRouter as Router, Link, Switch, Route} from 'react-router-dom';  //import for page navigation

//Component exports
import Side_nav from '../global_components/side_navigation';

//CSS imports
import '../global_components_css/contacts_component.css';

//Bootstrap CSS imports
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.rtl.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.rtl.min.css';
import '../../node_modules/bootstrap/dist/css/bootstrap-grid.css';
import '../../node_modules/bootstrap/dist/css/bootstrap-utilities.css';

class Contact_Component extends Component {
    state = {  }
    render() { 

      return ( 

        <div className="fill-window container-fluid">
            <div className="row fill-height no-padding">
              <nav className="side-nav-column no-padding">
                
                <Side_nav />
             
              </nav>
              <div className="col">
                {/*<p className="logo fw-bold text-center fs-1">
                  LOGO
                </p>*/}
                <div class="d-flex">
                  <div className="flex-grow-1">1</div>
                  <div className="flex-grow-1 text-center">
                    
                    <p className="logo fw-bold text-center fs-1">
                      CONTACTS
                    </p>
                    <div class="d-flex">
                      <div className="flex-grow-1">1</div>
                      <input className="contacts-search-bar search-bar-uni bg-dark p-4" />
                      <div className="flex-grow-1">1</div>
                    </div>

                  </div>
                  <div className="flex-grow-1">3</div>
                </div>
                
                {/* FILLER CONTAINER */}
                <div className="container">
                 <div className="row filler-xs">
                   <div className="col">
                   </div>
                   <div className="col">
                   </div>
                 </div>
                </div>

                <div className="d-flex">
                  <div className="flex-shrink-1">1</div>
                  <div className="flex-grow-1 text-center">
                    <div className="d-flex justify-content-center">
                      <div className="contact-item bg-light shadow-sm d-flex">

                        <div className="profile-icon bg-secondary m-4"></div>
                        <div className="profile-icon bg-secondary m-4"></div>
                        <div className="ms-auto profile-icon bg-secondary m-4"></div>

                      </div>
                    </div>
                  </div>
                  <div className="flex-shrink-1">3</div>
                </div>
               

              </div>
            
            </div>
        </div>   
        

      );
    }
}   
 
export default Contact_Component
