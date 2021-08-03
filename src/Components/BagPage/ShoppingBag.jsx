import React from 'react';
import styles from "./bag.module.css"
import PinCode from "./PinCode";
import Offers from "./Offers";
import BagProducts from "./BagProducts";
import AddMoreFromWish from "./AddMoreFromWish";
import ApplyCoupons from "./ApplyCoupons";
import Gift from "./Gift";
import PriceDetails from "./PriceDetails";
import belowImage from "./Images/belowImage.png";

const ShoppingBag = () => {
    return (
        <>

        <div className={styles.horPartition}>
            <div></div>
            <div className={styles.borderRight}>
                <PinCode />
                <Offers />
                <BagProducts />
                <AddMoreFromWish />

            </div>
            
            <div className={styles.billing}>
                <ApplyCoupons />
                <Gift />
                <PriceDetails />
            </div>
        </div>
        <div className={`${styles.gridImage} `}>
            <img src={belowImage} alt="" width="100%"/>
            <div className={`${styles.cursor} ${styles.fontBold}`}>Need Help? Contact Us</div>
        </div>
        </>
    );
};

export default ShoppingBag; 