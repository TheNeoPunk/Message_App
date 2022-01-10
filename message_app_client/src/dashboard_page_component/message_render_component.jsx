import React, { Component } from 'react';
import Axios from 'axios';

//ICON imports
import { BsGrid1X2Fill, BsPlusCircle } from "react-icons/bs";
import { BsUpload } from "react-icons/bs";
import { BsFillGridFill } from "react-icons/bs";
import { BsPersonPlus } from "react-icons/bs";
import {BsFillGrid3X2GapFill} from "react-icons/bs";
import {BsFillCameraVideoFill} from "react-icons/bs";
import {BsPhone} from "react-icons/bs";
import AuthChat from './AuthChat';


//Component imports
import MessageHeader from './msg_chat_header';

//Grab messages from the sender and the receiver


function SortChat (authchat_messages) {

  var total_messages = [];

  var date_Sample = new Date(authchat_messages.messageList[0].mssg_date);

  //console.log(authchat_messages.messageList[0].sender);
  console.log(authchat_messages.messageList.length);
  //console.log(localStorage.getItem('fullName'));

  //Go through the chat list of the current sender and receiver and sort them 
  for(var x = 0; x <= authchat_messages.messageList.length-1; x++){

    //console.log(x)
    // console.log(authchat_messages.messageList[x].sender)
    
  //Send to sender list
    if(authchat_messages.messageList[x].sender == localStorage.getItem('fullName')){

      console.log('These messages are from the sender');

      total_messages.push(
    
        <div className="message-item-box p-4 fill-width d-flex">
          <div className="message-chat-icon bg-light rounded-circle shadow"></div>
          <div className="flex-grow-1"></div>
          <div className="message-chat-div p-2 fill-width fill-height rounded-pill"> {authchat_messages.messageList[x].chat_message}  </div>
        </div>
                       
      ); 

      //Send to receiver sender list
    }else if(authchat_messages.messageList[x].sender != localStorage.getItem('fullName')){

      console.log('These messages are for the receiver');

      total_messages.push(  
        <div className="message-item-box p-4 fill-width d-flex flex-row-reverse">
          <div className="message-chat-icon bg-light rounded-circle shadow"></div>
          <div className="flex-grow-1"></div>
          <div className="message-chat-div p-2 fill-width fill-height rounded-pill">{authchat_messages.messageList[x].chat_message}</div>
        </div>
      );

    }
  
  }

  //console.log( sender_messages);
  //console.log( receiver_messages);
  //console.log( authchat_messages.messageList[0].mssg_date)
  //console.log( date_Sample.getTime() );
  return total_messages

}

class RenderMessage extends Component {
    
    constructor(props) {
        
      super(props);

      this.state = { 
        chat_enable: AuthChat.authorize_Chat,
        existing_messages: AuthChat.exist_chat_messages,
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

        //console.log(response.data);
        //console.log(response.data[0].message, response.data[0].name);

      }));

    }

    componentDidMount = () => {

      AuthChat.authorize_Chat = false;
      //console.log(AuthChat.exist_chat_messages);
      //console.log('mounted');
      this.setState({

        existing_messages: AuthChat.exist_chat_messages

      })
   
    }

    render() {

      
        if(this.state.chat_enable === true){

            return ( 

                <div className="fill-height message-box no-padding align-items-start d-flex flex-grow-1 flex-column">
                    
                    {/*------MESSAGE DISPLAY --------*/}
                    {/*---HEADER BAR----*/}
                    <div class="mb-auto message-chat-header fw-bold border-bottom border-primary p-4 fill-width d-flex">
                      <div className="flex-grow-1 no-padding"><p>Lorem ipsum dolor...</p></div>
                      <div className="d-flex ms-auto mssg-hdr-icons">
                        <div className=""><BsFillCameraVideoFill /></div>
                        <div className=""><BsPhone /></div>
                      </div>
                    </div>

                    <div id="mssg-input-container" className="fill-width">
    
                      {/*----MESSAGE DISPLAY ITEM----- */}
                      
                      <SortChat messageList={this.state.existing_messages} />

                      {/* Receiver */}
                      
                      {/*<div className="message-item-box p-4 fill-width d-flex flex-row-reverse">
                        <div className="message-chat-icon bg-light rounded-circle shadow"></div>
                        <div className="flex-grow-1"></div>
                        <div className="message-chat-div p-2 fill-width fill-height rounded-pill">Lorem Ipsum Dolor</div>
                      </div>*/}

                      {/* Sender */}

                      {/* {this.state.existing_messages.map(chat_item => 
                       <React.Fragment>
                          <div className="message-item-box p-4 fill-width d-flex">
                            <div className="message-chat-icon bg-light rounded-circle shadow"></div>
                            <div className="flex-grow-1"></div>
                            <div className="message-chat-div p-2 fill-width fill-height rounded-pill"> {chat_item.chat_message}  </div>
                          </div>
                       </React.Fragment>
                         
                      )}*/} 
    
                    </div>
                      
                    <form class="flex-fill">
                      {/*------MEDSSAGE INPUT --------*/}
                      <div className="message-chat-box border-primary p-4 fill-width d-flex"> 
                        
                        <div className="p-2">

                          <BsPlusCircle/>

                        </div>
                        <div className="message-box-input fill-width">

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
    
            );

        }else if(this.state.chat_enable === false){

            return(
                
                <div className="fill-height message-box no-padding d-flex flex-grow-1 justify-content-center align-items-center">
                   
                   <div>
                    <p className="fw-bold h4">Select a contact or available chat to use this feature...</p>
                   </div>

                </div>

            );

        }

        
    }
}
 
export default RenderMessage;