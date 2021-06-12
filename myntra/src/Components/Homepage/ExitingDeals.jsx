import React from 'react'
import JJoffers from "./Homepage Images/JJOffers.png"
import ArrowOffers from "./Homepage Images/ArrowOffers.png"
import Modarapido from "./Homepage Images/ModarapidoOffers.png"
import Triumph from "./Homepage Images/TriomphOffers.png"
import EleOffers from "./Homepage Images/EleOffers.png"
import styles from "./Home.module.css"
import Spotlight from "./Homepage Images/SpotLightImg.png"
import TopOffers from "./Homepage Images/topOffers.png"

function ExitingDeals() {
    let deals=[JJoffers, ArrowOffers,Modarapido ,Triumph,EleOffers]
    return (
        <div>
            <div className={styles.dealsdiv}>
                {deals.map((item)=>(
                    <img src={item} alt="image" />
                ))}
            </div>
            <img className={styles.spotimg} src={Spotlight} alt="image" /><br/>
            <img className={styles.spotimg2} src={TopOffers} alt="image" />
        </div>
    )
}

export default ExitingDeals
