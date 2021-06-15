import React from 'react';
import styles from "./bag.module.css";
import heartIcon from "./Images/heartIcon.png";

const AddMoreFromWish = () => {
    return (
        <div className={`${styles.addMoreBox}`}>
            <div>
                <img src={heartIcon} alt="" width="20px" />
            </div>
            <div className={styles.fontBold}>
                Add More From Wishlist
            </div>
            <div className={styles.fontBold}>{`${">"}`}</div>
        </div>
    );
};

export default AddMoreFromWish;