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
    const [type, setType] = useState(false);
    const [sortby, setSortby] = useState("")

    const handleHighToLow = (item) => {
        setSort("dis_price")
        setOrder("DESC")
        setSortby(item)
    }

    const handleLowToHigh = (item) => {
        setSort("dis_price")
        setOrder("asc")
        setSortby(item)
    }

    const handleBetterDiscount = (item) => {
        setSort("discount")
        setOrder("DESC")
        setSortby(item)
    }

    const handlePopularity = (item) => {
        setSort("review")
        setOrder("DESC")
        setSortby(item)
    }

    const handleWhatnew = (item) => {
        setType(true);
        setSortby(item)
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
                <ProductList handleHighToLow={handleHighToLow} handleLowToHigh={handleLowToHigh} handleBetterDiscount={handleBetterDiscount} handlePopularity={handlePopularity} handleWhatnew={handleWhatnew} sortby={sortby}/>
            </div>
            
        </div>
    )
}


export {TShirtMainPage};