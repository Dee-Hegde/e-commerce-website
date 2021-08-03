import React from 'react';
import styles from "./styles.module.css"
import images1 from "./Images/TrendAccessories1.webp";
import images2 from "./Images/TrendAccessories2.webp";
import images3 from "./Images/TrendAccessories3.jpg";
import images4 from "./Images/TrendAccessories4.jpg";
import images5 from "./Images/TrendAccessories5.webp";

const TrendAccessories = () => {

    const accessoryImages = [images1, images2, images3, images4, images5]

    // const accessoryImages = [
    //     "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/7/28/bddd9c73-e4f1-43c0-a073-2ff3c0e376b51595934830554-Content-Accesories-men-Sporty-Watches_.jpg",
    //     "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/7/28/2bcf907c-bc21-44cb-9021-7575a963b0ef1595934830671-Content-Accesories-Unisex-True-wirless-lets-get-free.jpg",
    //     "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/19/5e68d729-b955-431c-930c-931d8b452d421597840217983-Content-accessories-color-white.png",
    //     "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/19/8363b55c-446f-4de2-bc5b-e75fd6fdfb2d1597840217862-Content-accessories-brand-fastrack.png",
    //     "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/19/274b3659-420d-43c2-8e4c-17249e6eaf8d1597840218139-Content-accessories-trend-minimalist.png"
    // ]

    return (
        <div>
            <div className={styles.fonts}>TRENDING IN ACCESSORIES</div>

            <div className={styles.show}> 
                { accessoryImages.map((el,i) => 
                <div key={i}><img src={el} alt="pic" width="90%" /></div>
                ) }
            </div>
        </div>
    );
};

export default TrendAccessories;