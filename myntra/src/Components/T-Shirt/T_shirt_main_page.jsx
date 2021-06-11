import React from "react"
import Header from "./Header"
import styles from "./T_shirt_main_page.module.css"

function TShirtMainPage() {
    return (
        <div>
            <div id={styles.note_div}>
                - As per guidelines, we are only delivering essentials in govt-specified pincodes -
            </div>
            <Header />
        </div>
    )
}


export {TShirtMainPage};