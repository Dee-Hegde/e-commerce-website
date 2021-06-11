import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getData } from "../../Redux/ProductListing/action";
import styles from "./ProductListComp.module.css"


function ProductListComp() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getData())
    }, [])

    return (
        <div id={styles.main_wrapper}>
            <div>

            </div>
        </div>
    )
}

export default ProductListComp;