import { rest } from 'lodash';
import React, { Component } from 'react';
import {BrowserRouter as Router, Link, Switch, Route, Redirect} from 'react-router-dom';  //import for page navigation
import Auth from './isAuthenticated';


                        //Create parameters and parameters we may ned
function ProtectRoute({component: Component, ...rest}){
    console.log(Auth.authenticated);
    //Return a specific route with its props
    return <Route {...rest} render={(props) => {

        //If we are authenticated
        if(Auth.authenticated){

            console.log(Auth.isAuthenticated);
            //Return out component
            return <Component {...props}/>;

        }else{
            
            console.log(Auth.authenticated);
            //Else return to home page with props from prev location
            return <Redirect to={{pathname: '/', state: { from: props.location} }} />
        
        }

    }} />;

}

export default ProtectRoute;