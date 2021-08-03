import React from 'react';
import styles from "./styles.module.css"
import { Link } from "react-router-dom";
import images1 from "./Images/CategoryBag1.webp";
import images2 from "./Images/CategoryBag2.webp";
import images3 from "./Images/CategoryBag3.webp";
import images4 from "./Images/CategoryBag4.webp";
import images5 from "./Images/CategoryBag5.webp";
import images6 from "./Images/CategoryBag6.webp";


const CategoryBag = () => {

    const categoryImages = [
        { src: images1, gender:"men", item:"shirt" },
        { src: images2, gender:"men", item:"tshirt" },
        { src: images3, gender:"men", item:"jeans" },
        { src: images4, gender:"men", item:"shorts" },
        { src: images5, gender:"men", item:"casual-shoes" },
        { src: images6, gender:"kids", item:"infant-essentials" }
    ]

    // const categoryImages = [
    //     "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2020/7/8/89f1bd9d-3a28-456d-888a-beff717a06f81594222908155-Shirts.jpg",
    //     "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2020/7/8/9ff1f34e-9242-47fd-9566-e7d7a5c240511594222908483-T-shirt.jpg",
    //     "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2020/7/8/720cf6ef-3be4-4825-8211-0125c942e3821594222907960-Jeans.jpg",
    //     "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2020/7/8/2bac5e2d-337b-42c0-88c7-3d4e2dc464141594222908262-Shorts-_-Trousers.jpg",
    //     "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2020/7/8/ae14f627-9fd9-41ce-80a4-f107c316c7eb1594222907625-Casual-shoes.jpg",
    //     "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2020/7/8/f0f9b81a-b9d5-4b8b-94d5-ea878fa9b18e1594222834121-Infant-Essential.jpg"
    // ]

    return (
        <div>
            <div className={styles.fonts}>CATEGORIES TO BAG</div>

            <div className={styles.showCategory}> 
                { categoryImages.map((el,i) => 
                <Link to={`/result?gender=${el.gender}`}>
                <div key={i}><img src={el.src} alt="pic" width="90%" /></div>
                </Link>
                ) }
            </div>
        </div>
    );
};

export default CategoryBag;