
import React from 'react'
import Login from '../components/Login'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useSelector } from 'react-redux'
import Loading from '../components/Loading'

const LoginPage = () => {



  
  return (
    <div>
      <Navbar/>
      <Login/>
      <Footer/>
    </div>
  )
}

export default LoginPage
