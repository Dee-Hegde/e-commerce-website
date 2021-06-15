import React from 'react';
import BagNavbar from "./BagNavbar";
import SubNavbar from "./SubNavbar";
import ShoppingBag from "./ShoppingBag";

const BagMainPage = () => {
    return (
        <div>
            <BagNavbar />
            <SubNavbar />
            <ShoppingBag />
        </div>
    );
};

export default BagMainPage;