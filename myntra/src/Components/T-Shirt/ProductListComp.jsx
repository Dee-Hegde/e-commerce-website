import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../../Redux/ProductListing/action";
import styles from "./ProductListComp.module.css"


function ProductListComp() {
    const dispatch = useDispatch();
    const {data} = useSelector((state) => state.products)

    useEffect(() => {
        dispatch(getData())
    }, [])

    return (
        <div id={styles.main_wrapper}>
            {
                data.map((item) => <div className={styles.item_div}>
                    <div><img src={item.images[0]}  alt=""  className={styles.item_image}/></div>
                    <div>
                        <div className={styles.item_title}>{item.title}</div>
                        <div className={styles.item_sub_heading}>{item.sub_heading}</div>
                        
                        {item.discount === "0" ? <div className={styles.price}>Rs. {item.price}</div> : <div className={styles.item_price_div}>
                            <div>Rs. {Math.floor(item.price * item.discount / 100)}</div>
                            <div>Rs. {item.price}</div>
                            <div>{`(${item.discount}% OFF)`}</div>
                        </div>}
                    </div>
                    </div> )
            }
        </div>
    )
}

export default ProductListComp;