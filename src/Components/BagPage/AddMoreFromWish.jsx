import React from 'react';
import styles from "./bag.module.css";
import heartIcon from "./Images/heartIcon.png";
import { Link } from "react-router-dom";

const AddMoreFromWish = () => {
    return (
        <Link className={`${styles.textDec}`} to="/wishlist" >
            <div className={`${styles.addMoreBox}`}>
                <div>
                    <img src={heartIcon} alt="" width="20px" />
                </div>
                <div className={styles.fontBold}>
                    Add More From Wishlist
                </div>
                <div className={styles.fontBold}>{`${">"}`}</div>
            </div>
        </Link>
        
    );
};

export default AddMoreFromWish;