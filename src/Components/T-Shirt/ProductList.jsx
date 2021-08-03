import React from "react";
import styles from "./ProductList.module.css"


function ProductListHeader({handleHighToLow, handleLowToHigh, handleBetterDiscount, handlePopularity, handleWhatnew, sortby}) {

    const filterOptions = [
        {onclick : handleWhatnew, option_name : "What's New"},
        {onclick : handlePopularity, option_name : "Popularity"},
        {onclick : handleBetterDiscount, option_name : "Better Discount"},
        {onclick : handleHighToLow, option_name : "Price: High to Low"},
        {onclick : handleLowToHigh, option_name : "Price: Low to High"},
        {onclick : handlePopularity, option_name : "Customer Rating"},
    ]

    return (
        <div>
            <div className={styles.product_header}>
                <div>
                    <div>
                        <select disabled><option>Bundles</option></select>
                        <select disabled><option>Country of Origin</option></select>
                        <select disabled><option>Size</option></select>
                    </div>
                    <div>
                        <div>
                            <div>
                                <div>Sort by : <span style={{fontWeight:"700"}}>{sortby === "" ? "Recommended" : sortby} </span> <span className={sortby === "Price: High to Low" || "Price: Low to High" ?  styles.sortby_arrow2 : styles.sortby_arrow }><img src="https://i.imgur.com/San9svR.png" alt="arrow_image" style={{width:"100%"}}/></span></div>
                                <div id={styles.sort_hover_div}>
                                    {
                                        filterOptions.map(item => <div key={item.option_name} onClick={() => item.onclick(item.option_name)}>{item.option_name}</div> )
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductListHeader;

