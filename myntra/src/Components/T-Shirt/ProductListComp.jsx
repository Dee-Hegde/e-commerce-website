import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../../Redux/ProductListing/action";
import styles from "./ProductListComp.module.css"
import {Link} from "react-router-dom"


function ProductListComp() {
    const dispatch = useDispatch();
    const {data} = useSelector((state) => state.products)

    useEffect(() => {
        dispatch(getData())
    }, [dispatch])

    return (
        <div id={styles.main_wrapper}>
            {
                data.map((item) => <div className={styles.item_div} key={item.id}>
                    <div><img src={item.images[0]}  alt=""  className={styles.item_image}/></div>
                    <div className={styles.non_hover_div}>
                        <div className={styles.item_title}>{item.title}</div>
                        <div className={styles.item_sub_heading}>{item.sub_heading}</div>
                        
                        {item.discount === "0" ? <div className={styles.price}>Rs. {item.price}</div> : <div className={styles.item_price_div}>
                            <div>Rs. {Math.floor(item.price * item.discount / 100)}</div>
                            <div>Rs. {item.price}</div>
                            <div>{`(${item.discount}% OFF)`}</div>
                        </div>}
                    </div>
                    <div className={styles.hover_div}>
                        <div className={styles.dots}></div>
                        <Link to="/wishlist" className={styles.link}><div className={styles.wishlist_button}><img src="https://i.imgur.com/7l3ABgX.png" alt="wishlist_image"  style={{width:"23px", height:"23px", marginLeft:"43px"}}/> <div className={styles.wishlist_text}>WISHLIST</div></div></Link>
                        <div className={styles.sizes}>Sizes: {item.sizes.map((el, a) => a === item.sizes.length - 1 ? <span>{el}</span>  : <span>{`${el}, `}</span> )}</div>
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