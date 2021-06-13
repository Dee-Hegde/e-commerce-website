import React from 'react';
import MyWishlist from './MyWishlist';
import SubNavbar from './SubNavbar';
import styles from "./styles.module.css"

const WishlistMainPage = () => {
    return (
        <div className={styles.navMargin} >
            <SubNavbar/>
            <MyWishlist/>
        </div>
    );
};

export default WishlistMainPage;