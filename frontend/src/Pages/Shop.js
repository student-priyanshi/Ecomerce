import React from 'react'
import Hero from '../Hero/Hero.js'
import Popular from '../Popular/Popular.js'
import Offers from '../Offers/Offers.js'
import NewCollection from '../NewCollections/NewCollection.js'
import NewsLetter from '../NewsLetter/NewsLetter.js'

const Shop = () => {
  return (
    <div>
      <Hero/>
      <Popular/>
      <Offers/>
      <NewCollection/>
      <NewsLetter/>
    </div>
  )
}

export default Shop