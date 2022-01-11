import React, { Component ,useState, useEffect, useRef} from 'react';
import {BrowserRouter as Router, Link, Switch, Route} from 'react-router-dom';  //import for page navigation
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
import { render } from '@testing-library/react';

//Grab messages from the sender and the receiver
/*function SortChat (authchat_messages) {

  //console.log('This is working');
  console.log(authchat_messages.messageList.length);

  var total_messages = [];

  //console.log(authchat_messages.messageList[0].sender);
  //console.log(authchat_messages.messageList.length);
  //console.log(localStorage.getItem('fullName'));
  console.log()

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

  return total_messages

}*/

function SortChat (authchat_messages) {

  

  //console.log('This is working');
  //console.log(authchat_messages.length);

  var total_messages = [];

  //console.log(authchat_messages.messageList[0].sender);
  //console.log(authchat_messages.messageList.length);
  //console.log(localStorage.getItem('fullName'));
  

  //Go through the chat list of the current sender and receiver and sort them 
  for(var x = 0; x <= authchat_messages.length-1; x++){
    //console.log(authchat_messages[x].sender)
    //console.log(x)
    // console.log(authchat_messages.messageList[x].sender)
    
  //Send to sender list
    if(authchat_messages[x].sender == localStorage.getItem('fullName')){

      //console.log('These messages are from the sender');

      total_messages.push(
    
        <div className="message-item-box p-4 fill-width d-flex">
          <div className="message-chat-icon bg-light rounded-circle shadow"></div>
          <div className="flex-grow-1"></div>
          <div className="message-chat-div p-2 fill-width fill-height rounded-pill"> {authchat_messages[x].chat_message}  </div>
        </div>
                       
      ); 

      //Send to receiver sender list
    }else if(authchat_messages[x].sender != localStorage.getItem('fullName')){

      //console.log('These messages are for the receiver');

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

function Example() {
  let [count, setCount] = useState(0);

  let [arraysample, setArray] = useState([1,2,3,4]);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`;
  });
  //console.log(arraysample)
  return (
    <div>
      <p>You clicked {count} times</p>
      <div>Here is it is {arraysample.map(item => <p>{item}</p>)}</div>
      <button onClick={() => {
        
        setCount(count + 1)
        setArray([arraysample, `Entry ${count}`]);
      
      }}>
        Click me
      </button>
    </div>
  );

  
}

//Returns the recent message in html form similar to SortChat
function AppendRecentMessage(recent_message) {

  var recent_message_render = null;

  if(recent_message){
    console.log('latest message received')
    console.log(recent_message);
  }else{
    console.log('no recent messages')
  }

  recent_message_render = <div className="message-item-box p-4 fill-width d-flex">
          <div className="message-chat-icon bg-light rounded-circle shadow"></div>
          <div className="flex-grow-1"></div>
          <div className="message-chat-div p-2 fill-width fill-height rounded-pill"> {recent_message.chat_message}  </div>
        </div>

  //console.log(recent_message.chat_message)

  //console.log(recent_message_render)
  
  return recent_message_render 

}



function RenderChat() {

  let [renderTotalMessages, renderArray] = useState(SortChat(AuthChat.exist_chat_messages));

  let sent_data = useState(null);
  let sent_user_input = useRef(null);

  function modifyTotalMessages (event) {

    event.preventDefault();
    handleMssg(event.target.value);
    renderArray([renderTotalMessages, AppendRecentMessage(handleMssgData())])
    
  }

  function handleMssg  () {

      sent_data = sent_user_input.current.value;
      //console.log(sent_data)
  }

  function handleMssgData (){

    Axios.post('http://localhost:3001/sendMessage', {

      auth_message: sent_data,
      auth_message_user: localStorage.getItem("fullName"),
      auth_mssg_receiver: AuthChat.receiver_name

    }).then((response => {

      console.log(response.data)
     
    
    }));

    //Appends to rendering array
    return Axios.post('http://localhost:3001/grabLatestMessage', {

      recent_mssg: sent_data

    }).then((response => {
      
      console.log(response.data)
      return response.data
    
    }));

  }

  return (
    <React.Fragment>
      
    <div>{renderTotalMessages.map(chat_item => chat_item)}</div>
    <form class="fill-width">
      {/*------MEDSSAGE INPUT --------*/}
      <div className="message-chat-box border-primary p-4 fill-width d-flex" > 
        
        {/*} <div className="p-2">

          <BsPlusCircle/>
  
        </div>*/}

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

    //activated when user enters a new message 
    /*multipleFunctions(event) {

      event.preventDefault();

      this.handleMssgData
      

    }*/

   /* modifyTotalMessages = (event) => {

      console.log('append');
      event.preventDefault();
      this.handleMssg(event.target.value);
      this.handleMssgData();
      console.log(this.state.render_total_messages)

    }

    handleMssg = (new_message) => {

        /* Axios.post('http://localhost:3001/sendMessage',{
          auth_message: ,
          auth_message_user:,
          auth_message_data:
  
        })
        
        this.setState({
  
          sent_data: new_message
  
        });
  
    }
  
    handleMssgData = () => {
      Axios.post('http://localhost:3001/sendMessage', {

        auth_message: this.state.sent_data,
        auth_message_user: localStorage.getItem("fullName"),
        auth_mssg_receiver: AuthChat.receiver_name

      }).then((response => {

        console.log(response.data)
        //Appends to rendering array
        Axios.post('http://localhost:3001/grabLatestMessage', {

          recent_mssg: this.state.sent_data

        },).then((response => {
          console.log(response.data);
        }));
       // this.SortChat(this.state.existing_messages.push(response.data))
        //console.log(response.data[0].message, response.data[0].name);
      }));
    }*/

    //When the component mounts
    componentDidMount = () => {

      AuthChat.authorize_Chat = false;
      
      //console.log(this.state.existing_messages.length);
      //console.log(SortChat(this.state.existing_messages))
      //console.log('mounted');
   
    }

    componentDidUpdate = () => {

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

                      <Example />
                      <RenderChat />
    
                    </div>
                      
                    {/* FORRRMMMMM GOESSSS HEEERREEEE FOR BACKUP */}
                
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