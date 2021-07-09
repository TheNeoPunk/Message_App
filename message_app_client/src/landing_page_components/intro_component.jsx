import React, { Component } from 'react';
import ReactDOM from 'react-dom';

//CSS Imports
import '../App.css';

//Side_Div component of landing page
class Intro extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
                <div class="container">
                <div class="row filler-l">
                    <div class="col">
                      
                    </div>
                    <div class="col">
                     
                    </div>
                  </div>
                  <div class="row">
                    <div class="col">
                  
                    </div>
                    <div class="col">
                  
                    </div>
                    <div class="col">
                  
                    </div>
                  </div>
                </div>
                <p className="">
                    Lorem ipsum dolor sit 
                    amet, consectetur 
                    adipiscing elit
                </p>
            </React.Fragment>
            
        );
    }
}
 
export default Intro;