import React from 'react'
import Offers from '../components/ProductDetails/Offers'
import RelationProducts from '../components/ProductDetails/RelationProducts'
import View from '../components/ProductDetails/View'
import ViewTable from '../components/ProductDetails/ViewTable'

const ProductDetails = () => {
  return (
    <>
        <View />
        <Offers />
        <ViewTable /> 
        <RelationProducts />
    </>
  )
}

export default ProductDetails
