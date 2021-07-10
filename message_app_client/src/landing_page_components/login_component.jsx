import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Link, Switch, Route} from 'react-router-dom';  //import for page navigation
import Axios from 'axios';


//CSS Imports
import '../landing_page_css/form_component.css';
import '../App.css';

//Bootstrap CSS imports
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.rtl.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.rtl.min.css';
import '../../node_modules/bootstrap/dist/css/bootstrap-grid.css';
import '../../node_modules/bootstrap/dist/css/bootstrap-utilities.css';

//Component imports
import pass_check from './inc_pass_component';


//Side_Div component of landing page
class Login_Form extends Component {

    render() { 

        return ( 
            
           <React.Fragment>

             {/* FILLER CONTAINER */}
            <div class="container">
                <div class="row filler-s">
                  <div class="col">
                 
                  </div>
                  <div class="col">
                   
                  </div>
                </div>
            </div>   

            {/* Logo placeholder */}
            <p className="logo fw-bold text-center fs-1">
                LOGO
            </p>

             {/* FILLER CONTAINER */}
            <div class="container">
                <div class="row filler">
                  <div class="col">
                 
                  </div>
                  <div class="col">
                   
                  </div>
                </div>
            </div>  

            <div class="container main-font-color">
                 {/* Login form title header */}
                <div className="row">
                    <div className="col">
                    
                    </div>
                    <div className="col-10" >

                        {/*Login form submission */}
                        {/* On submission, input data is transmitted into these method calls */}
                        <form>
                            <div className="register-title">
                                <div className="fw-bold fs-1">
                                    <span>Lorem Ipsum</span>
                                </div>
                                <div className="fs-6">
                                    <span>Lorem ipsum dolor sit amet</span>
                                </div>
                            </div>
                            <div class="container">
                                <div class="row filler-xs">
                                  <div class="col">

                                  </div>
                                  <div class="col">

                                  </div>
                                </div>
                            </div>   
                            <div className="register-input position-relative">

                                <div className="top-50">
                                    <div><input className="p-2"type="text" id="fname" name="fname" defaultValue="EMAIL"/></div> <br/>
                                    <div><input className="p-2"type="text" id="fname" name="fname" defaultValue="PASSWORD"/></div> <br/>
                                </div>
                                
                                 {/* CHECKBOX */}
                                <div className="container left-20">
                                    <div className="row">
                                        <div class="col-auto">

                                            <input class="form-check-input" type="checkbox" id="" />
                                            <span className="p-3">lorem Ipsum</span>

                                        </div>
                                    </div>
                                </div>

                                 {/* FILLER CONTAINER */}
                                <div class="container">
                                <div class="row filler-xs">
                                  <div class="col">

                                  </div>
                                  <div class="col">

                                  </div>
                                </div>
                                </div>


                                 {/* LOGIN SUBMISSION */}
                                <div class="container position-relative">
                                    <div class="row filler">
                                      <div class="col">

                                      </div>
                                      <div class="col text-center">
                                        
                                        <button className="rounded-pill fs-3 fw-bold ">Login</button>
                                        <Link 
                                                style={{textDecoration: 'none'}} 
                                                to='/'>
                                                <p className="fw-bold" style={{color: '#3966C1'}}>register intead</p>
                                        </Link>
                                        
                                      </div>
                                      <div class="col">

                                      </div>
                                    </div>
                                </div>  

                            </div>
                        </form>
                    </div>
                    <div className="col">
                    
                    </div>
                </div>
            </div> 
           </React.Fragment>        
           
        );
    }
}
 
export default Login_Form;