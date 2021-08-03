import React from 'react';
import styles from "./styles.module.css"
import images1 from "./Images/ExploreBrands1.webp";
import images2 from "./Images/ExploreBrands2.webp";
import images3 from "./Images/ExploreBrands3.webp";
import images4 from "./Images/ExploreBrands4.webp";
import images5 from "./Images/ExploreBrands5.webp";


const ExploreBrands = () => {

    const brandImages = [images1, images2, images3, images4, images5]

    // const brandImages = [
    //     "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/25/a88b9390-5adb-493b-a1b3-702c59ccf53a1598348260502-Nike.jpg",
    //     "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/25/c9f66558-feab-4d76-aa3c-adc68d81dce21598348260415-Levis.jpg",
    //     "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/5/178c1e5d-69f2-402f-a2a5-ef44700a0f691596640983793-Roadster---.jpg",
    //     "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/25/085719b1-c71e-4f47-950c-9a6b7f291fac1598348260370-Jack-_-Jones.jpg",
    //     "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/5/774f42c4-f459-4514-9b90-cf8a60a5f68c1596644478087-hrx30.jpg"
    // ]

    return (
        <div>
            <div className={styles.fonts}>EXPLORE TOP BRANDS</div>

            <div className={styles.show}> 
                { brandImages.map((el,i) => 
                <div key={i}><img src={el} alt="pic" width="90%" /></div>
                ) }
            </div>
        </div>
    );
};

export default ExploreBrands;