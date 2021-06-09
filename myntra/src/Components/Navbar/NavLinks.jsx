import React from 'react'
import {Link} from "react-router-dom"
import styles from "./Navbar.module.css"

function NavLinks() {
    const data=["men","women","kids","home & living", "beauty"]
    return (
        <div className={styles.navbar1}>
            {data.map(item=>(<div className={styles.navdiv}>
                <Link  to={`/${item}`}><h4>{item.toUpperCase()}</h4></Link>
            </div>))}
        </div>
    )
}

export default NavLinks
