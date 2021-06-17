import React from "react";
import { useEffect } from "react";
// import { useRef } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import styles from "./FilterComp.module.css";


function FilterComp({handleCategoryFilters, handleBrandFilter, handlePriceFilter, handleColorFilter, handleDiscountFilter, handleRemoveCategory}) {
    const {data} = useSelector((state) => state.products)

    const tshirt = data.filter(item => item.category === "T-shirt");
    const loung_tshirt = data.filter(item => item.category === "Lounge Tshirt");

    const HRX = data.filter(item => item.brand === "HRX by Hrithik Roshan");
    const HERE_NOW = data.filter(item => item.brand === "HERE&NOW");
    const MODA = data.filter(item => item.brand === "Moda Rapido");
    const CAMPUS = data.filter(item => item.brand === "Campus Sutra");
    const NAUTICA = data.filter(item => item.brand === "Nautica");
    const NYAMBA = data.filter(item => item.brand === "NYAMBA By Decathlon");
    const US_POLO = data.filter(item => item.brand === "U.S. Polo Assn.");
    const OKANE = data.filter(item => item.brand === "Okane");
    const VEIRDO = data.filter(item => item.brand === "VEIRDO");
    const TOMMY = data.filter(item => item.brand === "Tommy Hilfiger"); 
    const LEVIS = data.filter(item => item.brand === "Levis");
    const WROGN = data.filter(item => item.brand === "WROGN");
    const JACK_JONES = data.filter(item => item.brand === "Jack & Jones");
    const ECKO = data.filter(item => item.brand === "Ecko Unltd");
    const JUSTICE = data.filter(item => item.brand === "Justice League");
    const ROADSTER = data.filter(item => item.brand === "Roadster");
    const RIGO = data.filter(item => item.brand === "Rigo");
    const PUMA = data.filter(item => item.brand === "Puma");
    const CALVIN_JEANS = data.filter(item => item.brand === "Calvin Klein Jeans");
    const GANT = data.filter(item => item.brand === "GANT");
    const AUSTIN = data.filter(item => item.brand === "Austin wood");
    const LACOSTE = data.filter(item => item.brand === "Lacoste");
    const BEWAKOOF = data.filter(item => item.brand === "Bewakoof");
    const CALVIN_UNDER = data.filter(item => item.brand === "Calvin Klein Underwear");
    const H_M = data.filter(item => item.brand === "H&M");
    const JOCKEY = data.filter(item => item.brand === "Jockey");
    const XYXX = data.filter(item => item.brand === "XYXX");
    const RODZEN = data.filter(item => item.brand === "Rodzen");
    const QUARANTINE = data.filter(item => item.brand === "QUARANTINE");
    const PETER_ENG = data.filter(item => item.brand === "Peter England");
    const SWEET = data.filter(item => item.brand === "Sweet Dreams");

    const range_174_to_3053 = data.filter(item => item.dis_price >= 174 && item.dis_price < 3053);
    const range_3053_to_5932 = data.filter(item => item.dis_price >= 3053 && item.dis_price < 5932);
    const range_5932_to_8811 = data.filter(item => item.dis_price >= 5932 && item.dis_price < 8811);
    const range_8811_to_11690 = data.filter(item => item.dis_price >= 8811 && item.dis_price < 11690);

    const black = data.filter(item => item.color === "black");
    const maron = data.filter(item => item.color === "maron");
    const white = data.filter(item => item.color === "white");
    const blue = data.filter(item => item.color === "blue");
    const green = data.filter(item => item.color === "green");
    const yellow = data.filter(item => item.color === "yellow");
    const grey = data.filter(item => item.color === "grey");
    const navy_blue = data.filter(item => item.color === "navy blue");
    const dark_blue = data.filter(item => item.color === "dark blue");
    const teal_blue = data.filter(item => item.color === "teal blue");
    const red = data.filter(item => item.color === "red");
    const orange = data.filter(item => item.color === "orange");

    // console.log(HRX.length);
    // console.log(range_3053_to_5932.length);
    const categories = [
        {id : 1, category_name : "T-shirt",  ischecked : false},
        {id : 2, category_name : "Lounge Tshirt", ischecked : false}
    ]

    const categories_length = [
        {length : tshirt.length},
        {length : loung_tshirt.length}
    ]

    const brands_length = [
        {length : HRX.length},
        {length : HERE_NOW.length},
        {length : MODA.length},
        {length : CAMPUS.length},
        {length : NAUTICA.length},
        {length : NYAMBA.length},
        {length : US_POLO.length},
        {length : OKANE.length},
        {length : VEIRDO.length},
        {length : TOMMY.length},
        {length : LEVIS.length},
        {length : WROGN.length},
        {length : JACK_JONES.length},
        {length : ECKO.length},
        {length : JUSTICE.length},
        {length : ROADSTER.length},
        {length : RIGO.length},
        {length : PUMA.length},
        {length : CALVIN_JEANS.length},
        {length : GANT.length},
        {length : AUSTIN.length},
        {length : LACOSTE.length},
        {length : BEWAKOOF.length},
        {length : CALVIN_UNDER.length},
        {length : H_M.length},
        {length : JOCKEY.length},
        {length : XYXX.length},
        {length : RODZEN.length},
        {length : QUARANTINE.length},
        {length : PETER_ENG.length},
        {length : SWEET.length},
    ]

    const brands = [
        {id : 3, brand_name : "HRX by Hrithik Roshan", ischecked : false},
        {id : 4, brand_name : "HERE&NOW", ischecked : false},
        {id : 5, brand_name : "Moda Rapido", ischecked : false},
        {id : 6, brand_name : "Campus Sutra", ischecked : false},
        {id : 7, brand_name : "Nautica", ischecked : false},
        {id : 8, brand_name : "NYAMBA By Decathlon", ischecked : false},
        {id : 9, brand_name : "U.S. Polo Assn.", ischecked : false},
        {id : 10, brand_name : "Okane", ischecked : false},
        {id : 11, brand_name : "VEIRDO", ischecked : false},
        {id : 12, brand_name : "Tommy Hilfiger", ischecked : false},
        {id : 13, brand_name : "Levis", ischecked : false},
        {id : 14, brand_name : "WROGN", ischecked : false},
        {id : 15, brand_name : "Jack & Jones", ischecked : false},
        {id : 16, brand_name : "Ecko Unltd", ischecked : false},
        {id : 17, brand_name : "Justice League", ischecked : false},
        {id : 18, brand_name : "Roadster", ischecked : false},
        {id : 19, brand_name : "Rigo", ischecked : false},
        {id : 20, brand_name : "Puma", ischecked : false},
        {id : 21, brand_name : "Calvin Klein Jeans", ischecked : false},
        {id : 22, brand_name : "GANT", ischecked : false},
        {id : 23, brand_name : "Austin wood", ischecked : false},
        {id : 24, brand_name : "Lacoste", ischecked : false},
        {id : 25, brand_name : "Bewakoof", ischecked : false},
        {id : 26, brand_name : "Calvin Klein Underwear", ischecked : false},
        {id : 27, brand_name : "H&M", ischecked : false},
        {id : 28, brand_name : "Jockey", ischecked : false},
        {id : 29, brand_name : "XYXX", ischecked : false},
        {id : 30, brand_name : "Rodzen", ischecked : false},
        {id : 31, brand_name : "QUARANTINE", ischecked : false},
        {id : 32, brand_name : "Peter England", ischecked : false},
        {id : 33, brand_name : "Sweet Dreams", ischecked : false},
    ]

    const prices_length = [
        {length : range_174_to_3053.length},
        {length : range_3053_to_5932.length},
        {length : range_5932_to_8811.length},
        {length : range_8811_to_11690.length}
    ]

    const prices_range = [
        {id : 34, range_name : "Rs. 174 to Rs. 3053", ischecked : false},
        {id : 35, range_name : "Rs. 3053 to Rs. 5932", ischecked : false},
        {id : 36, range_name : "Rs. 5932 to Rs. 8811", ischecked : false},
        {id : 37, range_name : "Rs. 8811 to Rs. 11690", ischecked : false}
    ]

    const colors_length = [
        {length : black.length},
        {length : maron.length},
        {length : white.length},
        {length : blue.length},
        {length : green.length},
        {length : yellow.length},
        {length : grey.length},
        {length : navy_blue.length},
        {length : dark_blue.length},
        {length : teal_blue.length},
        {length : red.length},
        {length : orange.length},
    ]

    const colors = [
        {id : 38, color_name : "Black", ischecked : false, color : "#36454F"},
        {id : 39, color_name : "Maroon", ischecked : false, color : "#B03060"},
        {id : 40, color_name : "White", ischecked : false, color : "#FFFFFF"},
        {id : 41, color_name : "Blue", ischecked : false, color : "#0074D9"},
        {id : 42, color_name : "Green", ischecked : false, color : "#5EB160"},
        {id : 43, color_name : "Yellow", ischecked : false, color : "#EADC32"},
        {id : 44, color_name : "Grey", ischecked : false, color : "#9FA8AB"},
        {id : 45, color_name : "Navy Blue", ischecked : false, color : "#3C4477"},
        {id : 46, color_name : "Dark Blue", ischecked : false, color : "#000087"},
        {id : 47, color_name : "Teal Blue", ischecked : false, color : "#367588"},
        {id : 48, color_name : "Red", ischecked : false, color : "#D34B56"},
        {id : 49, color_name : "Orange", ischecked : false, color : "#F28D20"},
    ]


    const discount_range = [
        {id : 50, range_name : "10% and above", ischecked : false, discount_range : 10},
        {id : 51, range_name : "20% and above", ischecked : false, discount_range : 20},
        {id : 52, range_name : "30% and above", ischecked : false, discount_range : 30},
        {id : 53, range_name : "40% and above", ischecked : false, discount_range : 40},
        {id : 54, range_name : "50% and above", ischecked : false, discount_range : 50},
        {id : 55, range_name : "60% and above", ischecked : false, discount_range : 60},
        {id : 56, range_name : "70% and above", ischecked : false, discount_range : 70},
        {id : 57, range_name : "80% and above", ischecked : false, discount_range : 80}
    ]

    const [category, setCategory] = useState(categories);
    const [brand, setBrand] = useState(brands);
    const [price, setPrice] = useState(prices_range);
    const [color, setColor] = useState(colors);
    const [discount, setDiscount] = useState(discount_range);

    const handleToggleCheck = (id) => {
        const updatedCategory = category.map((item) => item.id === id ? {...item, ischecked : !item.ischecked} : item);
        const updatedBrand = brand.map((item) => item.id === id ? {...item, ischecked : !item.ischecked} : item);
        const updatedPrice = price.map((item) => item.id === id ? {...item, ischecked : !item.ischecked} : item);
        const updatedColor = color.map((item) => item.id === id ? {...item, ischecked : !item.ischecked} : item);
        const updatedDiscount = discount.map((item) => item.id === id ? {...item, ischecked : !item.ischecked} : item);
        setCategory(updatedCategory);
        setBrand(updatedBrand);
        setPrice(updatedPrice);
        setColor(updatedColor);
        setDiscount(updatedDiscount);
    }

    const handleAddCategotryFilters = () => {
        category.map((item) => item.ischecked && handleCategoryFilters(item.category_name));
        
        // brand.map((item) => item.ischecked === true ? handleBrandFilter(item.brand_name) : "");
        // price.map((item) => item.ischecked === true ? handlePriceFilter(item.range_name) : "");
        // color.map((item) => item.ischecked === true ? handleColorFilter(item.color_name) : "");
        // discount.map((item) => item.ischecked === true ? handleDiscountFilter(item.range_name) : "");
    }

    // const handleRemoveCategoryFilters = () => {
    //     category.map((item) => !item.ischecked && handleRemoveCategory(item.category_name));
    // }

    const handleAddBrandFilters = () => {
        brand.map((item) => item.ischecked === true ? handleBrandFilter(item.brand_name) : "");
    }

    const handleAddPriceFilters = () => {
        price.map((item) => item.ischecked === true ? handlePriceFilter(item.range_name) : "");
    }

    const handleAddColorFilters = () => {
        color.map((item) => item.ischecked === true ? handleColorFilter(item.color_name) : "");
    }

    const handleAddDiscountFilters = () => {
        discount.map((item) => item.ischecked === true ? handleDiscountFilter(item.discount_range) : "");
    }
    
        

    useEffect(() => {
        handleAddCategotryFilters();
        // handleRemoveCategoryFilters();
        // if (window.scrollY > 1200) {
        //     alert((window.scrollY));
        //     // scrollRef.current.scrollTo({top : 500, behavior: 'smooth'});
        
        // }
    }, [category]);

    useEffect(() => {
        handleAddBrandFilters();
    }, [brand])

    useEffect(() => {
        handleAddPriceFilters();
    }, [price])

    useEffect(() => {
        handleAddColorFilters();
    }, [color])

    useEffect(() => {
        handleAddDiscountFilters();
    }, [discount])
  


    return (
        <div id={styles.main_wrapper} style={window.scrollY > 400 && window.scrollY < 800 ? {marginTop : "200px"} : window.scrollY >= 800 && window.scrollY < 1200 ? {marginTop : "400px"} : window.scrollY >= 1200 && window.scrollY < 1600 ? {marginTop : "600px"} : window.scrollY >= 1600 && window.scrollY < 2000 ? {marginTop : "800px"} : window.scrollY >= 2000 && window.scrollY < 2400 ? {marginTop : "1400px"} : window.scrollY >= 2400 && window.scrollY < 2800 ? {marginTop : "1800px"} : window.scrollY >= 2800 && window.scrollY < 3200 ? {marginTop : "2200px"} : window.scrollY >= 3200 && window.scrollY < 3600 ? {marginTop : "2400px"} : window.scrollY >= 3600 ? {marginTop : "2500px"} : {marginTop : "0px"}}>
            <div className={styles.category_wrapper}>
                <div className={styles.filter_header}>CATEGORIES</div>
                {
                    category.map((item, a) => <div key={item.id} className={styles.listing_div} onClick={() => handleToggleCheck(item.id)}>
                        <div className={item.ischecked === false ? styles.img_div : styles.img_div2}><img src={item.ischecked ? "https://i.imgur.com/2kY5gDz.png" : "https://i.imgur.com/YDWK16F.png"} alt="" className={styles.img} /></div>
                        <div className={styles.item_name}>{`${item.category_name} (${categories_length[a].length})`}</div>
                        {/* <div className={styles.item_quantity}>{`(${item.length})`}</div> */}
                    </div> )
                }
            </div>
            <div className={styles.category_wrapper}>
                <div className={styles.filter_header}>BRAND</div>
                {
                    brand.map((item, a) => <div key={item.id} className={styles.listing_div} onClick={() => handleToggleCheck(item.id)}>
                        <div className={item.ischecked === false ? styles.img_div : styles.img_div2}><img src={item.ischecked ? "https://i.imgur.com/2kY5gDz.png" : "https://i.imgur.com/YDWK16F.png"} alt="" className={styles.img} /></div>
                        <div className={styles.item_name}>{`${item.brand_name} (${brands_length[a].length})`}</div>
                        {/* <div className={styles.item_quantity}>{`(${item.length})`}</div> */}
                    </div> )
                }
            </div>
            <div className={styles.category_wrapper}>
                <div className={styles.filter_header}>PRICE</div>
                {
                    price.map((item, a) => <div key={item.id} className={styles.listing_div} onClick={() => handleToggleCheck(item.id)}>
                        <div className={item.ischecked === false ? styles.img_div : styles.img_div2}><img src={item.ischecked ? "https://i.imgur.com/2kY5gDz.png" : "https://i.imgur.com/YDWK16F.png"} alt="" className={styles.img} /></div>
                        <div className={styles.item_name}>{`${item.range_name} (${prices_length[a].length})`}</div>
                        {/* <div className={styles.item_quantity}>{`(${item.length})`}</div> */}
                    </div> )
                }
            </div>
            <div className={styles.category_wrapper}>
                <div className={styles.filter_header}>COLOR</div>
                {
                    color.map((item, a) => <div key={item.id} className={styles.listing_div2} onClick={() => handleToggleCheck(item.id)}>
                        <div className={item.ischecked === false ? styles.img_div : styles.img_div2}><img src={item.ischecked ? "https://i.imgur.com/2kY5gDz.png" : "https://i.imgur.com/YDWK16F.png"} alt="" className={styles.img} /></div>
                        <div style={{width:"16px", height:"16px", borderRadius:"50%", backgroundColor:item.color, border:"0.3px solid grey", marginTop:"1px"}}></div>
                        <div className={styles.item_name}>{`${item.color_name} (${colors_length[a].length})`}</div>
                        {/* <div className={styles.item_quantity}>{`(${item.length})`}</div> */}
                    </div> )
                }
            </div>
            <div className={styles.category_wrapper}>
                <div className={styles.filter_header}>DISCOUNT RANGE</div>
                {
                    discount.map((item, a) => <div key={item.id} className={styles.listing_div3} onClick={() => handleToggleCheck(item.id)}>
                        <div className={item.ischecked === false ? styles.img_div : styles.img_div2} style={{marginTop:"2px", width:"22px", height:"22px"}}><img src={item.ischecked ? "https://i.imgur.com/vJsnaOY.png" : "https://i.imgur.com/HwMqW7Q.png"} alt="" className={styles.img} /></div>
                        <div className={styles.item_name} style={{fontSize:"15px"}}>{`${item.range_name}`}</div>
                        {/* <div className={styles.item_quantity}>{`(${item.length})`}</div> */}
                    </div> )
                }
            </div>
        </div>
    )
}

export default FilterComp;