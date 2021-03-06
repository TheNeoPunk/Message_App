import './App.css';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';  //import for page navigation
import ProtectRoute from './dashboard_page_component/ProtectRoute';

//Component imports
import Intro from './landing_page_components/intro_component';
import Register_Form from './landing_page_components/register_form_component';
import Login_Component from './pages/login';
import Main_Component from './dashboard_page_component/main_page_component';
import Message_Component from './dashboard_page_component/messages_component';
import Contact_Component from './dashboard_page_component/contacts_page_component';
import Setting_Component from './dashboard_page_component/settings_page_component';

//Other CSS imports
import './landing_page_css/form_component.css';

//Bootstrap CSS imports
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap.rtl.css';
import '../node_modules/bootstrap/dist/css/bootstrap.rtl.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap-grid.css';
import '../node_modules/bootstrap/dist/css/bootstrap-utilities.css';
import React from 'react';

//Main App Component
function App() {
  
  let Auth = false;
   /* Renders the main app component */
  
  return ( 
    
    <React.Fragment>

     <Router>

      <Switch>
        <Route path="/" exact component={Register_Form} />
        <Route path="/login" component={Login_Component} />
        <ProtectRoute path="/dashboard" component={Main_Component}/>
        <ProtectRoute path="/messages" component={Message_Component} />
        <ProtectRoute path="/contacts" component={Contact_Component} />
        <ProtectRoute path="/settings" component={Setting_Component} />
      </Switch>

     </Router>

    </React.Fragment>

  );
}

export default App;

