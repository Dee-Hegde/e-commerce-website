import React from 'react'
import styles from"./Footer.module.css"
import googlePlay from "./images/googlePlay.png"
import Appstore from "./images/AppStore.png"
import Social from "./images/Social.png"
import Guarantee from "./images/Guarantee.png"

function Footer() {
    const footer1=[
        {title:"ONLINESHOPPING",
        sub:["Men","Women","Kids","Home & Living","Beauty","Gift Cards"]},
        {title:"USEFUL LINKS",
        sub:["Contact Us","FAQ","T&C","Terms of Use","Track Order","Shipping","Cancellation","Returns","Whitehat","Blog"]},
    ]

    return (
        <div>
            <div className={styles.Footerclass}>
                {footer1.map((item,j)=><div key={j} className={styles.Footerclassdiv1}>
                   <h5 className={styles.colorblack}>{item.title}</h5>
                        {item.sub.map((el,z)=><p key={z}>{el}</p>)}
                    </div>)}
                <div  className={styles.Footerclassdiv2}>
                    <h5>EXPERIENCE MYNTRA APP ON MOBILE</h5>
                    <div>
                        <img className={styles.footericon1} src={googlePlay} alt="" />
                        <img className={styles.footericon2} src={Appstore} alt="" />
                    </div>
                    <h5>KEEP IN TOUCH</h5>
                    <img src={Social} alt="" />
                </div>
                <div>
                    <img className={styles.footer4} src={Guarantee} alt="" />
                </div>
            </div>
            <div className={styles.footer5}>
            <p>In case of any concern,<span className={styles.footerspan}>Contact Us</span></p>
            <p>© 2021 www.myntra.com. All rights reserve</p>
            </div>      
        </div>
    )
}

export default Footer
