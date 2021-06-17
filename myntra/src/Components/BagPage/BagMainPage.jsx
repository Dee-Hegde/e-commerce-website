import React from 'react';
import BagNavbar from "./BagNavbar";
import SubNavbar from "./SubNavbar";
import ShoppingBag from "./ShoppingBag";
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router';

const BagMainPage = () => {

    const userAuth = useSelector(state=>state.loginred.userAuth)

    return userAuth ? (
        <div>
            <BagNavbar />
            <SubNavbar />
            <ShoppingBag />
        </div>
    ) : (
        <Redirect to="/wishlist" />
    )
};

export default BagMainPage;