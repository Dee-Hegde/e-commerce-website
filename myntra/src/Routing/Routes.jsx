import React from 'react'
import {Route, Switch } from "react-router";
import Home from '../Components/Homepage/Home';
import Login from '../Components/Login/Login';
import MensMainPage from '../Components/MenPage/MensMainPage';
import Navbar from '../Components/Navbar/Navbar';
import WishlistMainPage from '../Components/WishlistPage/WishlistMainPage';
import { TShirtMainPage } from '../Components/T-Shirt/TshirtMainPage';
import UserDetails from "../Components/Login/UserDetails"
import BagMainPage from '../Components/BagPage/BagMainPage';
import OrderPlaced from "../Components/BagPage/OrderPlaced.jsx";
import ProductDetails from '../Components/ProductDetails/ProductDetails';

function Routes() {
    return (
        <div>
           <Navbar/>
            <Switch>
                <Route path="/" exact>
                    <Home/>
                </Route>
                <Route path="/men" exact>
                    <MensMainPage/>
                </Route>

                <Route path="/login" exact>
                    <Login/>
                </Route>
                <Route path="/login/userdetails">
                    <UserDetails/>
                </Route>
                <Route path="/wishlist" exact>
                    <WishlistMainPage/>
                </Route>
                <Route path="/result" exact>
                    <TShirtMainPage/>
                </Route>
                <Route path="/login/userdetails">
                    <UserDetails/>
                </Route>
                <Route path="/cart">
                    <BagMainPage/>
                </Route>
                <Route path="/orderplaced">
                    <OrderPlaced />
                </Route>
                <Route path="/resultpage/:id">
                   <ProductDetails/>
                </Route>
             
            </Switch>
            
        </div>
    )
}

export default Routes
