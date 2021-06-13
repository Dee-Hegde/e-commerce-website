import React from "react"
import { useState } from "react"
import Filter from "./Filter"
import FilterComp from "./FilterComp"
import Header from "./Header"
import ProductList from "./ProductList"
import ProductListComp from "./ProductListComp"
import styles from "./TshirtMainPage.module.css"

function TShirtMainPage() {
    const [sort, setSort] = useState("");
    const [order, setOrder] = useState("");
    const [type, setType] = useState(false)

    const handleHighToLow = () => {
        setSort("dis_price")
        setOrder("DESC")
    }

    const handleLowToHigh = () => {
        setSort("dis_price")
        setOrder("asc")
    }

    const handleBetterDiscount = () => {
        setSort("discount")
        setOrder("DESC")
    }

    const handlePopularity = () => {
        setSort("review")
        setOrder("DESC")
    }

    const handleWhatnew = () => {
        setType(true);
    }

    return (
        <div>
            <div id={styles.note_div}>
                - As per guidelines, we are only delivering essentials in govt-specified pincodes -
            </div>
                <Header />
            <div id={styles.wrapper2}>
                <FilterComp />
                <ProductListComp sort={sort} order={order} type={type}/>
            </div>
            <div id={styles.wrapper}>
                <Filter />
                <ProductList handleHighToLow={handleHighToLow} handleLowToHigh={handleLowToHigh} handleBetterDiscount={handleBetterDiscount} handlePopularity={handlePopularity} handleWhatnew={handleWhatnew}/>
            </div>
            
        </div>
    )
}


export {TShirtMainPage};