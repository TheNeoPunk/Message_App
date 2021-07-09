import './App.css';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';  //import for page navigation


//Component imports
import Intro from './landing_page_components/intro_component';
import Register_Form from './landing_page_components/register_form_component';
import Login_Component from './pages/login';

//Other CSS imports
import './landing_page_css/intro_component.css';
import './landing_page_css/form_component.css';

//Bootstrap CSS imports
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap.rtl.css';
import '../node_modules/bootstrap/dist/css/bootstrap.rtl.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap-grid.css';
import '../node_modules/bootstrap/dist/css/bootstrap-utilities.css';

//Main App Component
function App() {
   /* Renders the main app component */
  return ( 

    <div className="fill-window container-fluid bg-light">
    {/* Main App Container */}

      <div className="row fill-height"> 
        <div id="side_component" class="col-5 fs-1 fw-bold text-center side_component" >
        {/* Side Intro Component */}
          <Intro />

        </div>   
               
        <div id="register_component" class="col-7">  
        {/* The navigation from Register to Login form */}
        {/* Displays register form by default */}
          <Router>
            
           
            <Switch>
              <Route path="/" exact component={Register_Form} />
              <Route path="/login" component={Login_Component} />
            </Switch>

           
          </Router>

        </div>
      
      </div>

    </div>
  );
}

export default App;
