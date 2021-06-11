import React from 'react';
import userlogo from "./navimages/user.png";
import wishlist from "./navimages/heart.png"
import bag from "./navimages/shopping-bag.png"
import styles from "./Navbar.module.css"
import { useHistory } from "react-router-dom";

function NavRight() {
    let history = useHistory();
    return (
        <div className={styles.userdiv}>
            <div onClick={()=>history.push("/login")}>
            <h5><img className={styles.userlogo} src={userlogo} alt="" />
                <br/>Profile</h5>
            </div>
            <div onClick={()=>history.push("/wishlist")}> 
            <h5><img className={styles.userlogo} src={wishlist} alt="" />
               <br/> Wishlist</h5>
            </div>
            <div onClick={()=>history.push("/bag")}>
            <h5><img className={styles.userlogo} src={bag} alt="" />
                <br/>Bag</h5>
            </div>

        </div>
    )
}

export default NavRight
