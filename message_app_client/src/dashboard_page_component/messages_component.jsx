import React, { Component } from 'react';
import {BrowserRouter as Router, Link, Switch, Route} from 'react-router-dom';  //import for page navigation

//ICON imports
import { BsPlusCircle } from "react-icons/bs";
import { BsUpload } from "react-icons/bs";
import { BsFillGridFill } from "react-icons/bs";

//Component exports
import Side_nav from '../global_components/side_navigation';

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
      
        message_box_one: [1 , 2 , 3 , 4],
        message_box_two: [1 , 2 , 3 , 4]
      
      }
    }
    
    render() { 
      return ( 
          //Main container
          <div className="fill-window container-fluid">
              <div className="row fill-height no-padding">
                {/*---SIDE NAV---- */}
                <nav className="side-nav-column no-padding">
                  <Side_nav />
                </nav>

                {/*---MESSAGE COMPONENT---- */}
                <div className="col d-flex no-padding">
                
                  {/*---INCOMING MESSAGES----*/}
                  <div className="fill-height message-board" > 

                    {/*---SUB TITLE----*/}
                    <div class="d-flex message-box-title mb-3">
                      <div class="me-auto ">Flex item</div>
                      <div class="ms-auto ">Flex item</div>
                    </div>
                  
                    {/*---MESSAGE CATEGORY ITEMS----*/}
                    <div class="d-flex flex-column bd-highlight mb-3">
                      {this.state.message_box_one.map(m_item => <div class="p-2 bd-highlight message-box-item">{m_item}</div>)}
                    </div>

                    <div class="d-flex flex-column bd-highlight mb-3">
                      {this.state.message_box_two.map(m_item => <div class="p-2 bd-highlight message-box-item">{m_item}</div>)}
                    </div>

                  </div>

                  {/*---SEARCH MESSAGES---- */}
                  <div className="fill-height message-search-container">
                    
                    {/*---SEARCH BOX----*/}
                    <div class="message-search-box">
                      Search Bar
                    </div>
                    
                  </div>
                  
                  {/*---MESSAGE CHAT---- */}
                  <div className="fill-height message-box no-padding align-items-start d-flex flex-grow-1 flex-column">
                    {/*---HEADER BAR----*/}
                    <div class="mb-auto message-chat-header border-bottom border-primary p-4 fill-width">
                      Header
                    </div>
                    
                    <div className="message-chat-box border-primary p-4 fill-width d-flex ">

                     
                      <div className="p-2">

                        <BsPlusCircle/>

                      </div>
                      <div className="message-box-input fill-width p-2">
                        
                        <input type="text" />
                      
                      </div>
                      
                      <div className="ms-auto p-2">

                        <BsUpload/>

                      </div>
                     
                    
                    </div>
                
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
                            
                            <p>Lorem Ipsum</p>
                            <p>Lorem Ipsum</p>
                            
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