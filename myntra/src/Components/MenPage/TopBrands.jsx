import React from 'react';
import styles from "./styles.module.css"
import { Link } from "react-router-dom";
import images1 from "./Images/TopBrands1.webp";
import images2 from "./Images/TopBrands2.webp";
import images3 from "./Images/TopBrands3.jpg";
import images4 from "./Images/TopBrands4.webp";
import images5 from "./Images/TopBrands5.jpg";
import images6 from "./Images/TopBrands6.webp";
import images7 from "./Images/TopBrands7.webp";
import images8 from "./Images/TopBrands8.webp";
import images9 from "./Images/TopBrands9.webp";
import images10 from "./Images/TopBrands10.webp";

const TopBrands = () => {

    const topBrandImages = [
        { src: images1, brand:"USPoloAssn", discount:60 },
        { src: images2, brand:"Levis", discount:70 },
        { src: images3, brand:"TommyHilfiger", discount:50 },
        { src: images4, brand:"Gap", discount:60 },
        { src: images5, brand:"UnitedColorsOfBenetton", discount:70 },
        { src: images6, brand:"Jack&Jones", discount:70 },
        { src: images7, brand:"Nike", discount:50 },
        { src: images8, brand:"Puma", discount:70 },
        { src: images9, brand:"Sketchers", discount:40 },
        { src: images10, brand:"Crocs", discount:50 }
    ]

    // const topBrandImages = [images1, images2, images3, images4, images5, images6, images7, images8, images9, images10]

    // const topBrandImages = [
    //     "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/31/1dce9c3e-77fa-48f1-85a3-d3c136c1d73e1598892377652-USPA.jpg",
    //     "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/31/3fa337a0-c792-4038-8d12-50d463c189a11598892377363-Levis.jpg",
    //     "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/31/af31285e-f6a3-426e-bbea-0aedef9da17c1598892377537-Tommy-Hilfiger.jpg",
    //     "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/retaillabs/2020/9/23/365320d5-745e-4cbf-bb64-7ef1d8c9c5611600854269662-gap-men.jpg",
    //     "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/31/8d5afb84-a464-40af-9971-2e9f0827e9b71598892377591-UCB.jpg",
    //     "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/31/7c28bc7a-0184-44b2-8666-ea1438d595561598892377316-J_J.jpg",
    //     "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/31/a7d3676a-9694-4a84-835e-0408fdad884b1598892377407-Nike.jpg",
    //     "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/31/cec595c6-c7ec-4259-af8b-997a33a09ce71598892377444-Puma.jpg",
    //     "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/31/0206da63-a7cc-4f83-8527-90d7dc74706b1598892377489-Skechers.jpg",
    //     "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/31/d977e7ac-67dd-4fa6-b922-fe0057385dfa1598892377205-Crocs.jpg"
    // ]

    return (
        <div>
            <br /><br /><br />
            <div className={styles.fonts}>BIGGEST DEALS ON TOP BRANDS</div>

            <div className={styles.show}> 
                { topBrandImages.map((el,i) => 
                <Link to={`myntra-fashion-store?brand=${el.brand}&discount=${el.discount}%`}>
                <div key={i}><img src={el.src} alt="pic" width="90%" /></div>
                </Link>
                ) }
            </div>

        </div>
    );
};

export default TopBrands;