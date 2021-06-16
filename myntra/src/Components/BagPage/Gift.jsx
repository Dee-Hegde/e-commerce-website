import React from 'react';
import giftImage from "./Images/giftImage.png";
import styles from "./bag.module.css";
const Gift = () => {
    return (
        <div className={`${styles.marginTop} ${styles.borderBottom}`}>
            <div className={`${styles.fontBold} ${styles.font14} ${styles.marginTop20}`}>GIFTING AND PERSONILISATION</div>
            <div className={` ${styles.marginTop}`}>
                <img src={giftImage} alt="" width="100%" />
            </div>
        </div>
    );
};

export default Gift;