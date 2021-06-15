import React from 'react';
import styles from "./bag.module.css"
import PinCode from "./PinCode";
import Offers from "./Offers";

const ShoppingBag = () => {
    return (
        <div className={styles.horPartition}>
            <div className={styles.borderRight}>
                <PinCode />
                <Offers />
            </div>
            
            <div>fdf</div>
        </div>
    );
};

export default ShoppingBag;