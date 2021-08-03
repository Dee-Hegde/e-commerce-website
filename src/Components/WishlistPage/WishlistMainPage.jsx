import React from 'react';
import { useSelector } from 'react-redux';
import MyWishlist from './MyWishlist';
import styles from "./styles.module.css"
import { Redirect } from 'react-router';

const WishlistMainPage = () => {

    const userAuth = useSelector(state=>state.loginred.userAuth)

    return userAuth ? (
        <div className={styles.navMargin} >
            <MyWishlist/>
            
        </div>
    ) : (
        <Redirect to="/login" />
    )
};

export default WishlistMainPage;