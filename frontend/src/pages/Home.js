import React from 'react'
import CategoryList from '../components/CategoryList'
import BannerProduct from '../components/BannerProduct'
import HorizontalCardProduct from '../components/HorizontalCardProduct'
import VerticalCardProduct from '../components/VerticalCardProduct'

const Home = () => {
  return (
    <div>
      <CategoryList/>
      <BannerProduct/>

      <HorizontalCardProduct category={"airpodes"} heading={"Headsets"}/>
      <HorizontalCardProduct category={"watches"} heading={"Popular's Watches"}/>

      <VerticalCardProduct category={"gadgets"} heading={"Gadgets"}/>
      <VerticalCardProduct category={"women's wear"} heading={"Women's Wear"}/>
      <VerticalCardProduct category={"decoration"} heading={"Decoration"}/>
      <VerticalCardProduct category={"footwear"} heading={"Footwear"}/>
      <VerticalCardProduct category={"kids wear"} heading={"Kids Wear"}/>
      <VerticalCardProduct category={"men's wear"} heading={"Men's Wear"}/>
      <VerticalCardProduct category={"electronic devices"} heading={"Electronic Devices"}/>
      <VerticalCardProduct category={"jewellery"} heading={"Jewellery"}/>
      <VerticalCardProduct category={"cosmetics"} heading={"Cosmetics"}/>
      <VerticalCardProduct category={"books"} heading={"Books"}/>
    </div>
  )
}

export default Home