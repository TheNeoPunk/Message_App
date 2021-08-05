import { rest } from 'lodash';
import React, { Component } from 'react';
import {BrowserRouter as Router, Link, Switch, Route, Redirect} from 'react-router-dom';  //import for page navigation

                        //Create parameters and parameters we may ned
function ProtectRoute({ isAuth: isAuth, component: Component, ...rest}){

    //Return a specific route with its props
    return <Route {...rest} render={(props) => {

        //If we are authenticated
        if(isAuth){

            console.log(isAuth);
            //Return out component
            return <Component />

        }else{
            
            console.log(isAuth);
            //Else return to home page with props from prev location
            return <Redirect to={{pathname: '/', state: { from: props.location} }} />
        }

    }} />;

}

export default ProtectRoute;