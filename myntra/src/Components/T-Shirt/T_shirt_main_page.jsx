import React from "react"
import Filter from "./Filter"
import Header from "./Header"
import ProductList from "./ProductList"
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
        </div>
    )
}


export {TShirtMainPage};