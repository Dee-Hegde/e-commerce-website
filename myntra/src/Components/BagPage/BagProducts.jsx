import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteBagData, getBagData, patchBagData, patchBagSizesData } from '../../Redux/Bag/action';
import styles from "./bag.module.css";
import wishStyles from "../WishlistPage/styles.module.css";
import { postWishData } from '../../Redux/Wishlist/action';


const BagProducts = () => {

    const [bagModel, setBagModel] = useState(false)
    const [bagModelArray, setBagModelArray] = useState([])
    
    const [isQtySelected, setIsQtySelected] = useState(false)
    const [qtyModel, setQtyModel] = useState(false)
    const [isQtySame, setIsQtySame] = useState(null)
    const [clickedId, setClickedId] = useState(null)
    
    const [bagModelSizesArray, setBagModelSizesArray] = useState([])
    const [isSizesSelected, setIsSizesSelected] = useState(false)
    const [sizesModel, setSizesModel] = useState(false)
    const [isSizesSame, setIsSizesSame] = useState(null)
    const [clickedSizesId, setClickedSizesId] = useState()

    const bagData = useSelector(state=>state.bag.bagData)
    const dispatch = useDispatch()

    let totalAmount=0
    bagData?.map((e) => totalAmount += Math.floor(Number(e.price)*((100-Number(e.discount))/100)) * Number(e.quantity) )
    // console.log(totalAmount);
    
    const handleModelBag = (idx) => {
        setBagModel(true)
        const updatedBagModel = bagData.filter( item=>item.id===idx )
        setBagModelArray(updatedBagModel)
    }

    const handleModelBagClose = () => {
        setBagModel(false)
        // setIsSizeSelected(false)
    }
    
    const handleDeleteFromBag = (idx) => {
        setBagModel(false)
        dispatch( deleteBagData(idx) )
    }

    const handleMoveToWishlist = (idx) => {
        dispatch( deleteBagData(idx) )

        const updatedWishlist = bagData.filter(el=> el.id===idx )
        dispatch( postWishData(updatedWishlist[0]) )

        setBagModel(false)
    }

    const handleModelBagQtyClose = () => {
        setQtyModel(false)
        setIsQtySelected(false)
        setIsQtySame(null)
    }

    const handleQtyModel = (idx) => {
        setQtyModel(true)
        setClickedId(idx)
    }

    const handleQtySelect = ( qtyx) => {
        setIsQtySelected(true)
        setIsQtySame(qtyx)
        // console.log( qtyx);
    }

    const handleQtyDone = (clickedId, isQtySame) => {
        // console.log(clickedId, isQtySame);
        dispatch( patchBagData(clickedId, isQtySame) )
        setQtyModel(false)
        setIsQtySame(null)
    }



    const handleModelBagSizesClose = () => {
        setSizesModel(false)
        setIsSizesSelected(false)
        setIsSizesSame(null)
    }

    const handleSizesModel = (idx) => {
        setSizesModel(true)
        setClickedSizesId(idx)
        const updatedBagSizesModel = bagData.filter( item=>item.id===idx )
        setBagModelSizesArray(updatedBagSizesModel[0])
    }

    const handleSizesSelect = ( sizesx) => {
        setIsSizesSelected(true)
        setIsSizesSame(sizesx)
        // console.log( sizesx);
    }

    const handleSizesDone = (clickedSizesId, isSizesSame) => {
        // console.log(clickedId, isQtySame);
        dispatch( patchBagSizesData(clickedSizesId, isSizesSame) )
        setSizesModel(false)
        setIsSizesSame(null)

    }



    useEffect(()=> {
        dispatch( getBagData() )    
        setBagModel(false)

    }, [dispatch])
    // console.log(bagData);
    // console.log(bagModel);   
    // console.log(bagModelArray);
    // console.log(qtyModel);
    // console.log(isQtySelected);
    // console.log(clickedId);
    // console.log(isQtySame);
    
    // console.log(bagModelSizesArray);

    
    return (
        <div>
            <div className={styles.shopDetail}>
                <div>My Shopping Bag <span>({bagData.length} Items)</span> </div>
                <div>Total: ₹{totalAmount}</div>
            </div>

            <div>
                {
                    bagData.length>0 && bagData.map((e,i)=> 
                        <div className={styles.bagCard} key={i}>

                            <div className={styles.productDiv}>
                                <div>
                                    <img src={e.images[0]} alt="" width="100%" />
                                </div>
                                <div className={styles.productDivSecond} >
                                    <div className={styles.fontBold} >{e.title}</div>
                                    <div>{e.sub_heading}</div>
                                    <div className={`${styles.font14} ${styles.gray}`}>Sold by: Omnitech Retail </div>
                                    <div className={`${styles.gridData} `} >
                                        <div onClick={()=>handleSizesModel(e.id)} className={`${styles.subGridDiv1} ${styles.marginTop} `}>Size:{e.selected_size}▼  </div>
                                        <div onClick={()=>handleQtyModel(e.id)} className={`${styles.subGridDiv2} ${styles.marginTop} `}>Qty:{e.quantity}▼</div>
                                    </div>
                                </div>
                                <div className={styles.productDivThird}>
                                    <div className={styles.fontBold}>₹{Math.floor(Number(e.price)*((100-Number(e.discount))/100))}</div>
                                    <div>
                                        <span className={`${styles.lineThrough} ${styles.gray}`}>₹{e.price}</span>
                                        <span className={`${styles.red}`}> {e.discount}% OFF</span>
                                    </div>
                                </div>
                            </div>
                            
                            <div className={`${styles.gridBtn}`} >
                                <div onClick={()=>handleModelBag(e.id)} className={`${styles.removeDiv}`}> <span className={`${styles.cursor}`}>REMOVE</span> </div>
                                <div> <span onClick={()=>handleMoveToWishlist(e.id)} className={`${styles.cursor}`}>MOVE TO WISHLIST</span> </div>
                            </div>
                        </div>
                    )
                }
            </div>

            <div>
            <div >
                { bagModel && bagModelArray.map((e,i)=> 
                <div key={i}>
                <div className={styles.bagModelBg} onClick={handleModelBagClose} ></div>

                <div className={styles.bagModelCard} key={i}>
                    <div >
                        <div className={`${styles.flexBagModel} ${styles.borderBottom}`}>
                            <div>
                                <img src={e.images[0]} alt="" height="80px" />
                            </div>
                            <div className={`${wishStyles.align} ${wishStyles.marginLeft}`}>
                                <div className={` ${styles.font15} `}>Remove Item</div>
                                <div className={` ${styles.font15} ${styles.gray}`}>Are you sure you want to remove this item?</div>
                            </div>
                        </div>
                        <div className={`${styles.gridModelBtn}`} >
                            <div className={`${styles.removeDiv}`}> <span onClick={()=>handleMoveToWishlist(e.id)} className={` ${styles.cursor}`} > MOVE TO WISHLIST</span> </div>
                            <div> <span onClick={()=>handleDeleteFromBag(e.id)} className={`${styles.cursor} ${styles.blue}`}>REMOVE</span> </div>
                        </div>
                    </div>
                    
                    </div>

                    <div className={styles.closeBagModel}> 
                        <div onClick={handleModelBagClose} > × </div> 
                    </div>
                </div>
                ) }
            </div>
        </div>



        <div >
            {
                qtyModel && 
                <>
                <div className={styles.bagQtyModelBg} onClick={handleModelBagQtyClose} ></div>
                <div className={`${styles.qtyDivBox}`} >
                
                <div className={`${styles.font16} ${styles.fontBold} ${styles.leftAlign}`}>Select Quantity</div>
                
                <div className={styles.gridQtyBtn}>
                { ["01", "02", "03","04",'05',"06","07","08","09","10"].map((e,i)=> 
                
                <div  key={i}>
            
                    <div onClick={()=>handleQtySelect(e)} className={ isQtySame===e ? `${styles.sizeSelectedQtyDiv}` : `${styles.sizeQtyDiv}`} >
                        <div>{e}</div>
                    </div>
                    
                </div> )}
                </div>

                <div onClick={()=>handleQtyDone(clickedId ,isQtySame)} className={`${styles.doneQtyBtn} ${styles.marginTop}`} >DONE</div>
                <div className={styles.closeQtyBagModel}> 
                    <div onClick={handleModelBagQtyClose} > × </div> 
                </div>

                </div>
                
                
                </>
            }
            
            {/* no use */}
            <div>{isQtySelected}</div> 
        </div>




        <div >
            {
                sizesModel && 
                <>
                <div className={styles.bagQtyModelBg} onClick={handleModelBagSizesClose} ></div>
                <div className={`${styles.qtyDivBox}`} >
                
                <div className={`${styles.font16} ${styles.fontBold} ${styles.leftAlign}`}>Select Size</div>
                
                <div className={styles.gridQtyBtn}>
                { bagModelSizesArray.sizes.map((e,i)=> 
                
                <div  key={i}>
            
                    <div onClick={()=>handleSizesSelect(e)} className={ isSizesSame===e ? `${styles.sizeSelectedQtyDiv}` : `${styles.sizeQtyDiv}`} >
                        <div>{e}</div>
                    </div>
                    
                </div> )}
                </div>

                <div onClick={()=>handleSizesDone(clickedSizesId ,isSizesSame)} className={`${styles.doneQtyBtn} ${styles.marginTop}`} >DONE</div>
                <div className={styles.closeQtyBagModel}> 
                    <div onClick={handleModelBagSizesClose} > × </div> 
                </div>

                </div>
                
                
                </>
            }
            
            {/* no use */}
            <div>{isSizesSelected}</div> 
        </div>



            
        </div>
    );
};

export default BagProducts;