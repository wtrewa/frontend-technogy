

import React from 'react'
import { useSelector } from 'react-redux'
import LoginPage from '../pages/LoginPage'

export const PrivateRoute = ({children}) => {
const isAuth = useSelector(store=>store.authReducer.isAuth)
    if(!isAuth){
        return <LoginPage/>
    }
  return (
    <div>{children}</div>
  )
}
