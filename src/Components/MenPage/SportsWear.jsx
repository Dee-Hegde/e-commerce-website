import React from 'react';
import styles from "./styles.module.css"
import images1 from "./Images/SportsWear1.webp";
import images2 from "./Images/SportsWear2.webp";
import images3 from "./Images/SportsWear3.webp";
import images4 from "./Images/SportsWear4.webp";
import images5 from "./Images/SportsWear5.webp";


const SportsWear = () => {

    const sportsWearImages = [images1, images2, images3, images4, images5]

    // const sportsWearImages = [
    //     "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/19/4aa58fe6-8c61-4e37-9fa8-436c31aecb211597840566511-Content-sportswear-essentials-activewear.png",
    //     "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/retaillabs/2020/8/21/eedc6c0c-c28b-4ccb-952f-a302c96c59ba1598030134978-Content-mostselling-Sportswear-Nikerevolution.jpeg",
    //     "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/19/7472ab66-adf2-4d1d-9379-4770a73c1efe1597841103172-Content-sportswear-brand-proline.png",
    //     "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/19/8becef46-f822-4874-b92a-a7cc7f58819d1597841103131-Content-sportswear-brand-nike.png",
    //     "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/19/65bafbc5-f83b-4158-8168-f7553043814c1597841103082-Content-sportswear-brand-Asics.png"
    // ]

    return (
        <div>
            <div className={styles.fonts}>TRENDING IN SPORTS WEAR</div>

            <div className={styles.show}> 
                { sportsWearImages.map((el,i) => 
                <div key={i}><img src={el} alt="pic" width="90%" /></div>
                ) }
            </div>
        </div>
    );
};

export default SportsWear;