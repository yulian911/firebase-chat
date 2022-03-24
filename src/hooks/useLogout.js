import { useEffect, useState } from 'react'

import { auth } from '../FIrebase/config'
import { signOut } from 'firebase/auth'
import { useApp} from '../Contex/AppContext'


export const useLogout = () => {

  const { dispatch } = useApp()
  
  const logout = async () => {
    signOut(auth)
    .then(()=>{
      // console.log('user signed out')
      dispatch({type:"LOGOUT" })
    })
    .catch((err)=>{
      console.lof(err.message)
    })

  }
  return { logout }
}