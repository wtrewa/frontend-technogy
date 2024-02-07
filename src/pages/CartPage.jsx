
import React, { memo } from 'react'
import Navbar from '../components/Navbar'
import Cart from '../components/Cart'
import Footer from '../components/Footer'

const CartPage = memo(() => {
  
  return (
    <div>
      <Navbar/>
      <Cart/>
      <Footer/>
    </div>
  )
})

export default CartPage
