import React from 'react'
import Homeoffer from "./Homepage Images/Offerspage.png"
import ExitingDeal from "./Homepage Images/ExitingOffers.png"
import styles from "./Home.module.css"

function HomeOffers() {
    return (
        <div>
            <div>
            <img className={styles.offersimage} src={Homeoffer} alt="image" />
            </div>
           <img className={styles.exitingDeals} src={ExitingDeal} alt="image" />
        </div>
    )
}

export default HomeOffers
