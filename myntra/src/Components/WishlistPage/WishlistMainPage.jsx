import React from 'react';
import MyWishlist from './MyWishlist';
import styles from "./styles.module.css"

const WishlistMainPage = () => {
    return (
        <div className={styles.navMargin} >
            <MyWishlist/>
        </div>
    );
};

export default WishlistMainPage;

// const handleDoneWithoutSize = () => {
//     setWishlistModel(false)
//     setIsSizeNotSelected(true)
//   }
//   console.log(isSizeNotSelected);