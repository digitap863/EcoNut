import React from 'react'
import ProductsHeader from '../components/Products/ProductsHeader'
import Footer from '../components/Shared/Footer'
import WantToKnowMore from '../components/Products/WantToKnowMore'
import ProductsGrid from '../components/Products/ProductsGrid'

function Products() {
  return (
    <div>
        <ProductsHeader/>
        <ProductsGrid/>
        <WantToKnowMore/>
        <Footer/>
    </div>
  )
}

export default Products