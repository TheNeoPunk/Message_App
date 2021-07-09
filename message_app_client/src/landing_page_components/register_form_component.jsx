import React, { Component } from 'react';
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

//Component Imports
import Login_Component from './login_component';

//Side_Div component of landing page
class Register_Form extends Component {
    
    //Initialize stae properties before component is attached to App.js
    constructor(props){

        super(props);
        //Creates fullName property before component is attached
        this.state = { 

            fullName: null,
            email: null,
            phone: null,
            password: null,
            passConfirm: null

        }
    }

    //Handles all form data and takes in submission event of form
    handleSubmit = (event) => {

        event.preventDefault(); //Prevents default data from being submitted
        const finalData = this.state;
        console.log('final data:', finalData);
        console.log(finalData.password);

        //Link front end to back end after grabbing user data from state object
        Axios.post("http://localhost:3001/api/insert", {

            user_name: finalData.fullName, 
            user_email: finalData.email, 
            user_phone: finalData.phone, 
            user_pass: finalData.password

        }).then(() => { //Debug

            alert('Success');

        })
    }

    //Handles input value and stores user input in form
    handleNameInputChange = (fullName) => {

        fullName.preventDefault();

        //Grabs the input name and value from the submission method call
        //console.log(event.target.value);

        //Configures state object to whatever value is in the method
        this.setState({

            //Assigns input value to state props to be displayed
            fullName: fullName.target.value

        });

    }

    //Handles input value and stores user input in form
    handleNameEmailChange = (email) => {

        email.preventDefault();

        //Grabs the input name and value from the submission method call
        //console.log(email.target.value);

        //Configures state object to whatever value is in the method
        this.setState({

            //Assigns input value to state props to be displayed
            email: email.target.value

        });

    }

    //Handles input value and stores user input in form
    handleNamePhoneChange = (phone) => {

        phone.preventDefault();

        //Grabs the input name and value from the submission method call
        //console.log(email.target.value);

        //Configures state object to whatever value is in the method
        this.setState({

            //Assigns input value to state props to be displayed
            phone: phone.target.value

        });

    }

    //Handles input value and stores user input in form
    handleNamePassChange = (pass) => {

        pass.preventDefault();

        //Grabs the input name and value from the submission method call
        //console.log(email.target.value);

        //Configures state object to whatever value is in the method
        this.setState({

            //Assigns input value to state props to be displayed
            password: pass.target.value

        });

    }
    
    //Handles input value and stores user input in form
    handleNamePassConChange = (passC) => {

        passC.preventDefault();

        //Grabs the input name and value from the submission method call
        //console.log(email.target.value);

        //Configures state object to whatever value is in the method
        this.setState({

            //Assigns input value to state props to be displayed
            passConfirm: passC.target.value

        });

    }
    
    //Renders register form component
    render() { 

        //Stores full name value from form
        //Prepared for dynamic updating on render
        const {fullName} = this.state;
        const {email} = this.state;
        const {phone} = this.state;
        const {password} = this.state;
        const {passConfirm} = this.state;

        return ( 
           
           <React.Fragment>

            {/*Rendering test for form data from handleInputChange*/}
            {/*<p>Name is {fullName}</p>
            <p>Email is {email}</p>
            <p>Phone is {phone}</p>
            <p>Pass is {password}</p>
        <p>Match is {passConfirm}</p>*/}

            {/*Filler Space container*/}
            <div class="container">
                <div class="row filler-s">
                  <div class="col">
                 
                  </div>
                  <div class="col">
                   
                  </div>
                </div>
            </div>   

            {/* LOGO Placeholder */}
            <p className="logo fw-bold text-center fs-1">
                LOGO
            </p>

            {/* Filler Space Container */}
            <div class="container">
                <div class="row filler">
                  <div class="col">
                 
                  </div>
                  <div class="col">
                   
                  </div>
                </div>
            </div>  

            {/* Register form container */}
            <div class="container main-font-color">
                <div className="row">
                    <div className="col">
                    
                    </div>
                    <div className="col-10" >

                   {/* Register form */}
                    {/* On submission, input data is transmitted into these method calls */}
                        <form onSubmit={this.handleSubmit}>
                            {/* Register form HEADER */}
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

                            {/* Form inputs */}
                            <div className="register-input position-relative">

                                <div className="top-50">
                                    <div><input className="p-2" type="text" name="fname" defaultValue="FULL NAME" onChange={this.handleNameInputChange}/></div> <br/>
                                    <div><input className="p-2" type="text" name="email" defaultValue="EMAIL" onChange={this.handleNameEmailChange}/></div> <br/>
                                    <div><input className="p-2" type="text" name="phone" defaultValue="PHONE" onChange={this.handleNamePhoneChange}/></div> <br/>
                                    <div className="d-inline"><input style={{width: '50%'}} className="p-2" type="text" name="pass" defaultValue="PASSWORD" onChange={this.handleNamePassChange}/></div>
                                    <div className="d-inline"><input style={{width: '50%'}} className="p-2" type="text" name="cpass" defaultValue="CONFIRM PASSWORD" onChange={this.handleNamePassConChange}/></div>
                                </div>
                                <br/>
                                <div className="container left-20 top-20">
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

                                {/* Register form SUBMISSION BUTTON */}
                                <div class="container position-relative">
                                    <div class="row filler">
                                      <div class="col">

                                      </div>
                                      <div class="col text-center">
                                        
                                        <button 
                                            className="rounded-pill fs-3 fw-bold ">
                                                Register
                                        </button>
                                            <Link 
                                                style={{textDecoration: 'none'}} 
                                                to='/login'>
                                                <p 
                                                    className="fw-bold" 
                                                    style={{color: '#3966C1'}}>
                                                        login intead
                                                </p>
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
 
export default Register_Form;