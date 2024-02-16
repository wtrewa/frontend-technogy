
import { Text } from '@chakra-ui/react'
import React from 'react'
import { useSelector } from 'react-redux'

const Loading = () => {
  const isLoading  = useSelector(store=>store.authReducer.isAuth)
  if(isLoading){
    return <Loading />
  }
  return (
    <div>
      <Text>Loading...</Text>
    </div>
  )
}

export default Loading
