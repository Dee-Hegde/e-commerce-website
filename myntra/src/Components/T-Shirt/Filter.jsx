import React from "react"
import styles from "./Filter.module.css"


function FilterHeader({allFilters}) {
    return (
        <div className={styles.filter_wrapper}>
            <div className={styles.filter_header}>
                FILTERS
            </div>
            {/* { allFilters.length > 0 ? <div className={styles.clearall}>
                CLEAR ALL
            </div> : ""} */}
        </div>
    )
}

export default FilterHeader;