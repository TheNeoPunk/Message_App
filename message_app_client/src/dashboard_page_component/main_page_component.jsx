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

//React Icon imports
import { BsArrowLeft } from "react-icons/bs";

class Main_Component extends Component {

    constructor(props){
      
      super(props);
      //
      this.state = { 
      
        dashboard_data_instances_one: ['' , '', ''],
        dashboard_data_instances_two: ['' , '', ''],
        dashboard_title: null
      }
    }

    //assign sql user data to curr state 
    componentDidMount(){

      const authUserData = this.state;
      
      this.setState({

        dashboard_title: localStorage.getItem('fullName'),
        /*
        dashboard_incoming_req: '0',
        dashboard_mssg_sent: localStorage.getItem('auth_mssg_sent'), 
        dashboard_friend_num: localStorage.getItem('auth_number_of_friends'),
        dashboard_total_activ: localStorage.getItem('auth_total_activity'),
        dashboard_recent_active: localStorage.getItem('auth_activity'),
        dashboard_contact_num: localStorage.getItem('auth_num_of_contacts'),*/
        dashboard_data_instances_one: [localStorage.getItem('auth_mssg_sent'), localStorage.getItem('auth_num_of_contacts'), localStorage.getItem('auth_number_of_friends')],
        dashboard_data_instances_two: [localStorage.getItem('auth_total_activity'), localStorage.getItem('auth_activity'), localStorage.getItem('auth_num_of_contacts')]

      });

      console.log(authUserData.dashboard_incoming_req);

    }

    render() { 

      const dashboard_title = this.state.dashboard_title;

      return ( 
          
        <div className="fill-window container-fluid">
            <div className="row fill-height no-padding">
              {/* Side Navigation after registry or login*/}
                           
              <Side_nav />

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

                      data_item => <div className="col">
                        <div className="rounded-circle bg-light dashboard-data-container shadow mx-auto d-flex">
                          <div className="flex-grow-1"></div>
                          <p className="align-self-center fw-bold h2">{data_item}</p>
                          <div className="flex-grow-1"></div>
                        </div>
                      </div>

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

                        data_item => <div className="col">
                          <div className="rounded-circle bg-light dashboard-data-container shadow mx-auto d-flex">
                            <div className="flex-grow-1"></div>
                            <p className="align-self-center fw-bold h2">{data_item}</p>
                            <div className="flex-grow-1"></div>
                          </div>
                        </div>

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
