import React from 'react'
import ExitingDeals from './ExitingDeals'
import HomeOffers from './HomeOffers'
import OffersHer from './OffersHer'
import Footer from "../Footer/Footer"


function Home() {
    return (
        <div>
            <HomeOffers/>
            <ExitingDeals/>
            <OffersHer/>
            <Footer/>
        </div>
    )
}

export default Home
