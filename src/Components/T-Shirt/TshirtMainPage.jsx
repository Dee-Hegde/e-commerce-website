import React from "react"
import { useEffect } from "react"
import { useState } from "react"
import Filter from "./Filter"
import FilterComp from "./FilterComp"
import Header from "./Header"
import ProductList from "./ProductList"
import ProductListComp from "./ProductListComp"
import styles from "./TshirtMainPage.module.css"

function TShirtMainPage() {
    const [sort, setSort] = useState("");
    const [order, setOrder] = useState("");
    const [type, setType] = useState(false);
    const [sortby, setSortby] = useState("")
    const [categoryFilters, setCategoryFilters] = useState([]);
    const [brandFilter, setBrandFilter] = useState([]);
    const [priceFilter, setPriceFilter] = useState([]);
    const [colorFilter, setColorFilter] = useState([]);
    const [discountFilter, setDiscountFilter] = useState([]);
    const [allFilters, setAllFilters] = useState([]);

    // console.log(categoryFilters);
    // console.log(brandFilter);
    // console.log(priceFilter);
    // console.log(colorFilter);
    // console.log(discountFilter);
    // console.log(allFilters);

    const handleCategoryFilters = (item) => {
        categoryFilters.length === 0 ? setCategoryFilters([...categoryFilters, item]) : categoryFilters.map((el) => el !== item ? setCategoryFilters([...categoryFilters, item]) : setCategoryFilters([...categoryFilters]));
    }

    // const handleRemoveCategory = (item) => {
    //    const updatedCategory = categoryFilters.filter((el) => el !== item)
    //    setCategoryFilters(updatedCategory)
    // }

    const handleBrandFilter = (item) => {
        brandFilter.length === 0 ? setBrandFilter([...brandFilter, item]) : brandFilter.map((el) => el !== item ? setBrandFilter([...brandFilter, item]) : setBrandFilter([...brandFilter]));
    }

    const handlePriceFilter = (item) => {
        priceFilter.length === 0 ? setPriceFilter([...priceFilter, item]) : priceFilter.map((el) => el !== item ? setPriceFilter([...priceFilter, item]) : setPriceFilter([...priceFilter]));
    }

    const handleColorFilter = (item) => {
        colorFilter.length === 0 ? setColorFilter([...colorFilter, item]) : colorFilter.map((el) => el !== item ? setColorFilter([...colorFilter, item]) : setColorFilter([...colorFilter]));
    }

    const handleDiscountFilter = (item) => {
        discountFilter.length === 0 ? setDiscountFilter([...discountFilter, item]) : discountFilter.map((el) => el !== item ? setDiscountFilter([...discountFilter, item]) : setDiscountFilter([...discountFilter]));
    }

    const handleHighToLow = (item) => {
        setSort("dis_price")
        setOrder("DESC")
        setSortby(item)
    }

    const handleLowToHigh = (item) => {
        setSort("dis_price")
        setOrder("asc")
        setSortby(item)
    }

    const handleBetterDiscount = (item) => {
        setSort("discount")
        setOrder("DESC")
        setSortby(item)
    }

    const handlePopularity = (item) => {
        setSort("review")
        setOrder("DESC")
        setSortby(item)
    }

    const handleWhatnew = (item) => {
        setType(true);
        setSortby(item)
    }

    useEffect(() => {
        setAllFilters([...categoryFilters, ...brandFilter, ...priceFilter, ...colorFilter, ...discountFilter])
    }, [categoryFilters, brandFilter, priceFilter, colorFilter, discountFilter]);

    return (
        <div>
            <div id={styles.note_div}>
                - As per guidelines, we are only delivering essentials in govt-specified pincodes -
            </div>
                <Header />
            <div id={styles.wrapper}>
                <Filter allFilters={allFilters}/>
                <ProductList handleHighToLow={handleHighToLow} handleLowToHigh={handleLowToHigh} handleBetterDiscount={handleBetterDiscount} handlePopularity={handlePopularity} handleWhatnew={handleWhatnew} sortby={sortby}/>
            </div>
            <div id={styles.wrapper2}>
                <FilterComp  handleCategoryFilters={handleCategoryFilters} handleBrandFilter={handleBrandFilter} handlePriceFilter={handlePriceFilter} handleColorFilter={handleColorFilter} handleDiscountFilter={handleDiscountFilter} />
                <ProductListComp sort={sort} order={order} type={type} categoryFilters={categoryFilters} brandFilter={brandFilter} priceFilter={priceFilter} colorFilter={colorFilter} discountFilter={discountFilter}/>
            </div>
        </div>
    )
}


export {TShirtMainPage};