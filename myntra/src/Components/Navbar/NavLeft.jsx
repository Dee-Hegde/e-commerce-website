import React from 'react'
import Logo from "./navimages/Myntra-logo-png-ico.png"
import styles from "./Navbar.module.css"
import { useHistory } from "react-router-dom";

function NavLeft() {
    let history = useHistory();
    return (
        <div onClick={()=>history.push("/")} className={styles.logodiv}>
            <img className={styles.logo} src={Logo} alt="logo" />
        </div>
    )
}

export default NavLeft
