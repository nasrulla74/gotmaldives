import React from 'react'
import { Products, FooterBanner, HeroBanner } from '../components'

import { client } from '../lib/client';


const Home = ({ products, bannerData}) => {
  return (
    <>
    <HeroBanner heroBanner={bannerData.length && bannerData[0]}/>

    

    <div className='products-heading'>
      <h2>Explore Maldives</h2>
      <p>Maldives the sunny side of life!!</p>
    </div>
   

    <div className="flex-wrap justify-center gap-3 sm:flex m-4">
    {products?.map((product) => <Products key={product._id} product={product} />)}
    </div>

    <FooterBanner/>
    </>
  )
}

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: { products, bannerData }
  }
}

export default Home