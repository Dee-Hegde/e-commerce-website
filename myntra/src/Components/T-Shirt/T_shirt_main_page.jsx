import React from "react"
import Filter from "./Filter"
import FilterComp from "./FilterComp"
import Header from "./Header"
import ProductList from "./ProductList"
import ProductListComp from "./ProductListComp"
import styles from "./T_shirt_main_page.module.css"

function TShirtMainPage() {
    return (
        <div>
            <div id={styles.note_div}>
                - As per guidelines, we are only delivering essentials in govt-specified pincodes -
            </div>
            <Header />
            <div id={styles.wrapper}>
                <Filter />
                <ProductList />
            </div>
            <div id={styles.wrapper2}>
                <FilterComp />
                <ProductListComp />
            </div>
        </div>
    )
}


export {TShirtMainPage};