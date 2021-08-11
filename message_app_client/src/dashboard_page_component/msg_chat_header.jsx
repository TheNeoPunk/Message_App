import React, { Component } from 'react';

//ICON imports
import { BsGrid1X2Fill, BsPlusCircle } from "react-icons/bs";
import { BsUpload } from "react-icons/bs";
import { BsFillGridFill } from "react-icons/bs";
import { BsPersonPlus } from "react-icons/bs";
import {BsFillGrid3X2GapFill} from "react-icons/bs";
import {BsFillCameraVideoFill} from "react-icons/bs";
import {BsPhone} from "react-icons/bs";


class MessageHeader extends Component {
    
    constructor(props) {
        super(props);
        this.state = {  }
    }

    render() { 
        
        return ( 
               
            /*---HEADER BAR----*/
            <div class="mb-auto message-chat-header fw-bold border-bottom border-primary p-4 fill-width d-flex">
              <div className="flex-grow-1 no-padding"><p>Lorem ipsum dolor...</p></div>
              <div className="d-flex ms-auto mssg-hdr-icons">
                <div className=""><BsFillCameraVideoFill /></div>
                <div className=""><BsPhone /></div>
              </div>
            </div>

            
        );

    }
}
 
export default MessageHeader;