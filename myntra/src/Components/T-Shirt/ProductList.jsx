import React from "react";
import styles from "./ProductList.module.css"


function ProductListHeader() {
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
                                    <div>What's New</div>
                                    <div>Popularity</div>
                                    <div>Better Discount</div>
                                    <div>Price: High to Low</div>
                                    <div>Price: Low to High</div>
                                    <div>Customer Rating</div>
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

