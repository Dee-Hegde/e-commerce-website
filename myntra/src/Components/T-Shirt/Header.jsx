import React from "react";
import styles from "./Header.module.css"

function Header() {
    return (
        <div id={styles.main_div}>
            <div className={styles.title_div}>
                <div>Home /</div>
                <div>Clothing /</div>
                <div>Men T-Shirts</div>
            </div>
            <div className={styles.items_count}>men T-shirts <span> - 54255 items</span></div>
        </div>
    )
}

export default Header;   
