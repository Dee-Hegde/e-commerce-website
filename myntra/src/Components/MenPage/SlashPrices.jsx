import React from 'react';
import styles from "./styles.module.css"
import images1 from "./Images/SlashPrices1.webp";
import images2 from "./Images/SlashPrices2.webp";
import images3 from "./Images/SlashPrices3.webp";
import images4 from "./Images/SlashPrices4.webp";
import images5 from "./Images/SlashPrices5.webp";
import images6 from "./Images/SlashPrices6.webp";
import images7 from "./Images/SlashPrices7.webp";
import images8 from "./Images/SlashPrices8.webp";
import images9 from "./Images/SlashPrices9.webp";
import images10 from "./Images/SlashPrices10.webp";
import images11 from "./Images/SlashPrices11.webp";
import images12 from "./Images/SlashPrices12.webp";

const SlashPrices = () => {

    const slashImages = [images1, images2, images3, images4, images5, images6, images7, images8, images9, images10, images11, images12]

    // const slashImages = [
    //     "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2020/11/24/62a5ba6e-8790-449a-aa62-af1d16fe92921606202790310-UCB.jpg",
    //     "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2020/11/24/c7ca519b-c77c-46d3-8e05-636fd4f1a3a51606202789528-Adidas.jpg",
    //     "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2020/11/24/267e497a-9761-4c97-981f-c02a96e529601606202789570-AllenSolly.jpg",
    //     "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2020/11/24/acc4b098-3c24-4d5d-986b-264ff376cd651606202789773-FM.jpg",
    //     "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2020/11/24/164a482c-8b9c-4771-9eb8-348f99d960e21606202789820-GAP.jpg",
    //     "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2020/11/24/46c58ebe-ed69-47e8-b8db-326cc538cc6f1606202789897-J_J.jpg",
    //     "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2020/11/24/6b7731eb-9597-4033-af50-5d7b008c0ae51606202789952-Levis.jpg",
    //     "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2020/11/24/48a439e5-8999-486f-98a6-307c95b074281606202790000-LP.jpg",
    //     "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2020/11/24/3a6c52d0-306c-4c67-b5e2-0d2ae90dfec61606202790087-Nike.jpg",
    //     "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2020/11/24/68ca4cf7-f2c6-471f-a39b-92b7e3a779bc1606202790173-PeterEngland.jpg",
    //     "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2020/11/24/bb896c7d-0c56-434c-bcbe-5ba4a8d198ce1606202790216-Puma.jpg",
    //     "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2020/11/24/2270ff19-8658-4451-b8db-abd6803d689a1606202790264-Tommy.jpg"
    // ]

    return (
        <div>
            <div className={styles.fonts}>BRANDS AT SLASHED PRICES</div>

            <div className={styles.showCategory}> 
                { slashImages.map((el,i) => 
                <div key={i}><img src={el} alt="pic" width="90%" /></div>
                ) }
            </div>
        </div>
    );
};

export default SlashPrices;