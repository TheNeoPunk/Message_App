import React, { Component } from 'react';
import {BrowserRouter as Router, Link, Switch, Route} from 'react-router-dom';  //import for page navigation

//Component exports
import Side_nav from '../global_components/side_navigation';


//CSS imports
import '../global_components_css/main_page_component.css';
import '../App.css';

//Bootstrap CSS imports
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.rtl.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.rtl.min.css';
import '../../node_modules/bootstrap/dist/css/bootstrap-grid.css';
import '../../node_modules/bootstrap/dist/css/bootstrap-utilities.css';

class Main_Component extends Component {

    constructor(props){
      
      super(props);
      //
      this.state = { 
      
        dashboard_data_instances_one: [1 , 2, 3],
        dashboard_data_instances_two: [4 , 5, 6],
        dashboard_title: null
      
      }
    }

    componentDidMount(){

      this.setState({

        dashboard_title: localStorage.getItem('fullName')

      });

    }

    render() { 

      const dashboard_title = this.state.dashboard_title;

      console.log("this is homepage", dashboard_title);
      return ( 
          
        <div className="fill-window container-fluid">
            <div className="row fill-height no-padding">
              {/* Side Navigation after registry or login*/}
              <nav className="side-nav-column no-padding">
                
                <Side_nav />

              </nav>

              {/* Main Data dashboard */}
              <div className="col-11 no-match-pass-div rounded-3">
                <p className="logo fw-bold text-center fs-1">
                  Welcome {dashboard_title}
                </p>

                {/* FILLER CONTAINER */}
                <div className="container">
                  <div className="row filler-xs">
                    <div className="col">

                    </div>
                    <div className="col">

                    </div>
                  </div>
                </div>

                {/* */}
                <div class="container">
                  <div class="row align-items-start">

                    {/* Rendered dashboard data */}
                    {this.state.dashboard_data_instances_one.map(

                      data_item => <div className="col"><div className="rounded-circle bg-light dashboard-data-container shadow mx-auto"></div></div>

                    )}
                  </div>

                {/* FILLER CONTAINER */}
                <div className="container">
                  <div className="row filler-s">
                    <div className="col">

                    </div>
                    <div className="col">

                    </div>
                  </div>
                </div>

                <div class="row align-items-center">
                     {/* Rendered dashboard data */}
                     {this.state.dashboard_data_instances_two.map(

                        data_item => <div className="col"><div className="rounded-circle bg-light shadow dashboard-data-container mx-auto align-middle"></div></div>

                      )}
                  </div>

                </div>
              </div>

               {/* Space filler */}
              <div className="col"></div>       
            
            </div>
        </div>   
        

      );
    }
}   
 
export default Main_Component
