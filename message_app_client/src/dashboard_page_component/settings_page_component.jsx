import React, { Component } from 'react';
import {BrowserRouter as Router, Link, Switch, Route} from 'react-router-dom';  //import for page navigation

//Icon imports
import {BsPencil} from "react-icons/bs";

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
                  Settings
                </p>
                <div class="container ">
                  <div class="row">
                    <div class="col-3 setting-nav">
                      <div className="setting-container bg-light shadow p-4">

                        <div>Lorem Ipsum</div>
                        <div>Lorem Ipsum</div>
                        <div>Lorem Ipsum</div>

                      </div>
                    </div>
                    
                    <div className="col-8">

                      <div className="d-flex justify-content-center">

                        <div className="flex-grow-1"></div>
                        <div className="acc-portrait rounded-circle"></div>
                        <div className="flex-grow-1 d-flex">

                          <div className="flex-grow-1"></div>
                          <div className="ms-auto acc-edit-button"><BsPencil/></div>

                        </div>

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
                      
                      <div className="d-flex justify-content-center">

                        <form className="account-sett">

                          <div className="container">
                            <div className="row">

                              <div className="d-flex m-2">

                                <input className="m-2 p-2" type="text" placeholder="EMAIL" />
                                <input className="m-2 p-2" type="text" placeholder="PHONE" />

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

                              <div className="d-flex m-2">

                                <input className="m-2 p-2" type="text" placeholder="FULL NAME" />
                                <input className="m-2 p-2" type="text" placeholder="PASSWORD"/>

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

                              <div className="d-flex m-2">

                              <textarea className="fill-width" maxlength="200">
                                At w3schools.com you will learn how to make a website. They offer free tutorials in all web development technologies.
                              </textarea>

                              </div>

                            </div>
                            
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

                          <div className="d-flex justify-content-center">
                            <button className="rounded-pill fs-3 fw-bold " type="submit"> Button </button>
                          </div>

                        </form>

                      </div>

                    </div>
                    <div class="col-1">
                      
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
