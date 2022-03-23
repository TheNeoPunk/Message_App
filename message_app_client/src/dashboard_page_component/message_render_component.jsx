import React, { Component ,useState, useEffect, useRef} from 'react';
import {BrowserRouter as Router, Link, Switch, Route} from 'react-router-dom';  //import for page navigation
import Axios from 'axios';

//ICON imports
import { BsGrid1X2Fill, BsImageFill, BsPlusCircle } from "react-icons/bs";
import { BsUpload } from "react-icons/bs";
import { BsFillGridFill } from "react-icons/bs";
import { BsPersonPlus } from "react-icons/bs";
import {BsFillGrid3X2GapFill} from "react-icons/bs";
import {BsFillCameraVideoFill} from "react-icons/bs";
import {BsPhone} from "react-icons/bs";
import AuthChat from './AuthChat';

//Component imports
import MessageHeader from './msg_chat_header';
import { render } from '@testing-library/react';



function SortChat (authchat_messages) {

  var total_messages = [];

  //Go through the chat list of the current sender and receiver and sort them 
  for(var x = 0; x <= authchat_messages.length-1; x++){
 
    //Send to sender list
    if(authchat_messages[x].sender == localStorage.getItem('fullName')){

      total_messages.push(
    
        <div className="message-item-box p-4 fill-width d-flex">
          <div className="message-chat-icon bg-light rounded-circle shadow"></div>
          <div className="flex-grow-1"></div>
          <div className="message-chat-div p-2 fill-width fill-height rounded-pill"> {authchat_messages[x].chat_message}  </div>
        </div>
                       
      ); 

    //Send to receiver sender list
    }else if(authchat_messages[x].sender != localStorage.getItem('fullName')){

      total_messages.push(  
        <div className="message-item-box p-4 fill-width d-flex flex-row-reverse">
          <div className="message-chat-icon bg-light rounded-circle shadow"></div>
          <div className="flex-grow-1"></div>
          <div className="message-chat-div p-2 fill-width fill-height rounded-pill">{authchat_messages[x].chat_message}</div>
        </div>
      );

    }
  
  }
 
  return total_messages

}

//Returns the recent message in html form similar to SortChat
function AppendRecentMessage(recent_message) {

  if(recent_message){
    //console.log('latest message received')
    console.log(recent_message.chat_message);
  }else{
   // console.log('no recent messages')
  }

  var recent_message_render = <div className="message-item-box p-4 fill-width d-flex">
          <div className="message-chat-icon bg-light rounded-circle shadow"></div>
          <div className="flex-grow-1"></div>
          <div className="message-chat-div p-2 fill-width fill-height rounded-pill"> {recent_message.chat_message}  </div>
        </div>/**/
  
 return recent_message_render /**/

}

//Renders existing and appended chat messages ------------------------
function RenderChat() {

  let [renderTotalMessages, renderArray] = useState(SortChat(AuthChat.exist_total_messages));

  let sent_data = useState(null);
  let sent_user_input = useRef(null);

  //const [recentMssgArr, setNewMssg] = useState([]);

  function modifyTotalMessages (event) {
    event.preventDefault();
    handleMssg(event.target.value);
    handleMssgData()
  }

  function handleMssg() {

      sent_data = sent_user_input.current.value;
      //console.log(sent_data)
  }

  async function handleMssgData (){

    //Appends to rendering array
    await Axios.post('http://localhost:3001/sendMessage', {

      auth_message: sent_data,
      auth_message_user: localStorage.getItem("fullName"),
      auth_mssg_receiver: AuthChat.receiver_name

    }).then(function (results) {
      //console.log(results.data[0])
      renderArray([renderTotalMessages, AppendRecentMessage(results.data[0])])
     });
  }

  return (
    <React.Fragment>
    
    <div id="chat_display">{renderTotalMessages.map(chat_item => 
      <div >
       
        <div role="button" type="button">{chat_item}</div>  
      </div>)}
    </div>

    <form class="fill-width">
      {/*------MEDSSAGE INPUT --------*/}
      <div className="message-chat-box border-primary p-4 fill-width d-flex" > 

        <div className="message-box-input fill-width">
      
          <input ref={ sent_user_input} className="p-2" type="text" name="message" />
        
        </div>
        
        <div className="ms-auto p-2">
      
          <button onClick={
            modifyTotalMessages
          } role="button" type="button">
            <BsUpload/>
          </button>
        
        </div>
            
      </div>
    </form>
    </React.Fragment>
  );
}

class RenderMessage extends Component {
    
    constructor(props) {
     
      super(props);

      this.state = { 
        chat_enable: AuthChat.authorize_Chat,
        sent_data: null,
        render_total_messages: [],
        count : 0, 
        setCount : 0
      }

    }

    //When the component mounts
    componentDidMount = () => {

      AuthChat.authorize_Chat = false;
   
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

                      <RenderChat />
    
                    </div>
                      
                
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