import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Link, Switch, Route, Redirect} from 'react-router-dom';  //import for page navigation
import Axios from 'axios';
import auth from "../dashboard_page_component/isAuthenticated";

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
import Intro from './intro_component';

//Side_Div component of landing page
class Login_Form extends Component {

     //Initialize stae properties before component is attached to App.js
    constructor(props){

        super(props);
        //Creates fullName property before component is attached
        this.state = { 

            auth_email: null,
            auth_pass: null,
            auth_phone: null,
            auth_name: null,
            un_auth_user_mssg: null,
            auth_to_redir: false

        };
    };

    //Handle form submission to backend server
    handleSubmit = (event) => {

        auth.authenticated = true;
        //console.log(auth.authenticated)
        const auth_Data = this.state;
        //console.log(auth_Data.auth_email, auth_Data.auth_pass);
        
        //********************LOGIN DATA REQUEST********************************* */

        //Send input data to login path in backend server
        Axios.post("http://localhost:3001/login", {

            auth_email: auth_Data.auth_email,
            auth_pass: auth_Data.auth_pass

        }).then((response) => { //Log any errors

            //If there are incorrect creds
            if(response.data.message){

                //Render message from backend server
                this.setState({

                    un_auth_user_mssg: response.data.message

                });
                console.log(response);

                
            } //Else if there is a match
            else if(response.data){

                console.log(response.data);

                //Assign SQL data request to local session data
                localStorage.setItem('email', response.data[0].user_email);
                localStorage.setItem('phone', response.data[0].user_phone);
                localStorage.setItem('fullName', response.data[0].user_name);
                localStorage.setItem('auth_req', response.data[0].incoming_friend_req);
                localStorage.setItem('auth_activity', response.data[0].recent_activity);
                localStorage.setItem('auth_total_activity', response.data[0].total_activity);
                localStorage.setItem('auth_number_of_friends', response.data[0].number_of_friends);
                localStorage.setItem('auth_num_of_contacts', response.data[0].num_of_contacts);
                localStorage.setItem('auth_mssg_sent', response.data[0].messages_sent);

                //Authorize a redirect
                this.setState({

                    auth_to_redir: true

                });

                //Enable authentication
                
                console.log(response);

            }
           
        });

        
        
        event.preventDefault();
        
    }


    //Handles email input
    handleEmailAuth = (email) => {

        email.preventDefault();

        this.setState({

            auth_email: email.target.value

        });

    }

    //Handles pass input
    handlePassAuth = (pass) => {

        this.setState({

            auth_pass: pass.target.value

        });

    }


    render() { 

        
        /*
        const auth_email = this.state.auth_email;
        const auth_pass = this.state.auth_pass;
        */
        

        //Render unauthorized message
        const un_auth_user_mssg = this.state.un_auth_user_mssg;

        const auth_email = localStorage.getItem('auth_email');
        const auth_name = localStorage.getItem('fullName');
        const auth_phone = localStorage.getItem('auth_phone');
        const auth_req = localStorage.getItem('auth_req');
        const auth_activity = localStorage.getItem('auth_activity');
        const auth_total_activity = localStorage.getItem('auth_total_activity');
        const auth_number_of_friends = localStorage.getItem('auth_number_of_friends');
        const auth_short_desc = localStorage.getItem('auth_short_desc');
        const auth_mssg_sent = localStorage.getItem('auth_mssg_sent');

        //If login credential is authorized
        if(this.state.auth_to_redir){

            //Redirect with existing user data
            //console.log(this.state.auth_to_redir);
            return <Redirect to={{

                pathname: "/dashboard",
                state: {

                    user_name: auth_email,
                    email: auth_name,
                    phone: auth_phone,
                    pass: auth_req,
                    activity: auth_activity,
                    total_activity: auth_total_activity,
                    number_of_friends: auth_number_of_friends,
                    short_desc: auth_short_desc,
                    mssg_sent: auth_mssg_sent 

                }
                

            }} />

        }

        return ( 

            <div className="fill-window container-fluid bg-light">
                {/* Main App Container */}

                <div className="row fill-height"> 

                    <div id="side_component" class="col-5 fs-1 fw-bold side_component" >
                    {/* Side Intro Component*/} 
                    <Intro />
                
                    </div>   

                    <div id="register_component" class="col-7">  
                      {/* Entire Register form goes here */}

                        {/*Filler Space container*/}
                        <div className="container p-4">
                            <div className="row filler-xs">
                              <div className="col">

                              </div>
                              <div className="col-10 no-match-pass-div rounded-3">

                                <p className="text-danger fw-bold"> {un_auth_user_mssg} </p>

                              </div>
                              <div className="col">

                              </div>
                            </div>
                        </div>   
                        
                        {/* LOGO Placeholder */}
                        <p className="logo fw-bold text-center fs-1">
                            LOGO
                        </p>

                        {/* Filler Space Container */}
                        <div className="container">
                            <div className="row filler">
                              <div className="col">

                              </div>
                              <div className="col">

                              </div>
                            </div>
                        </div>  

                        {/* Register form container */}
                        <div className="container main-font-color">
                            <div className="row">
                                <div className="col">

                                </div>
                                <div className="col-10" >

                               {/* Register form */}
                                {/* On submission, input data is transmitted into these method calls */}
                                    <form>
                                        {/* Register form HEADER */}
                                        <div className="register-title">
                                            <div className="fw-bold fs-1">
                                                <span>Lorem Ipsum</span>
                                            </div>
                                            <div className="fs-6">
                                                <span>Lorem ipsum dolor sit amet</span>
                                            </div>
                                        </div>
                                        <div className="container">
                                            <div className="row filler-xs">
                                              <div className="col">

                                              </div>
                                              <div className="col">

                                              </div>
                                            </div>
                                        </div>   

                                        {/* Form inputs */}
                                        <div className="register-input position-relative ">

                                            <div className="top-50">
                                                
                                                <div><input className="p-2" type="email" name="email" defaultValue="EMAIL" onChange={this.handleEmailAuth}/></div> <br/>
                                                <div><input className="p-2" type="text" name="pass" defaultValue="PASSWORD" onChange={this.handlePassAuth}/></div><br/>
                                               
                                            </div>
                                            
                                            <br/>

                                            <div className="container left-20 top-20">
                                                <div className="row">
                                                    <div className="col-auto">

                                                        <input className="form-check-input" type="checkbox" id="" />
                                                        <span className="p-3">lorem Ipsum</span>

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

                                            {/* Register form SUBMISSION BUTTON */}
                                            <div className="container position-relative">
                                                <div className="row filler">
                                                  <div className="col">

                                                  </div>
                                                  <div className="col text-center">

                                                    <button 
                                                        className="rounded-pill fs-3 fw-bold "
                                                        onClick={
                                                            this.handleSubmit
                                                        }
                                                    >
                                                        Login
                                                    </button>
                                                        <Link 
                                                            style={{textDecoration: 'none'}} 
                                                            to='/'>
                                                            <p 
                                                                className="fw-bold" 
                                                                style={{color: '#3966C1'}}>
                                                                    register intead
                                                            </p>
                                                        </Link>
                                                  </div>
                                                  <div className="col">

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

                    </div>
              
                </div>
            </div>
           
        );
    }
}

export default Login_Form;