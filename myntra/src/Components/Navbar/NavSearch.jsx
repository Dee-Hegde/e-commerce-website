import React from 'react'
import styles from "./Navbar.module.css"
import searchlogo from "./navimages/search-interface-symbol.png";

function NavSearch() {
    return (
        <div className={styles.navserach}>
            <button>
                <img className={styles.navsearchlogo} src={searchlogo} alt="" />
                <input placeholder="search for products, brands and more" type="text" />
            </button>
        </div>
    )
}

export default NavSearch
