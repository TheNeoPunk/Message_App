import React, { Component } from 'react';

class RenderMessage extends Component {
    
    constructor(props) {
        super(props);
        this.state = {  }
    }

    render() {

        return ( 

            <div id="mssg-input-container" className="fill-width">

                {/*----MESSAGE DISPLAY ITEM----- */}
                <div className="message-item-box p-4 fill-width d-flex">
                  <div className="message-chat-icon bg-light rounded-circle shadow"></div>
                  <div className="flex-grow-1"></div>
                  <div className="message-chat-div p-2 fill-width fill-height rounded-pill">Lorem Ipsum Dolor</div>
                </div>
                <div className="message-item-box p-4 fill-width d-flex flex-row-reverse">
                  <div className="message-chat-icon bg-light rounded-circle shadow"></div>
                  <div className="flex-grow-1"></div>
                  <div className="message-chat-div p-2 fill-width fill-height rounded-pill">Lorem Ipsum Dolor</div>
                </div>

            </div>

        );
    }
}
 
export default RenderMessage;