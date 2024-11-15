import React from 'react'
import Display from './Display'
import InputUser from './InputUser'
import UserContextProvider from '../context/UserContextPeovider'

function Container() {
    // const {login} = useContext(store)
  return (
    <UserContextProvider>
    <div>
      <InputUser/>
      <Display/>
    </div>
    </UserContextProvider>
  )
}

export default Container
