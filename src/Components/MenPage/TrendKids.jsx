import React from 'react';
import styles from "./styles.module.css"
import images1 from "./Images/TrendKids1.webp";
import images2 from "./Images/TrendKids2.webp";
import images3 from "./Images/TrendKids3.webp";
import images4 from "./Images/TrendKids4.webp";
import images5 from "./Images/TrendKids5.webp";
import images6 from "./Images/TrendKids6.webp";
import images7 from "./Images/TrendKids7.webp";
import images8 from "./Images/TrendKids8.webp";
import images9 from "./Images/TrendKids9.webp";
import images10 from "./Images/TrendKids10.webp";


const TrendKids = () => {

    const trendingKidsImages = [images1, images2, images3, images4, images5, images6, images7, images8, images9, images10]

    // const trendingKidsImages = [
    //     "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2021/2/4/187e85c9-917e-414c-8e70-85041637b8d11612378911225-Content-Kids-rompers.jpg",
    //     "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2021/2/4/ca1a9962-a61e-4ecc-b46c-54ecf2a05d8e1612378911211-Content-Kids-PullOnShorts.jpg",
    //     "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2021/2/4/270a8f9d-bb06-4797-9578-df61c78354f01612378911183-Content-Kids-PoloTees.jpg",
    //     "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2021/2/4/9050914d-b5ab-45a4-8910-93c9b09e4e0f1612378911240-Content-Kids-SoliShirts.jpg",
    //     "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2021/2/4/3808ee01-c8b8-4087-96bd-81b08cf6a2831612378911197-Content-Kids-PrintedLoungeBottoms.jpg",
    //     "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2021/2/4/78f1d050-3a85-4049-9826-6aa9c6c062ac1612378911156-Content-Kids-Doodle.jpg",
    //     "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2021/2/4/f7b0df89-8620-41d8-910d-a38b29de48251612378911170-Content-Kids-LogoMania.jpg",
    //     "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2021/2/4/16847e0f-16d4-4e20-a30a-a217d30a40ec1612378911142-Content-Kids-Colourblocked.jpg",
    //     "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2021/2/4/1af0d7ff-bc33-482b-8614-8886b82bc0b31612378911252-Content-Kids-SuperheroPrints.jpg",
    //     "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2021/2/4/450084b0-e9d5-4b35-b22f-ba735905662b1612378911267-Content-Kids-VintagePolka.jpg"
    // ]

    return (
        <div>
            <div className={styles.fonts}>TRENDS OF SEASON FOR KIDS</div>

            <div className={styles.show}> 
                { trendingKidsImages.map((el,i) => 
                <div key={i}><img src={el} alt="pic" width="90%" /></div>
                ) }
            </div>
        </div>
    );
};

export default TrendKids;