import React from 'react'
import Coupon from "./images/Coupon.png"
import styles from"./Login.module.css"

function Login() {
    const [mobile, setMobile]=React.useState("")

    const handleClick=()=>{
        
    }
    return (
        <div>
            <div className={styles.Loginmaindiv}>
                <div className={styles.logindiv}>
                    <div className={styles.loginsubdiv}>
                        <img className={styles.couponcode} src={Coupon} alt="" />
                    </div>
                
                    <div className={styles.spandiv}>
                        <span className={styles.heading}>Login</span><span className={styles.heading2}>or</span><span className={styles.heading1}>Signup</span>
                    </div>
                    <div className={styles.inputdiv}>
                        <input className={styles.input1} type="text" value={`+91`} />
                        <input onChange={(e)=>setMobile(e.target.value)} value={mobile} className={styles.input2} type="text" placeholder="Mobile Number" />
                    </div>
                    <p className={styles.terms}>By continuing, I agree to the <span className={styles.conditions}>Terms of Use</span> & <span className={styles.conditions}>Privacy Policy</span></p> 
                    <button className={styles.loginbutton} onClick={handleClick}>Continue</button>
                    <p>Have trouble in logging in? <span className={styles.conditions}>Get help</span></p>
                </div>
            </div>
        </div>
    )
}

export default Login
