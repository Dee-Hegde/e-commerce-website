import React from 'react'
import Kurtas from "./Homepage Images/Kurtas sets.png"
import Sarees from "./Homepage Images/Sarees.png"
import Dresses from "./Homepage Images/Dresses.png"
import Long from "./Homepage Images/loungwear.png"
import styles from "./Home.module.css"
import Jwellery from "./Homepage Images/Jewellary.png"
import Tops from "./Homepage Images/Tops.png"
import Handbag from "./Homepage Images/Bags.png"
import Trackpant from "./Homepage Images/Trackpant.png"
import Wplus from "./Homepage Images/Wplus.png"
import ForHim from "./Homepage Images/ForHim/ForHim.png"
import Tshirt from "./Homepage Images/ForHim/Tshirt.png"
import Longwear from "./Homepage Images/ForHim/Longwear.png"
import Shirts from "./Homepage Images/ForHim/Shirts.png"
import Inner from "./Homepage Images/ForHim/Innerwear.png"
import Trac from "./Homepage Images/ForHim/Trackpants.png"
import FlipFlops from "./Homepage Images/ForHim/Flip-flop.png"
import Shorts from "./Homepage Images/ForHim/Shorts.png"
import SportsShoes from "./Homepage Images/ForHim/SportsShoes.png"
import Suits from "./Homepage Images/ForHim/Suits.png"
import Kurtasmen from "./Homepage Images/ForHim/KurtasMen.png"
import { useHistory } from 'react-router'

function OffersHer() {
    let lin1=[Kurtas,Sarees,Dresses,Kurtas,Long]
    let lin2=[Jwellery,Tops,Handbag,Trackpant,Wplus]
    let lin3=[Tshirt,Longwear,Shirts,Inner,Trac]
    let lin4=[FlipFlops, Shorts,SportsShoes,Kurtasmen,Suits]

    const history=useHistory()

    return (
        <div>
        <div className={styles.dealsdiv2}>
            {lin1.map((item,j)=>(<div key={j}>
                <img className={styles.dealsimg} src={item} alt="" />
            </div>))}
        </div>
        <div className={styles.dealsdiv2}>
            {lin2.map((item,j)=>(<div key={j}>
                <img className={styles.dealsimg} src={item} alt="" />
            </div>))}
        </div>
        <img className={styles.spotimg2} src={ForHim} alt="" />
        <div className={styles.dealsdiv2}>
            {lin3.map((item,j)=>(<div onClick={()=>history.push("./result")} key={j}>
                <img className={styles.dealsimg} src={item} alt="" />
            </div>))}
        </div>
        <div className={styles.dealsdiv2}>
            {lin4.map((item,j)=>(<div key={j}>
                <img className={styles.dealsimg} src={item} alt="" />
            </div>))}
        </div>
        </div>
    )
}

export default OffersHer
