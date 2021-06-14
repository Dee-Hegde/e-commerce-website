import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getData, getDataFilterBySort, getDataFilterByType } from "../../Redux/ProductListing/action";
import styles from "./ProductListComp.module.css"
import tagImage from "./Images/Capturenew24bg.png"


function ProductListComp({sort, order, type}) {
    const dispatch = useDispatch();
    const {data, filterData} = useSelector((state) => state.products)
    const [page, setPage] = useState(1);
    
    const pageArray = []

    const pageslength = type === true && sort === "" ? filterData : data
    

    for (let i = 0; i <= pageslength.length / 50; i++) {
        pageArray.push(i + 1)
    }

    console.log(pageArray);

    useEffect(() => {
        dispatch(getData())

        
        dispatch(getDataFilterBySort(page, sort, order));
        
        
        if(type === true && sort === "") {
            dispatch(getDataFilterByType(page));
        }

    }, [page, dispatch, sort, order, type])

    return (
        <>
        <div id={styles.main_wrapper}>
            {
                filterData.map((item) => <div className={styles.item_div} key={item.id}>
                    <div><img src={item.images[0]}  alt=""  className={styles.item_image}/> 
                    {(item.type === "NEW" || item.type === "NEW SEASON" || item.type === "TRENDING") && <div className={styles.tag_wrapper}><img src={tagImage} alt="" /> <div>{item.type}</div></div>}
                    </div>
                    <div className={styles.non_hover_div}>
                        <div className={styles.item_title}>{item.title}</div>
                        <div className={styles.item_sub_heading}>{item.sub_heading}</div>
                        
                        {item.discount === 0 ? <div className={styles.price}>Rs. {item.price}</div> : <div className={styles.item_price_div}>
                            <div>Rs. {Math.floor(item.price *(100-item.discount) / 100)}</div>
                            <div>Rs. {item.price}</div>
                            <div>{`(${item.discount}% OFF)`}</div>
                        </div>}
                    </div>
                    <div className={styles.hover_div}>
                        <div className={styles.dots}></div>
                        <div className={styles.wishlist_button}><img src="https://i.imgur.com/7l3ABgX.png" alt="wishlist_image"  style={{width:"23px", height:"23px", marginLeft:"43px"}}/> <div className={styles.wishlist_text}>WISHLIST</div></div>
                        <div className={styles.sizes}>Sizes: {item.sizes.map((el, a) => a === item.sizes.length - 1 ? <span key={a}>{el}</span>  : <span key={a}>{`${el}, `}</span> )}</div>
                        {item.discount === 0 ? <div className={styles.price}>Rs. {item.price}</div> : <div className={styles.item_price_div}>
                            <div>Rs. {Math.floor(item.price * (100 - item.discount) / 100)}</div>
                            <div>Rs. {item.price}</div>
                            <div>{`(${item.discount}% OFF)`}</div>
                        </div>}
                    </div>
                    </div> )
            }
            <div className={styles.pagination_wrapper}>
                <div>{`Page ${page} of ${pageArray.length}`}</div>
                <div className={styles.sub_pagi_wrapper}>
                <div className={page === 1 ? styles.visi_hidden : ""} onClick={() => setPage((prev) => prev - 1)}><span>{`<`}</span>  Previous</div>
                <div className={styles.pagi_number}>
                {pageArray.map((item) => <div className={page === item ? styles.bg_color : ""} key={item} onClick={() => setPage(item)}>{item}</div> )}
                </div>
                <div onClick={() => setPage((prev) => prev + 1)}>Next  <span>{`>`}</span></div>
                </div>
            </div>
        </div>
        </>
    )
}

export default ProductListComp;