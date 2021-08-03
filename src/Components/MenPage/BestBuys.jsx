import React from 'react';
import styles from "./styles.module.css"
import images1 from "./Images/BestBuys1.webp";
import images2 from "./Images/BestBuys2.webp";
import images3 from "./Images/BestBuys3.webp";
import images4 from "./Images/BestBuys4.webp";
import images5 from "./Images/BestBuys5.webp";
import images6 from "./Images/BestBuys6.webp";

const BestBuys = () => {

    const bestBuyImages = [images1, images2, images3, images4, images5, images6]

    // const bestBuyImages = [
    //     "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2020/11/24/10e06978-7876-4e88-9a5d-7c856a69ead11606201450945-Casual-Shoes.jpg",
    //     "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2020/11/24/d2e73661-ec13-4f77-9065-8fd6b35d4b591606201451958-TSHIRTS-M.jpg",
    //     "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2020/11/24/295c1454-b64b-4074-90af-27f58ac48ed11606201451319-JEANS-M.jpg",
    //     "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2020/11/24/b7864358-872e-4183-8387-4422c37a2d671606201451919-TRACKPANTS.jpg",
    //     "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2020/11/24/8e5d7b20-9e92-4e84-91b4-2c420a06e3f11606201451591-SHIRTS.jpg",
    //     "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2020/11/24/2a13fa63-7a31-4ede-8d15-912d39e6ae761606201451755-Sports-Shoes-For-Men.jpg"
    // ]

    return (
        <div>
            <div className={styles.fonts}>BEST BUYS FOR MEN</div>

            <div className={styles.showCategory}> 
                { bestBuyImages.map((el,i) => 
                <div key={i}><img src={el} alt="pic" width="90%" /></div>
                ) }
            </div>
        </div>
    );
};

export default BestBuys;