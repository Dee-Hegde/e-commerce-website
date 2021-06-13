import React, { useEffect, useState } from 'react';
import styles from "./styles.module.css"
import { useDispatch, useSelector } from "react-redux";
import { deleteWishData, getWishData, postWishData } from '../../Redux/Wishlist/action';
import SubNavbar from './SubNavbar';

const MyWishlist = () => {

    // let filterData = [ {
    //     "id": "04",
    //     "title": "Mast & Harbour",
    //     "sub_heading": "Men White & Navy Striped Round Neck T-shirt",
    //     "color": "white",
    //     "brand": "Mast & Harbour",
    //     "category": "T-shirt",
    //     "review": "199",
    //     "price": "899",
    //     "discount": "30",
    //     "sizes": [
    //       "S",
    //       "M",
    //       "L",
    //       "XL"
    //     ],
    //     "product_details": "White and navy blue striped T-shirt, has a round neck, short sleeves",
    //     "feature": [],
    //     "size_and_fit": [
    //       "The model (height 6') is wearing a size M"
    //     ],
    //     "material_&_care": [
    //       "Cotton",
    //       "Machine-wash"
    //     ],
    //     "specification": {
    //       "fabric": "Cotton",
    //       "fit": "Regular Fit",
    //       "length": "Regular",
    //       "main_trend": "New Basics",
    //       "Multipack_set": "Single",
    //       "Neck": "Round Neck",
    //       "Ocassion": "Casual",
    //       "pattern": "Striped",
    //       "print_or_pattern_type": "Striped",
    //       "sleeve_length": "Short Sleeves",
    //       "sleeve_styling": "Regular Sleeves",
    //       "sport": "-",
    //       "sustainable": "-",
    //       "technology": "-",
    //       "wash_care": "Machine Wash",
    //       "weave_type": "-",
    //       "complete_the_look": "Amp up your casual style with a well-structured T-shirt from Mast & Harbour. Catch a movie or go shopping in this white piece teamed with everyday jeans and casual slip-on sneakers."
    //     },
    //     "type": "OLD",
    //     "images": [
    //       "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/2232175/2018/3/27/11522134275641-Mast--Harbour-Men-Navy-Blue-Striped-Round-Neck-T-shirt-4401522134275464-1.jpg",
    //       "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/2232175/2018/3/27/11522134275621-Mast--Harbour-Men-Navy-Blue-Striped-Round-Neck-T-shirt-4401522134275464-2.jpg",
    //       "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/2232175/2018/3/27/11522134275599-Mast--Harbour-Men-Navy-Blue-Striped-Round-Neck-T-shirt-4401522134275464-3.jpg",
    //       "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/2232175/2018/3/27/11522134275573-Mast--Harbour-Men-Navy-Blue-Striped-Round-Neck-T-shirt-4401522134275464-4.jpg",
    //       "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/2232175/2018/3/27/11522134275560-Mast--Harbour-Men-Navy-Blue-Striped-Round-Neck-T-shirt-4401522134275464-5.jpg"
    //     ],
    //     "quantity": 1,
    //     "gender": "Men",
    //     "rating": ""
    //   },
    //   {
    //     "id": "05",
    //     "title": "Campus Sutra",
    //     "sub_heading": "Men Blue Colourblocked Round Neck T-shirt",
    //     "color": "blue",
    //     "brand": "Campus Sutra",
    //     "category": "T-shirt",
    //     "review": "989",
    //     "price": "949",
    //     "discount": "55",
    //     "sizes": [
    //       "S",
    //       "M",
    //       "L",
    //       "XL"
    //     ],
    //     "product_details": "Blue colourblocked T-shirt, has a round neck, and long sleeves",
    //     "feature": [],
    //     "size_and_fit": [
    //       "The model (height 6') is wearing a size M"
    //     ],
    //     "material_&_care": [
    //       "100% cotton",
    //       "Machine-wash"
    //     ],
    //     "specification": {
    //       "fabric": "Cotton",
    //       "fit": "Regular Fit",
    //       "length": "Regular",
    //       "main_trend": "Colourblocked",
    //       "Multipack_set": "Single",
    //       "Neck": "Round Neck",
    //       "Ocassion": "Casual",
    //       "pattern": "Colourblocked",
    //       "print_or_pattern_type": "Colourblocked",
    //       "sleeve_length": "Long Sleeves",
    //       "sleeve_styling": "Regular Sleeves",
    //       "sport": "-",
    //       "sustainable": "-",
    //       "technology": "-",
    //       "wash_care": "Machine Wash",
    //       "weave_type": "-",
    //       "complete_the_look": "Designed by the team at Campus Sutra, you're definitely in for a style treat with this cotton T-shirt. When you're attending a concert, rock this blue piece with dark denims, leather boots, and a classic leather jacket."
    //     },
    //     "type": "OLD",
    //     "images": [
    //       "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/10016983/2019/6/20/b5caaca7-b5e8-4134-9283-65473a2388031561026348090-Campus-Sutra-Men-Blue-Colourblocked-Round-Neck-T-shirt-99915-1.jpg",
    //       "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/10016983/2019/6/20/fb07f854-22b5-4c88-86a0-5942cb1720de1561026348074-Campus-Sutra-Men-Blue-Colourblocked-Round-Neck-T-shirt-99915-2.jpg",
    //       "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/10016983/2019/6/20/8e4a6907-9196-4df9-99ac-a67ecc5895db1561026348059-Campus-Sutra-Men-Blue-Colourblocked-Round-Neck-T-shirt-99915-3.jpg",
    //       "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/10016983/2019/6/20/78cfbfb8-7b8a-4c73-8865-51838480b0e31561026348042-Campus-Sutra-Men-Blue-Colourblocked-Round-Neck-T-shirt-99915-4.jpg",
    //       "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/10016983/2019/6/20/db80fe22-7040-4bcf-b291-7521fca2ad9d1561026348027-Campus-Sutra-Men-Blue-Colourblocked-Round-Neck-T-shirt-99915-5.jpg"
    //     ],
    //     "quantity": 1,
    //     "gender": "Men",
    //     "rating": ""
    //   },
    //   {
    //     "id": "06",
    //     "title": "Nautica",
    //     "sub_heading": "Men Teal Colourblocked Round Neck Slim Fit T-shirt",
    //     "color": "green",
    //     "brand": "Nautica",
    //     "category": "T-shirt",
    //     "review": "6",
    //     "price": "1799",
    //     "discount": "35",
    //     "sizes": [
    //       "S",
    //       "M",
    //       "L",
    //       "XL",
    //       "XXL"
    //     ],
    //     "product_details": "Teal and white colourblocked T-shirt, has a round neck, short sleeves",
    //     "feature": [],
    //     "size_and_fit": [
    //       "Slim Fit",
    //       "The model (height 6') is wearing a size M"
    //     ],
    //     "material_&_care": [
    //       "Cotton",
    //       "Machine-wash"
    //     ],
    //     "specification": {
    //       "fabric": "Cotton",
    //       "fit": "Slim Fit",
    //       "length": "Regular",
    //       "main_trend": "Colourblocked",
    //       "Multipack_set": "Single",
    //       "Neck": "Round Neck",
    //       "Ocassion": "Casual",
    //       "pattern": "Colourblocked",
    //       "print_or_pattern_type": "Colourblocked",
    //       "sleeve_length": "Short Sleeves",
    //       "sleeve_styling": "Regular Sleeves",
    //       "sport": "-",
    //       "sustainable": "-",
    //       "technology": "-",
    //       "wash_care": "Machine Wash",
    //       "weave_type": "-",
    //       "complete_the_look": "Slip into this snug T-shirt from Nautica and look your very best. You can pair this teal piece with slick black jeans and Chelsea boots for a fashionable weekend outfit."
    //     },
    //     "type": "OLD",
    //     "images": [
    //       "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/4277987/2018/3/16/11521191832751-Nautica-Men-Teal-Colourblocked-Round-Neck-T-shirt-2481521191832564-1.jpg",
    //       "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/4277987/2018/3/16/11521191832725-Nautica-Men-Teal-Colourblocked-Round-Neck-T-shirt-2481521191832564-2.jpg",
    //       "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/4277987/2018/3/16/11521191832696-Nautica-Men-Teal-Colourblocked-Round-Neck-T-shirt-2481521191832564-3.jpg",
    //       "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/4277987/2018/3/16/11521191832668-Nautica-Men-Teal-Colourblocked-Round-Neck-T-shirt-2481521191832564-4.jpg",
    //       "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/4277987/2018/3/16/11521191832649-Nautica-Men-Teal-Colourblocked-Round-Neck-T-shirt-2481521191832564-5.jpg"
    //     ],
    //     "quantity": 1,
    //     "gender": "Men",
    //     "rating": ""
    //   },
    //   {
    //     "id": "07",
    //     "title": "HERE&NOW",
    //     "sub_heading": "Men Black & Mustard Yellow Printed Round Neck T-shirt",
    //     "color": "black",
    //     "brand": "HERE&NOW",
    //     "category": "T-shirt",
    //     "review": "78",
    //     "price": "749",
    //     "discount": "60",
    //     "sizes": [
    //       "S",
    //       "M",
    //       "L",
    //       "XL"
    //     ],
    //     "product_details": "Black and Mustard Yellow printed T-shirt, has a round neck, and short sleeves",
    //     "feature": [],
    //     "size_and_fit": [
    //       "The model (height 6') is wearing a size M"
    //     ],
    //     "material_&_care": [
    //       "100% Cotton",
    //       "Machine Wash"
    //     ],
    //     "specification": {
    //       "fabric": "Cotton",
    //       "fit": "Regular Fit",
    //       "length": "Regular",
    //       "main_trend": "-",
    //       "Multipack_set": "Single",
    //       "Neck": "Round Neck",
    //       "Ocassion": "Casual",
    //       "pattern": "Printed",
    //       "print_or_pattern_type": "Typography",
    //       "sleeve_length": "Short Sleeves",
    //       "sleeve_styling": "Regular Sleeves",
    //       "sport": "-",
    //       "sustainable": "-",
    //       "technology": "-",
    //       "wash_care": "Machine Wash",
    //       "weave_type": "Knitted",
    //       "complete_the_look": "The feel of this HERE&NOW tee is absolutely amazing thanks to the designer's use of cotton. When you're grabbing a quick meal with your friends, this black piece looks great with slimmer pants and chukka boot."
    //     },
    //     "type": "OLD",
    //     "images": [
    //       "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/11748042/2020/7/7/71ec25ec-2513-46e7-a6bf-4c6c646834841594111521123ShangrilaCreationGold-TonedPinkSilkBlendWovenDesignPaithaniS1.jpg",
    //       "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/11748042/2020/7/7/1b20e67d-947c-4355-a87e-cfb8df93a3061594111521179ShangrilaCreationGold-TonedPinkSilkBlendWovenDesignPaithaniS2.jpg",
    //       "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/11748042/2020/7/7/f6d4b993-593c-47bd-a826-b7eb412e5faf1594111521241ShangrilaCreationGold-TonedPinkSilkBlendWovenDesignPaithaniS3.jpg",
    //       "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/11748042/2020/7/7/72859f2e-1a59-4601-8e20-227845625ce11594111521290ShangrilaCreationGold-TonedPinkSilkBlendWovenDesignPaithaniS4.jpg",
    //       "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/11748042/2020/7/7/d7440fd0-cb29-4810-86da-d44677de99041594111521354ShangrilaCreationGold-TonedPinkSilkBlendWovenDesignPaithaniS5.jpg"
    //     ],
    //     "quantity": 1,
    //     "gender": "Men",
    //     "rating": ""
    // }]

    const [wishlistModel, setWishlistModel] = useState(false)
    const [isDeleted, setIsDeleted] = useState(false)
    const [wishlistModelArray, setWishlistModelArray] = useState([])
    const [delProduct, setDelProduct] = useState([])

    const wishlistData = useSelector(state=>state.wishlist.wishlistData)

    const dispatch = useDispatch()

    // const handleWishlist = (idx) => {
    //     const updatedWishlist = filterData.filter(el=> el.id===idx )
    //     dispatch( postWishData(updatedWishlist[0]) )
    // }

    const handleDeleteWishlist = (idx) => {
        const deletedProduct = wishlistData.filter(item=>item.id===idx )
        setDelProduct(deletedProduct[0])
        dispatch( deleteWishData(idx) )
        setIsDeleted(true)
    }
    console.log(delProduct);

    const handleModelWishlist = (idx) => {
        setWishlistModel(true)
        const updatedWishlistModel = wishlistData.filter(item=>item.id===idx )
        setWishlistModelArray(updatedWishlistModel)
    }

    const handleModelWishClose = () => {
        setWishlistModel(false)
    }

    const handleModelWishRetain = () => {
      setWishlistModel(true)
    }
    // console.log(wishlistModel);
    // console.log(wishlistModelArray);

    useEffect(()=> {
        dispatch( getWishData() )

        if (isDeleted===true) {
          setTimeout(() => {
            setIsDeleted(false)
          }, 2000);
        }
    }, [dispatch, isDeleted])
    // console.log(wishlistData);

    return <> 

        <div> {wishlistData.length!==0 ? (
        <div>
            <br />
            <div className={styles.heading}>My Wishlist <span className={styles.countFont} > {wishlistData.length} items</span> </div>

            { isDeleted && 
              <div className={ `${styles.deleteDiv}`} >
                <div>
                  <img src={delProduct.images[0]} alt="" height="40px" />
                </div>
                <div className={styles.marginTop}>Item removed from wishlist</div>
              </div> 
            }

            {/* { filterData.map((item,i)=> 
            <button onClick={()=>handleWishlist(item.id)}>wishCheck{item.id}</button>
            ) } */}

            <div className={styles.cardCont}>
                { wishlistData.map((e,i) => 
                    <div key={i} className={styles.card}> 
                        <div>
                            <img src={e.images[0]} alt="" width="100%"/>
                        </div>
                        <div className={styles.cancelIcon}> 
                            <div onClick={()=>handleDeleteWishlist(e.id)} > × </div> 
                        </div>
                        <div className={styles.titleFont}>{e.title}</div>
                        <div className={styles.flexPrice}>
                            <div className={styles.titleFont}>Rs.{Math.floor(Number(e.price)*((100-Number(e.discount))/100))}</div>
                            <div className={styles.mrpFont}>Rs.{e.price}</div>
                            <div className={styles.discountFont}>({e.discount}% OFF)</div>
                        </div>
                        <br />
                        <div>
                            <button onClick={()=>handleModelWishlist(e.id)} className={`${styles.buttons}`}>MOVE TO BAG</button>
                        </div>
                    </div>
                ) }
            </div>
        </div>
        ) : (
        <div>
            <img src="https://i.imgur.com/GEy4DvJ.png" alt="emptyWishlist" width="100%" />
            <button className={styles.btnCntShop}>CONTINUE SHOPPING</button>
            {/* <br /><br />
            { filterData.map((item,i)=> 
            <button onClick={()=>handleWishlist(item.id)}>wishCheck{item.id}</button>
            ) } */}
        </div>
          )}
        </div>

        
        
        <SubNavbar />
        
        <div>
          <div >
            { wishlistModel && wishlistModelArray.map((e,i)=> 
            <div key={i}>
              <div className={styles.modelBg} onClick={handleModelWishClose} ></div>

              <div  onClick={handleModelWishRetain} className={styles.modelCard} key={i}>
                  <div >
                    <div className={styles.flexModel}>
                      <div>
                        <img src={e.images[0]} alt="" height="80px" />
                      </div>
                      <div className={`${styles.align} ${styles.marginLeft}`}>
                        <div className={`${styles.titleFont} ${styles.font16} ${styles.gray}`}>{e.title}</div>
                        <div>
                            <span className={`${styles.titleFont} ${styles.font16}`}> ₹{Math.floor(Number(e.price)*((100-Number(e.discount))/100))} </span>
                            <span className={`${styles.mrpFont} ${styles.font16}`}> ₹{e.price}</span>
                            <span className={`${styles.discountFont} ${styles.font16}`}> ({e.discount}% OFF) </span>
                        </div>
                      </div>
                    </div>
                    <hr />
                    <div  className={`${styles.titleFont} ${styles.font16} ${styles.align}`}>Select Size</div>
                    <div className={styles.gridBtn}>
                      { e.sizes.map((size,i)=> <div key={i}>
                        {/* <div className={`${styles.titleFont} ${styles.font16} ${styles.gray} ${styles.sizeDiv}`}>{size}</div> */}
                        <div className={`${styles.sizeDiv}`}><div>{size}</div></div>
                      </div> ) }
                    </div>
                    <br />
                    <button className={`${styles.doneBtn} ${styles.font16}`}>Done</button>
                  </div>
                  
                </div>

                <div className={styles.closeModel}> 
                    <div onClick={handleModelWishClose} >×</div> 
                </div>
            </div>
            ) }
          </div>
        </div>
  </>
};

export default MyWishlist;