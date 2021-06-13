import React from "react";
import styles from "./ProductList.module.css"


function ProductListHeader({handleHighToLow, handleLowToHigh, handleBetterDiscount, handlePopularity, handleWhatnew}) {

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
                                <div>Sort by : <span style={{fontWeight:"700"}}>Recommended</span> <img src="https://i.imgur.com/San9svR.png" alt="arrow_image"  style={{position:"absolute", marginLeft:"50px", marginTop:"-2px", width:"30px", height:"25px"}}/></div>
                                <div id={styles.sort_hover_div}>    
                                    {
                                        filterOptions.map(item => <div key={item.option_name} onClick={item.onclick}>{item.option_name}</div> )
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

