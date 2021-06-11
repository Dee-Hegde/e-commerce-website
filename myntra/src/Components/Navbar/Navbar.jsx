import React from 'react'
import NavLeft from './NavLeft'
import NavRight from './NavRight'
import styles from "./Navbar.module.css"
import NavLinks from './NavLinks'
import NavSearch from "./NavSearch"

function Navbar() {
    return (
        <div className={styles.navbar}>
            <NavLeft/>
            <NavLinks/>
            <NavSearch/>
            <NavRight/> 
        </div>
    )
}

export default Navbar
