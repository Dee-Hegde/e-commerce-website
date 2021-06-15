import React from 'react'
import { useSelector,useDispatch} from 'react-redux'
import { useHistory } from "react-router-dom";
import {Redirect} from "react-router-dom"
import styles from"./Login.module.css"
import imageuser from "../Navbar/navimages/user.png"
import { logoutReq } from '../../Redux/Login/Action';

function UserDetails() {

    let history = useHistory();
    const dispatch = useDispatch()
    const phoneNumber = useSelector(state => state.loginred.phoneNumber)
    const email = useSelector(state => state.loginred.email)
    const userAuth = useSelector(state => state.loginred.userAuth)
    const username = useSelector(state => state.loginred.username)

    const handleLogout=()=>{
        alert("Do you want to logout?")
        dispatch(logoutReq())
    }



    return userAuth? (
        <div>
        <div className={styles.afterlogin}>
            <div>
                <img className={styles.imgfirework} src={imageuser} alt="" />
            </div>
            <div>
            <h1>Hello,{username}</h1>
            <h3>Email : {email}</h3>
            <h3>Phone Number:+91 {phoneNumber}</h3>
            </div>
        </div>
            <p>You are already logged in using above details.</p>
            <p>Thank you.</p>
            <h2>Happy Shopping !!</h2>
            <button className={styles.loginbutton1} onClick={()=>history.go(-1)}>Continue</button><br/>
            <button className={styles.loginbutton2} onClick={()=>handleLogout()}>Logout</button>
        </div>
    ):(<Redirect to="/login"/>)
}

export default UserDetails
