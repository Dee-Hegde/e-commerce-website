import React, { useEffect } from 'react';
import styles from "./styles.module.css"
import { useDispatch, useSelector } from "react-redux";
import { getWishData, postWishData } from '../../Redux/Wishlist/action';


const MyWishlist = () => {

    let checkData = [{id:"03", title:"a"},{id:"04", title:"ab"},{id:"05", title:"ac"},{id:"06", title:"ad"}]

    const wishlistData = useSelector(state=>state.wishlist.wishlistData)
    const dispatch = useDispatch()

    const handleWishlist = (idx) => {
        const updatedWishlist = checkData.filter(el=> el.id==idx )
        dispatch( postWishData(updatedWishlist[0]) )
    }

    // useEffect(()=> {
    //     dispatch( getWishData() )
    // }, [])
    console.log(wishlistData);

    return (
        <div>
            <div className={styles.heading}>My Wishlist</div>

            { checkData.map((item,i)=> 
            <button onClick={()=>handleWishlist(item.id)}>wishCheck{item.id}</button>
            ) }

            <div>

            </div>
        </div>
    );
};

export default MyWishlist;