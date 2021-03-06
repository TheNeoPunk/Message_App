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

//Sorts chat messags of both sender and receiver
function totalChatSorter(sender_mssges, receiver_mssgs, response_info){

  const total_response_mssges_sorted = [...sender_mssges, ...receiver_mssgs]
 
  total_response_mssges_sorted.sort(function(total_response_mssges,total_response_mssges_sorted){
    return new Date(total_response_mssges.mssg_date) - new Date(total_response_mssges_sorted.mssg_date)
    
  });

  console.log(total_response_mssges_sorted);
  AuthChat.exist_total_messages = total_response_mssges_sorted;
  
}

class Contact_Component extends Component {
    
    constructor(props){

      super(props);
      //Creates fullName property before component is attached
      
      this.state = { 

        user_friends_list: [],
        generated_chat_id: null, 
        sender_name: null,
        receiver_name: null,
        Authorize_Chat: false,
        default_chat_mssg: "Hello World"

      };
    
    };

    componentDidMount = () => {

      console.log(localStorage.getItem('fullName'))
      
      //Grab friends list
      Axios.get("http://localhost:3001/getUpdatedContacts", {
        params: {
          curr_user: localStorage.getItem('fullName')
        }
      }).then((response) => {

        console.log(response.data);
        var refreshed_friends_list = JSON.parse(response.data[0].friends_list)
        console.log(refreshed_friends_list);
        this.setState({

          user_friends_list: refreshed_friends_list
  
        });
        
      })

      if(AuthChat.authorize_Chat == true){

        //console.log('Authorized');
        this.setState({

          sender_name: localStorage.getItem('fullName')
          //receiver_name: receive_user
  
        });

      }else{

        //console.log('Unauthorized');
      }
        
    }

    activateChat = async (receive_user) => {

      AuthChat.authorize_Chat = true;
      this.searchThread = false;
      
      this.senderName = localStorage.getItem('fullName');
      this.setState({

        sender_name: this.senderName,
        receiver_name: receive_user

      }, () => {

        //First check for existing chat threads between Sender and Receiver
        Axios.post('http://localhost:3001/checkChat',{

          //gen_chat_id: this.state.generated_chat_id,
          sender_name_rec: this.state.sender_name,
          reciver_name_rec: this.state.receiver_name

        }).then((response => { //Give out response after checking


          //If there is no chat thread currently existing
          if(response.data.length == 0){

            //Create the chat thread
            console.log('chat_generated');
            Axios.post('http://localhost:3001/generateChat', {

              default_chat_mssg: this.state.default_chat_mssg,
              sender_name_rec: this.state.sender_name,
              reciver_name_rec: this.state.receiver_name

            }).then((response => {

              //console.log(response.data);
              AuthChat.authorize_Chat = true;
              this.props.history.push('/messages');
              
            }));

              //Grab the newly generated chat info

            Axios.post('http://localhost:3001/grabChatInfo', {

              sender_name_rec: this.state.sender_name,
              reciver_name_rec: this.state.receiver_name

            });

          }else if (response.data.length != 0){ //Else if it DOES EXIST

            //pull up the existing thread
            //console.log("The chat does exist");
            AuthChat.authorize_Chat = true;

            //Grab the existing chat info
            Axios.post('http://localhost:3001/grabChatInfo', {

              sender_name_rec: this.state.sender_name,
              reciver_name_rec: this.state.receiver_name,
              sender_name_rec_b: this.state.receiver_name,
              receiver_name_rec_b: this.state.sender_name

            }).then((response => {

              //console.log(response.data[1]);
             
              AuthChat.exist_chat_messages_from_sender = response.data[0]
              AuthChat.exist_chat_messages_from_receiver = response.data[1]
              
              var total_response_length = response.data[0].length + response.data[1].length;

              totalChatSorter(AuthChat.exist_chat_messages_from_sender, AuthChat.exist_chat_messages_from_receiver, total_response_length);
             
              AuthChat.receiver_name = this.state.receiver_name;
              
              this.props.history.push('/messages');
              
            }));

          };

        }));

      });

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
                  
                  <div className="d-flex m-3 pe-auto" onClick={() => this.activateChat(curr_friends)} style={{cursor: "pointer"}}>
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
