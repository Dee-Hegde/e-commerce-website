import React from 'react';
import styles from "./bag.module.css"
import PinCode from "./PinCode";
import Offers from "./Offers";
import BagProducts from "./BagProducts";
import AddMoreFromWish from "./AddMoreFromWish";
import ApplyCoupons from "./ApplyCoupons";
import Gift from "./Gift";

const ShoppingBag = () => {
    return (
        <div className={styles.horPartition}>
            <div className={styles.borderRight}>
                <PinCode />
                <Offers />
                <BagProducts />
                <AddMoreFromWish />
            </div>
            
            <div className={styles.billing}>
                <ApplyCoupons />
                <Gift />
            </div>
        </div>
    );
};

export default ShoppingBag;