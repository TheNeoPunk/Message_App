import React, { Component } from 'react';
import {BrowserRouter as Router, Link, Switch, Route} from 'react-router-dom';  //import for page navigation
import Axios from 'axios';
import AuthChat from './AuthChat';

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
    
    constructor(props){

      super(props);
      //Creates fullName property before component is attached
      
      this.state = { 

        user_friends_list: []

      };
    
    };

    componentDidMount = () => {

      var friends_list = JSON.parse(localStorage.getItem('friends_list'));

      if(this.state.user_friends_list.length >= localStorage.getItem('friends_list').length){

        friends_list.length = localStorage.getItem('friends_list').length;

      }

      console.log(friends_list[0]);

      this.setState({

        user_friends_list: friends_list

      });
        
    }

    componentDidUpdate = () => {

      console.log(this.state.user_friends_list[0]);

    }

    activateChat = () => {

      AuthChat.authorize_Chat = true;

    }

    render() { 

      return ( 

        <div className="fill-window container-fluid">
            <div className="row fill-height no-padding">
              
              <Side_nav />
            
              <div className="col">
                {/*<p className="logo fw-bold text-center fs-1">
                  LOGO
                </p>*/}
                <div class="d-flex">
                  <div className="flex-grow-1"></div>
                  <div className="flex-grow-1 text-center">
                    
                    <p className="logo fw-bold text-center fs-1">
                      CONTACTS
                    </p>
                    <div class="d-flex">
                      <div className="flex-grow-1"></div>
                      <input className="contacts-search-bar search-bar-uni bg-dark p-4" placeholder="Lorem Ipsum..." />
                      <div className="flex-grow-1"></div>
                    </div>

                  </div>
                  <div className="flex-grow-1"></div>
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
                
                {/* --------CONTACT RESULTS--------- */}
                {this.state.user_friends_list.map(curr_friends => 
                  
                  <div className="d-flex m-3 pe-auto" onClick={this.activateChat()} style={{cursor: "pointer"}}>
                  <div className="flex-shrink-1"></div>
                  <div className="flex-grow-1">
                    <div className="d-flex justify-content-center">
                      <div className="contact-item bg-light shadow-sm d-flex">

                        
                          <div className="profile-icon bg-secondary m-5"></div>
                         
                          <div className="align-self-center">
                            <p className="h4">{curr_friends}</p>
                            <p>Lorem Ipsum</p>
                          </div>
                         
                          <div className="ms-auto status-icon m-5 rounded-circle align-self-center"></div>

                      </div>
                    </div>
                  </div>
                  <div className="flex-shrink-1"></div>
                  </div>
                  
                )}

              </div>
            
            </div>
        </div>   
        

      );
    }
}   
 
export default Contact_Component
