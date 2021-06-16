import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getData, getDataFilterBySort, getDataFilterByType, updateData } from "../../Redux/ProductListing/action";
import styles from "./ProductListComp.module.css"
import tagImage from "./Images/Capturenew24bg.png"
import {Link} from "react-router-dom"
import {Carousel} from "react-responsive-carousel"
function ProductListComp({sort, order, type}) {
    const dispatch = useDispatch();
    const {data, filterData} = useSelector((state) => state.products)
    const [page, setPage] = useState(1);
    const [dots, setDots] = useState(0);
    
    const pageArray = []
    const dotsArray = [0, 1, 2, 3]

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

    }, [page, dispatch, sort, order, type]);


    const handleChangeDots = (id) => {

        // setInterval(() => {
        //    const updatedFilterData = filterData.map(item => item.id === id ? item.isdotvalue === 4 ? {...item, isdotvalue : 0} : {...item, isdotvalue : item.isdotvalue + 1} : item)
        //    dispatch(updateData(updatedFilterData));
        // }, 5000);

        setTimeout(() => {
            const updatedFilterData = filterData.map(item => item.id === id ? item.isdotvalue >= 3 ? {...item, isdotvalue : 0} : {...item, isdotvalue : item.isdotvalue + 1} : item)
           dispatch(updateData(updatedFilterData));
        }, 1000);
        // if(dots < 4) {
        //     // setInterval(() => {
        //     //     setDots(dots + 1)
        //     // }, 3000);
        // } else {
        //     setDots(0);
        // }
    }

    
    const handleResetDots = (id, event) => {
        // e.stopPropogation()
            const updateFilterData = filterData.map(item => item.id === id ? {...item, isdotvalue : 0} : item)
            dispatch(updateData(updateFilterData));
    }

    return (
        <>
        <div id={styles.main_wrapper}>
            {
                filterData.map((item) => <Link to={`/products/${item.id}`} key={item.id} className={styles.link}><div onMouseLeave={() => handleResetDots(item.id)} onMouseOver={() => handleChangeDots(item.id)}  className={styles.item_div} >
                    <div>
                        <Carousel  showThumbs={false} selectedItem={item.isdotvalue} showIndicators={false} showArrows={false} showStatus={false}>
                            <img  alt="" src={item.images[0]} className={styles.item_image}/>
                            <img  alt="" src={item.images[1]} className={styles.item_image}/>
                            <img  alt="" src={item.images[2]} className={styles.item_image}/>
                            <img  alt="" src={item.images[3]} className={styles.item_image}/>
                        </Carousel>
                    {(item.type === "NEW" || item.type === "NEW SEASON" || item.type === "TRENDING") && <div className={styles.tag_wrapper}><img src={tagImage} alt="" /> <div>{item.type}</div></div>}
                    {item.rating !== "" && <div className={styles.rating_wrapper}><div>{item.rating}</div><div className={styles.rating_image}><img src="https://i.imgur.com/qXeipEM.png" alt=""  style={{width:"100%"}}/></div><div>{`| ${item.review} `}</div></div> }
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
                        <div className={styles.dots}>
                            {/* <div className={styles.dots_div}></div>
                            <div className={styles.dots_div}></div>
                            <div className={styles.dots_div}></div>
                            <div className={styles.dots_div}></div> */}
                            {
                                dotsArray.map(el => <div className={ item.isdotvalue === el ? styles.dots_div2 : styles.dots_div} key={item + 2}></div> )
                            }
                        </div>
                        <div className={styles.wishlist_button}><img src="https://i.imgur.com/7l3ABgX.png" alt="wishlist_image"  style={{width:"23px", height:"23px", marginLeft:"43px"}}/> <div className={styles.wishlist_text}>WISHLIST</div></div>
                        <div className={styles.sizes}>Sizes: {item.sizes.map((el, a) => a === item.sizes.length - 1 ? <span key={a}>{el}</span>  : <span key={a}>{`${el}, `}</span> )}</div>
                        {item.discount === 0 ? <div className={styles.price}>Rs. {item.price}</div> : <div className={styles.item_price_div}>
                            <div>Rs. {Math.floor(item.price * (100 - item.discount) / 100)}</div>
                            <div>Rs. {item.price}</div>
                            <div>{`(${item.discount}% OFF)`}</div>
                        </div>}
                    </div>
                    </div> </Link> )
            }
            <div className={styles.pagination_wrapper}>
                <div>{`Page ${page} of ${pageArray.length}`}</div>
                <div className={styles.sub_pagi_wrapper}>
                <div className={page === 1 ? styles.visi_hidden : ""} onClick={() => setPage((prev) => prev - 1)}><span>{`<`}</span>  Previous</div>
                <div className={styles.pagi_number}>
                {pageArray.map((item) => <div className={page === item ? styles.bg_color : ""} key={item + 1} onClick={() => setPage(item)}>{item}</div> )}
                </div>
                <div onClick={() => setPage((prev) => prev + 1)}>Next  <span>{`>`}</span></div>
                </div>
            </div>
        </div>
        </>
    )
}

export default ProductListComp;