import React from 'react';
import couponIcon from "./Images/couponIcon.png";
import styles from "./bag.module.css";

const ApplyCoupons = () => {
    return (
        <div>
            <div className={`${styles.fontBold} ${styles.font14}`}>
                COUPONS
            </div>
            <div className={`${styles.coupon}`}>
                <div>
                    <img src={couponIcon} alt="" width="22px" />
                </div>
                <div>Apply Coupons</div>
                <div>APPLY</div>
            </div>
            <div></div>
        </div>
    );
};

export default ApplyCoupons;