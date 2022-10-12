import React from 'react'
import { useContext } from 'react'
import AuthContext from '../context/AuthContext'

const Test = () => {
    const authContext = useContext(AuthContext);
    console.log(authContext)
  return (
    <div>Test</div>
  )
}

export default Test