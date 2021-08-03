import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import styles from "./bag.module.css"

const PriceDetails = () => {

    const history = useHistory()
    const bagData = useSelector(state=>state.bag.bagData)

    let totalAmount=0
    bagData?.map((e) => totalAmount += Math.floor(Number(e.price)*((100-Number(e.discount))/100)) * Number(e.quantity) )
    // console.log(totalAmount);

    let totalMRP=0
    bagData?.map((e) => totalMRP += Math.floor(Number(e.price)) * Number(e.quantity) )
    // console.log(totalMRP);
    
    let totalDiscount = totalMRP - totalAmount;
    // console.log(totalDiscount);

    const handleOrderPlaced = () => {
        history.push("/orderplaced")
    }

    return (
        <div>
            <div className={`${styles.fontBold} ${styles.font14} ${styles.marginTop20}`}>PRICE DETAILS ({bagData.length} Items)</div>
            <div className={`${styles.priceFlex} ${styles.marginTop}  `}>
                <div>Total MRP</div>
                <div>₹{totalMRP}</div>
            </div>
            <div className={`${styles.priceFlex} ${styles.lineHeight}`}>
                <div>Discount on MRP</div>
                <div className={`${styles.teal}`}>-₹{totalDiscount}</div>
            </div>
            <div className={`${styles.priceFlex} ${styles.lineHeight}`}>
                <div>Coupon Discount</div>
                <div className={`${styles.pink} ${styles.cursor}`}>Apply Coupon</div>
            </div>
            <div className={`${styles.priceFlex} ${styles.borderBottom} ${styles.lineHeight}`}>
                <div>Convenience Fee 
                    <span className={`${styles.pink} ${styles.fontBold} ${styles.cursor}`} > Know More</span> 
                </div>
                <div>
                    <span className={`${styles.lineThrough}`}>₹99</span>
                    <span className={`${styles.teal}`}> FREE</span>
                </div>
            </div>
            <div className={`${styles.priceFlex} ${styles.marginTop} ${styles.fontBold}`}>
                <div>Total Amount</div>
                <div>₹{totalAmount}</div>
            </div>
            <div onClick={handleOrderPlaced} className={`${styles.placeOrderBtn} ${styles.marginTop} ${styles.font14} ${styles.fontBold} ${styles.cursor}`} >PLACE ORDER</div>
        </div>
    );
};

export default PriceDetails;