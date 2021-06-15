import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBagData } from '../../Redux/Bag/action';
import styles from "./bag.module.css";

const BagProducts = () => {

    const bagData = useSelector(state=>state.bag.bagData)
    const dispatch = useDispatch()

    
    useEffect(()=> {
        dispatch( getBagData() )    
    })
    console.log(bagData);
    
    return (
        <div>
            <div className={styles.shopDetail}>
                <div>My Shopping Bag <span>(6 Items)</span> </div>
                <div>Total: ₹5445</div>
            </div>

            <div>
                {
                    bagData.map((e,i)=> 
                        <div className={styles.bagCard} key={i}>

                            <div className={styles.productDiv}>
                                <div>
                                    <img src={e.images[0]} alt="" width="100%" />
                                </div>
                                <div className={styles.productDivSecond} >
                                    <div className={styles.fontBold} >{e.title}</div>
                                    <div>{e.sub_heading}</div>
                                    <div className={`${styles.font14} ${styles.gray}`}>Sold by: Omnitech Retail </div>
                                </div>
                                <div className={styles.productDivThird}>
                                    <div className={styles.fontBold}>₹{Math.floor(Number(e.price)*((100-Number(e.discount))/100))}</div>
                                    <div>
                                        <span className={`${styles.lineThrough} ${styles.gray}`}>₹{e.price}</span>
                                        <span className={`${styles.red}`}> {e.discount}% OFF</span>
                                    </div>
                                </div>
                            </div>
                            
                            <div className={`${styles.gridBtn}`} >
                                <div className={`${styles.removeDiv}`}> <span className={`${styles.cursor}`}>REMOVE</span> </div>
                                <div> <span className={`${styles.cursor}`}>MOVE TO WISHLIST</span> </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default BagProducts;