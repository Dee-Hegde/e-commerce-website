import React from 'react';
import styles from "./bag.module.css"
import PinCode from "./PinCode";
import Offers from "./Offers";
import BagProducts from "./BagProducts";
import AddMoreFromWish from "./AddMoreFromWish";

const ShoppingBag = () => {
    return (
        <div className={styles.horPartition}>
            <div className={styles.borderRight}>
                <PinCode />
                <Offers />
                <BagProducts />
                <AddMoreFromWish />
            </div>
            
            <div>fdf</div>
        </div>
    );
};

export default ShoppingBag;