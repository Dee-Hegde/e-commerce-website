import React from 'react';
import styles from "./styles.module.css"
import images1 from "./Images/TrendSeason1.webp";
import images2 from "./Images/TrendSeason2.webp";
import images3 from "./Images/TrendSeason3.webp";
import images4 from "./Images/TrendSeason4.webp";
import images5 from "./Images/TrendSeason5.webp";
import images6 from "./Images/TrendSeason6.webp";
import images7 from "./Images/TrendSeason7.webp";
import images8 from "./Images/TrendSeason8.webp";
import images9 from "./Images/TrendSeason9.webp";
import images10 from "./Images/TrendSeason10.webp";


const TrendSeason = () => {

    const trendingImages = [images1, images2, images3, images4, images5, images6, images7, images8, images9, images10]

    // const trendingImages = [
    //     "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2021/2/4/996b01f2-3a00-4f7f-87d0-e6f2ef1aedd31612377587925-Content-Men-printedLoungeTees.jpg",
    //     "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2021/2/4/11b5b431-4871-4d51-a716-d173829848471612377587875-Content-Men-CheckedBoxers.jpg",
    //     "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2021/2/4/4c9f9258-6245-4e56-8deb-117dd94deade1612377587960-Content-Men-SolidLoungePAnts.jpg",
    //     "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2021/2/4/ccf188c4-6cb4-48fd-b682-24a0810c06c21612377587907-Content-Men-NightSets.jpg",
    //     "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2021/2/4/46f21ca1-4e89-4358-8978-0bdd3a12adcd1612377587979-Content-Men-SolidPullovers.jpg",
    //     "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2021/2/4/0d779673-aec4-42c0-a77e-87f905d665e41612377588009-Content-Men-TypoShirts.jpg",
    //     "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2021/2/4/4692e5a0-0a49-4029-82dc-c0ffe52677291612377587943-Content-Men-SlashedDenims.jpg",
    //     "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2021/2/4/83ce1366-9cf1-4375-9e81-3b7db76523ab1612377587891-Content-Men-chestPrintedTees.jpg",
    //     "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2021/2/4/3f4c7e30-abae-4fac-97f8-c83bedf5f25c1612377587856-Content-Men-CargoTrousers.jpg",
    //     "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2021/2/4/64da9aaf-bbf8-4cc5-83d1-b2b5d50b479c1612377587843-Content-Men-AngrakhaKurats.jpg"
    // ]

    return (
        <div>
            <div className={styles.fonts}>TRENDS OF SEASON FOR MEN</div>

            <div className={styles.show}> 
                { trendingImages.map((el,i) => 
                <div key={i}><img src={el} alt="pic" width="90%" /></div>
                ) }
            </div>
        </div>
    );
};

export default TrendSeason;