import axios from 'axios'
import React from 'react'
import Coupon from "./images/Coupon.png"
import styles from"./Login.module.css"
import { useDispatch, useSelector } from 'react-redux'
import {loginProcess} from "../../Redux/Login/Action"
import {Redirect} from "react-router-dom";
import { useHistory } from "react-router-dom";



function Login() {
    let history = useHistory();
    const [mobile, setMobile]=React.useState("")
    const [userdetails, setUserdetails]=React.useState([])
    const dispatch = useDispatch()
    const userAuth = useSelector(state => state.loginred.userAuth)

    React.useEffect(()=>{
        getUser()
    },[])
    const getUser=()=>{
        axios.get("https://masai-project.herokuapp.com/users")
        .then(res=>{
            setUserdetails(res.data) 
        })
        .catch(err=> alert(err))
    }

    const handleLogin=()=>{
      dispatch(loginProcess(userdetails,mobile))
    }
 

    const handleChange=()=>{}

    return !userAuth?(
        <div className={styles.logincontainer}>
            <div className={styles.logindiv}>
                    <div className={styles.loginpromo}> 
                    <img className={styles.couponcode} src={Coupon} alt="" />  
                    </div>
                    <div className={styles.inputcontainer}>
                        <div>
                            <span className={styles.heading}>Login</span><span className={styles.heading2}>or</span><span className={styles.heading1}>Signup</span><br/>
                            <div className={styles.inputdiv}>
                                <input className={styles.input1} type="text" value={`+91`} onChange={()=>handleChange()} />
                                <input onChange={(e)=>setMobile(e.target.value)} value={mobile} className={styles.input2} type="text" placeholder="Mobile Number" />
                                <p className={styles.terms}>By continuing, I agree to the <span className={styles.conditions}>Terms of Use</span> & <span className={styles.conditions}>Privacy Policy</span></p> 
                                <button className={styles.loginbutton} onClick={()=>{handleLogin();history.go(-1)}}>CONTINUE</button>
                                <p>Have trouble in logging in? <span className={styles.conditions}>Get help</span></p>
                             </div>
                        </div>

                    </div>
            </div>
        </div>
          
    ):(<Redirect to="/login/userdetails"/>)
}

export default Login
