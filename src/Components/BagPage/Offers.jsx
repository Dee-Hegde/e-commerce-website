import React, { useState } from 'react';
import styles from "./bag.module.css"
import offerImage from "./Images/offers.webp";

const Offers = () => {

    const [show, setShow] = useState(false)

    const handleShow = () => {
        setShow(!show)
    }

    return (
        <div className={styles.offer}>
            <div className={styles.grid}>
                <img src={offerImage} alt="" width="18px" height="18px" /> 
                <div className={styles.marginBottom}>Available Offers</div>
            </div>
            <div className={styles.offerList} >
                <li>10% Instant Discount on Bank Of Baroda Credit Cards on a minimum spend of Rs 2,500. TCA</li>
                {/* <li>10% Instant Discount on ICICI Bank Credit and Debit Cards on a minimum spend of Rs 3,000. TCA</li> */}
                { show && <div>
                    <li>5% Unlimited Cashback on Flipkart Axis Bank Credit Card. TCA</li>
                    {/* <li>10% Instant Discount on ICICI Bank Credit and Debit Cards on a minimum spend of Rs 3,000. TCA</li> */}
                    <li>10% Instant Discount on Bank Of Baroda Credit Cards on a minimum spend of Rs 2,500. TCA</li>
                    <li>5% Unlimited Cashback on Flipkart Axis Bank Credit Card. TCA</li>
                </div> }
                <div onClick={handleShow} className={styles.modelBtn}>{ show ? "Show Less↑":"Show More↓" }</div>
            </div>
        </div>
    );
};

export default Offers;