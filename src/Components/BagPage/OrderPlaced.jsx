import React from 'react';
import styles from "./bag.module.css";
import orderedIcon from "./Images/orderedIcon.png";
import {Link} from "react-router-dom"

const OrderPlaced = () => {
    return (
        <div className={styles.bgcolors} >
            <div className={styles.orderCard}>
                <br /><br />
                <div>
                    <img src={orderedIcon} alt="" />
                </div>
                <br />
                <div  className={styles.fontSizing}>Order confirmed</div>
                <br />
                <div  className={styles.fontSizing2}>Your order is confirmed. You will receive an order confirmation email/SMS shortly with the expected delivery date for your items.</div>
                <br /><br />
                <Link to="/" >
                    <button className={styles.btnCntShop}>CONTINUE SHOPPING</button>
                </Link>
            </div>
        </div>
    );
};

export default OrderPlaced;