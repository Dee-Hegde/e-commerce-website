import React from "react";
import { useSelector } from "react-redux";
import styles from "./Header.module.css"

function Header() {
    const {data} = useSelector((state) => state.products);


    return (
        <div id={styles.main_div}>
            <div className={styles.title_div}>
                <div>Home /</div>
                <div>Clothing /</div>
                <div>Men T-Shirts</div>
            </div>
            <div className={styles.items_count}>men T-shirts <span> {`- ${data.length} items`}</span></div>
        </div>
    )
}

export default Header;   
