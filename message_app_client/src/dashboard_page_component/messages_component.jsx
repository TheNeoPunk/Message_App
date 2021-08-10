import React, { Component } from 'react';
import {BrowserRouter as Router, Link, Switch, Route} from 'react-router-dom';  //import for page navigation
import Axios from 'axios';
import auth from "./isAuthenticated";

//ICON imports
import { BsGrid1X2Fill, BsPlusCircle } from "react-icons/bs";
import { BsUpload } from "react-icons/bs";
import { BsFillGridFill } from "react-icons/bs";
import { BsPersonPlus } from "react-icons/bs";
import {BsFillGrid3X2GapFill} from "react-icons/bs";
import {BsFillCameraVideoFill} from "react-icons/bs";
import {BsPhone} from "react-icons/bs";

//Component imports
import Side_nav from '../global_components/side_navigation';
import RenderMessage from './message_render_component';

//CSS imports
import '../global_components_css/main_page_component.css';
import '../App.css';
import '../global_components_css/message_component.css';

//Bootstrap CSS imports
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.rtl.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.rtl.min.css';
import '../../node_modules/bootstrap/dist/css/bootstrap-grid.css';
import '../../node_modules/bootstrap/dist/css/bootstrap-utilities.css';

class Message_Component extends Component {

    constructor(props){

      super(props);
      //
      this.state = { 
      
        message_box_one: [
        {

          item: 'Lorem Ipsum',
          mssg_data: localStorage.getItem("auth_req")

        } , 
        {

          item: 'Lorem Ipsum',
          mssg_data: localStorage.getItem("auth_mssg_sent")

        },
        {

          item: 'Lorem Ipsum',
          mssg_data: localStorage.getItem("")

        },
        {

          item: 'Lorem Ipsum',
          mssg_data: localStorage.getItem("")

        }],
        message_box_two: ['Lorem Ipsum' , 'Lorem Ipsum' , 'Lorem Ipsum' , 'Lorem Ipsum'],
        sent_data: null
      
      }
    }

    handleMssg = (event) => {

      
      /* Axios.post('http://localhost:3001/sendMessage',{
        auth_message: ,
        auth_message_user:,
        auth_message_data:

      })*/
      
      
      this.setState({

        sent_data: event.target.value

      });

      

      event.preventDefault();

    }

    handleMssgData = (event) => {

      event.preventDefault();
     
      Axios.post('http://localhost:3001/sendMessage', {

        auth_message: this.state.sent_data,
        auth_message_user: localStorage.getItem("fullName")

      }).then((response => {

        console.log(response.data);
        //console.log(response.data[0].message, response.data[0].name);

      }));

    }
    
    render() { 

      return ( 
          //Main container
          <div className="fill-window container-fluid">
              <div className="row fill-height no-padding">
                {/*---SIDE NAV---- */}
      
                <Side_nav />

                {/*---MESSAGE COMPONENT---- */}
                <div className="col d-flex no-padding">
                
                  {/*---INCOMING MESSAGES----*/}
                  <div className="fill-height message-board" > 

                    {/*---SUB TITLE----*/}
                    <div class="d-flex message-box-title mb-3">
                      <div class="me-auto h3 fw-bold p-3">Lorem Ipsum</div>
                      <div class="flex-grow-1"></div>
                      <div class="ms-auto p-3"> <BsPersonPlus className="" /> </div>
                    </div>
                  
                    {/*---MESSAGE CATEGORY ITEMS----*/}
                    <div className="d-flex flex-column bd-highlight mb-3">

                      {this.state.message_box_one.map(m_item => 
                      <div className="p-2 bd-highlight fw-bold message-box-item d-flex">
                        <div className="">{m_item.item}</div>
                        <div className="flex-grow-1"></div>
                        <div className="mssg-inbox-data-item">{m_item.mssg_data}</div>
                      </div>)}

                    </div>

                    <div class="d-flex flex-column bd-highlight mb-3">
                      {this.state.message_box_two.map(m_item => 
                        <div class="p-2 bd-highlight fw-bold message-box-item d-flex">
                          <div>{m_item}</div>
                          <div className="flex-grow-1"></div>
                          <div className="mssg-inbox-data-item">0</div>
                        </div>)}
                    </div>

                  </div>

                  {/*---SEARCH MESSAGES---- */}
                  <div className="fill-height message-search-container">
                    
                    {/*---SEARCH BOX----*/}
                    <div class="message-search-box">
                      <input className="fill-width search-bar-uni message-search-bar bg-dark p-4" placeholder="Lorem Ipsum..." />
                    </div>

                    {/* ------- RESULT ITEMS CONTAINER------- */}
                    <div className="result-item-container">

                      {/* ------- RESULT ITEMS------- */}
                      <div className="result-item d-flex">

                        <div className="src-portrait bg-light rounded-circle m-4"></div>
                        <div className="result-item-text no-padding">
                          <p className="h5">Lorem Ipsum</p>
                          <p>Lorem Ipsum</p>
                        </div>
                        <div className="flex-grow-1"></div>
                        <div className="m-4 ms-auto">
                          <BsFillGrid3X2GapFill />
                          <p>Lorem</p>
                        </div>

                      </div>

                    </div>
                    
                  </div>
                  
                  {/*---MESSAGE CHAT---- */}
                  <div className="fill-height message-box no-padding align-items-start d-flex flex-grow-1 flex-column">
                    {/*---HEADER BAR----*/}
                    <div class="mb-auto message-chat-header fw-bold border-bottom border-primary p-4 fill-width d-flex">
                      <div className="flex-grow-1 no-padding"><p>Lorem ipsum dolor...</p></div>
                      <div className="d-flex ms-auto mssg-hdr-icons">
                        <div className=""><BsFillCameraVideoFill /></div>
                        <div className=""><BsPhone /></div>
                      </div>
                    </div>

                    {/*------MESSAGE DISPLAY --------*/}
                    <RenderMessage />
                      
                    <form>
                      {/*------MEDSSAGE INPUT --------*/}
                      <div className="message-chat-box border-primary p-4 fill-width d-flex">
                        
                        <div className="p-2">

                          <BsPlusCircle/>

                        </div>
                        <div className="message-box-input fill-width p-2">

                          <input className="p-2" type="text" name="message" onChange={this.handleMssg}/>
                        
                        </div>
                        
                        <div className="ms-auto p-2">
                          <button onClick={this.handleMssgData} role="button">
                            <BsUpload/>
                          </button>
                        </div>
                        
                        
                      </div>
                    </form>
                
                  </div>
                  
                  {/*---MESSAGE RECEIVER PROFILE---- */}
                  <div className="fill-height message-profile no-padding">

                     {/*------- */}
                    <div>
                      {/*------- */}
                      <div className="msg-receiver-header d-flex mb-3">
                        <div className="p-2 bd-highlight flex-grow-1"></div>
                        <div className="p-2 bd-highlight flex-grow-1"></div>
                        <div className="ms-auto p-3 bd-highlight"><BsFillGridFill/></div>
                      </div>
                    </div>

                    {/*------- */}
                    <div>
                      {/*------- */}
                      <div className="msg-receiver-header d-flex">
                        <div className="p-2 flex-grow-1"></div>
                        <div className="p-2">
                          <div className="mssg-portrait bg-secondary"></div>
                         
                          <div className="text-center">
                            
                            <p className="no-margin h4">Lorem Ipsum</p>
                            <p className="no-margin">Lorem Ipsum</p>
                            
                          </div>

                          
                        </div>
                        <div className="p-2 flex-grow-1"></div>
                      </div>
                    </div>

                    {/*------- */}
                    <div>
                      {/*------- */}
                      <div className="msg-receiver-header d-flex">
                        <div className="flex-grow-1"></div>
                        <div className="p-2 bd-highlight">
                          <p>Lorem Ipsum</p>
                          <p>Lorem Ipsum</p>
                          <p>Lorem Ipsum</p>
                          <p>Lorem Ipsum</p>
                        </div>
                        <div className="flex-grow-1"></div>
                        <div className="p-2 bd-highlight">
                          
                          <p>Lorem Ipsum</p>
                          <p>Lorem Ipsum</p>
                          <p>Lorem Ipsum</p>
                          <p>Lorem Ipsum</p>

                        </div>
                        <div className="flex-grow-1"></div>
                      </div>
                    </div>
                    

                  </div>

                  
                  
                </div>
              
              </div>
          </div>   
      );
  }
}
 
export default Message_Component;