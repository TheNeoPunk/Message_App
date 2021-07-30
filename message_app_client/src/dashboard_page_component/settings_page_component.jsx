import React, { Component } from 'react';
import {BrowserRouter as Router, Link, Switch, Route} from 'react-router-dom';  //import for page navigation

//Component exports
import Side_nav from '../global_components/side_navigation';

//CSS imports
import '../global_components_css/settings_component.css'
import '../App.css'

//Bootstrap CSS imports
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.rtl.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.rtl.min.css';
import '../../node_modules/bootstrap/dist/css/bootstrap-grid.css';
import '../../node_modules/bootstrap/dist/css/bootstrap-utilities.css';

class Setting_Component extends Component {

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
                <div class="container ">
                  <div class="row">
                    <div class="col-3 setting-nav">
                      <div className="setting-container bg-light shadow p-5">

                        Hello World

                      </div>
                    </div>
                    <div className="col-8">

                      <div className="d-flex justify-content-center">

                        <div className="flex-grow-1">1</div>
                        <div className="acc-portrait rounded-circle"> Hello World</div>
                        <div className="flex-grow-1">
                          
                          <div className="ms-auto acc-edit-button"></div>

                        </div>

                      </div>
                      
                      <div className="d-flex justify-content-center">

                        <form>

                          <div className="container">
                            <div className="row">

                              <div className="d-flex">

                                <input type="text" />
                                <input type="text" />

                              </div>

                              <div className="d-flex">

                                <input type="text" />
                                <input type="text" />

                              </div>

                            </div>
                            
                          </div>
                          
                          <button> Button </button>
                        </form>

                      </div>

                    </div>
                    <div class="col-1">
                      Column
                    </div>
                  </div>
                </div>

              </div>
            
            </div>
        </div>   
        

      );
    }
}   
 
export default Setting_Component
