import React from 'react'
import {Route, Switch } from "react-router";
import Home from '../Components/Homepage/Home';
import Navbar from '../Components/Navbar/Navbar';

function Routes() {
    return (
        <div>
            <Navbar/>
            <Switch>
                <Route path="/" exact>
                    <Home/>
                </Route>
              
            </Switch>
        </div>
    )
}

export default Routes
