import React, { useEffect, useState } from 'react';
import styles from "./styles.module.css"
import { useDispatch, useSelector } from "react-redux";
import { deleteWishData, getWishData, patchWishData, patchWishEmptySize } from '../../Redux/Wishlist/action';
import SubNavbar from './SubNavbar';
import errorIcon from "./images/errorIcon.jpg";
import { postBagData } from '../../Redux/Bag/action';
import Footer from "../Footer/Footer.jsx";
import { Link } from "react-router-dom";

const MyWishlist = () => {

    const [wishlistModel, setWishlistModel] = useState(false)
    const [isDeleted, setIsDeleted] = useState(false)
    const [wishlistModelArray, setWishlistModelArray] = useState([])
    const [delProduct, setDelProduct] = useState([])
    const [isSizeSelected, setIsSizeSelected] = useState(false)
    const [isSizeNotSelected, setIsSizeNotSelected] = useState(false)
    const [isMovedToBag, setIsMovedToBag] = useState(false)
    const [isSame, setIsSame] = useState("")

    const wishlistData = useSelector(state=>state.wishlist.wishlistData)
    // const bagData = useSelector(state=>state.bag.bagData)

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
    // console.log(delProduct);

    const handleModelWishlist = (idx) => {
        setWishlistModel(true)
        const updatedWishlistModel = wishlistData.filter( item=>item.id===idx )
        setWishlistModelArray(updatedWishlistModel)
    }

    const handleModelWishClose = (idx) => {
        setWishlistModel(false)
        setIsSizeSelected(false)
        setIsSame("")
        dispatch( patchWishEmptySize(idx) )
    }

    const handleModelWishRetain = () => {
      setWishlistModel(true)
    }

    const handleDoneWithoutSize = () => {
      setIsSizeNotSelected(true) 
    }

    const handleSizeSelect = (idx, sizex) => {
      setIsSizeSelected(true)
      setIsSame(sizex)
      // console.log(idx, sizex);
      dispatch( patchWishData(idx, sizex) )
    }

    // const handleDoneWithSize = () => {
    //   setIsSizeSelected(true)
    // }
    
    const handleMoveToBag = (idx) => {
      const deletedProduct = wishlistData.filter(item=>item.id===idx )
      setDelProduct(deletedProduct[0])
      dispatch( deleteWishData(idx) )
      setIsMovedToBag(true)
      setIsSizeSelected(false)

      const updatedBag = wishlistData.filter(el=> el.id===idx )
      dispatch( postBagData(updatedBag[0]) )
      setIsSame("")

    }

    useEffect(()=> {
        dispatch( getWishData() )
        setWishlistModel(false)

        if (isDeleted) {
          setTimeout(() => {
            setIsDeleted(false)
          }, 1500);
        }

        if (isSizeNotSelected) {
          setTimeout(() => {
            setIsSizeNotSelected(false)
          }, 1500);
        }

        if (isMovedToBag) {
          setTimeout(() => {
            setIsMovedToBag(false)
          }, 1500);
        }
    }, [dispatch, isDeleted, isSizeNotSelected, isMovedToBag])

    // console.log(wishlistData);
    // console.log(bagData);
    // console.log(isSizeNotSelected);
    // console.log(isSizeSelected);
    // console.log(wishlistModel);
    // console.log(wishlistModelArray);
    // console.log(isSame);


    return <> 

        <div> {wishlistData.length!==0 ? (
        <div>
            <br />
            <div className={styles.heading}>My Wishlist <span className={styles.countFont} > {wishlistData.length} items</span> </div>

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
                            <div className={styles.titleFont}>₹{Math.floor(Number(e.price)*((100-Number(e.discount))/100))}</div>
                            <div className={styles.mrpFont}>₹{e.price}</div>
                            <div className={styles.discountFont}>({e.discount}% OFF)</div>
                        </div>
                        <br />
                        <div>
                            <button onClick={()=>handleModelWishlist(e.id)} className={`${styles.buttons}`}>MOVE TO BAG</button>
                        </div>
                    </div>
                ) }
            </div>
            <Footer />
        </div>
        ) : (
        <div>

            <img src="https://i.imgur.com/GEy4DvJ.png" alt="emptyWishlist" width="100%" />
            <Link to="/" >
              <button className={styles.btnCntShop}>CONTINUE SHOPPING</button>
            </Link>

        </div>
          )}
        </div>

        <SubNavbar />

        { isDeleted && 
          <div className={ `${styles.deleteDiv}`} >
            <div>
              <img src={delProduct.images[0]} alt="" height="40px" />
            </div>
            <div className={styles.modelStyle}>Item removed from wishlist</div>
          </div> 
        }

        { isSizeNotSelected && 
          <div className={ `${styles.withoutSizeDiv}`} >
            <div className= {`${styles.borderRadius} ${styles.marginTop}`}>
              <img src={errorIcon} alt="" height="26px" />
            </div>
            <div className= {`${styles.marginTop} ${styles.align}`}>Size not selected</div>
          </div> 
        }

        { isMovedToBag && 
          <div className={ `${styles.movedToBagDiv}`} >
            <div>
              <img src={delProduct.images[0]} alt="" height="40px" />
            </div>
            <div className={styles.marginTop}>Item successfully added to bag</div>

            <div> <Link to="/cart"><button className={styles.viewBagBtn}>VIEW BAG</button></Link> </div>
          </div> 
        }
                
        <div>
          <div >
            { wishlistModel && wishlistModelArray.map((e,i)=> 
            <div key={i}>
              <div className={styles.modelBg} onClick={()=>handleModelWishClose(e.id)} ></div>

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
                    <div className={`${styles.titleFont} ${styles.font16} ${styles.align}`}>Select Size</div>
                    <div className={styles.gridBtn}>
                      { e.sizes.map((size,i)=> <div key={i}>
                        <div onClick={()=>handleSizeSelect(e.id, size)} className={ isSame==size ? `${styles.sizeSelectedDiv}` : `${styles.sizeDiv}`}><div>{size}</div></div>
                      </div> ) }
                    </div>
                    <br />
                    { isSizeSelected && <div className={styles.seller}>Seller: <span> Omnitech Retail</span> </div> }

                    <button onClick={ isSizeSelected ? ()=>handleMoveToBag(e.id) : handleDoneWithoutSize } className={`${styles.doneBtn} ${styles.font16}`}>Done</button>
                  </div>
                  
                </div>

                <div className={styles.closeModel}> 
                    <div onClick={()=>handleModelWishClose(e.id)} > × </div> 
                </div>
            </div>
            ) }
          </div>
        </div>
  </>
};

export default MyWishlist;