import React from 'react';
import logo from "./Images/myntra-logo.png"
import image2 from "./Images/image2.png"
import image3 from "./Images/image3.png"
import styles from "./bag.module.css"
import { Link } from "react-router-dom";

const BagNavbar = () => {
    return (
        <div className={styles.bagNav}>
            <Link to="/">
                <div>
                    <img src={logo} alt="" width="44px"/>
                </div>
            </Link>
            
            <div>
                <img src={image2} alt="" width="350px"/>
            </div>
            <div>
                <img src={image3} alt="" width="150px" />
            </div>
        </div>
    );
};

export default BagNavbar;