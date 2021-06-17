import React from 'react';
import images1 from "./Images/MensMainPage1.webp";
import BestBuys from './BestBuys';
import CategoryBag from './CategoryBag';
import ExploreBrands from './ExploreBrands';
import SlashPrices from './SlashPrices';
import SportsWear from './SportsWear';
import TopBrands from './TopBrands';
import TrendAccessories from './TrendAccessories';
import TrendFootwear from './TrendFootwear';
import TrendKids from './TrendKids';
import TrendSeason from './TrendSeason';
import ImageCarousel from './ImageCarousel';
import Footer from "../Footer/Footer.jsx";
import styles from "./styles.module.css"

const MensMainPage = () => {
    return (
        <div >
            <div className={styles.marginTop80}>
                <br />

                <img width="97%" src={images1} alt="" />
                {/* <img width="97%" src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2021/4/20/aaaf0a97-f8dc-451c-bfb6-e8968538d9df1618933007337-desktop-safety-4.jpg" alt="" /> */}
                <br />
                <br />
            </div>

            <ImageCarousel />
            
            <TopBrands />
            <CategoryBag />
            <ExploreBrands/>
            <BestBuys />
            <SlashPrices />
            <TrendSeason />
            <TrendKids />
            <SportsWear />
            <TrendFootwear />
            <TrendAccessories />  
            <Footer />  

            {/* <div>
                <div className={styles.fonts}>CATEGORIES TO BAG</div>

            </div> */}
        </div>
    );
};

export default MensMainPage;