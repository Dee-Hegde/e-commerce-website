import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getData, getDataFilter } from "../../Redux/ProductListing/action";
import styles from "./ProductListComp.module.css"
import {Link} from "react-router-dom"


function ProductListComp() {
    const dispatch = useDispatch();
    const {data, filterData} = useSelector((state) => state.products)
    const [page, setPage] = useState(1);
    const pageArray = []

    for (let i = 0; i <= data.length / 50; i++) {
        pageArray.push(i + 1)
    }

    console.log(pageArray);

    useEffect(() => {
        dispatch(getData())
        dispatch(getDataFilter(page));
    }, [page])

    return (
        <>
        <div id={styles.main_wrapper}>
            {
                filterData.map((item) => <div className={styles.item_div} key={item.id}>
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
            <div style={{border:"1px solid red", padding:"50px", gridColumn:"1 / 6", display:"flex", gap:"440px"}}>
                <div>{`< PREVIOUS`}</div>
                <div style={{display:"flex", gap:"10px"}}>
                {pageArray.map((item) => <div>{item}</div> )}
                </div>
                <div>{`NEXT >`}</div>
            </div>
        </div>
        {/* <div style={{border:"1px solid red", padding:"50px"}}>
                <button>{`< PREVIOUS`}</button>
        </div> */}
        </>
    )
}

export default ProductListComp;