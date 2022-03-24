import {useState,useEffect} from 'react'
import { useApp } from '../Contex/AppContext'
import { auth} from '../FIrebase/config'
import {createUserWithEmailAndPassword} from 'firebase/auth'


export const useSignUp =()=>{
    const [err ,setErr]=useState(null)
    const [isCancel ,setIsCancel]=useState(false)
    ///isCancel sluz do czyszczenia funkcji
    const [isPending ,setIsPending]=useState(null)
    const {dispatch}=useApp()

    const signup = async (email,password)=>{
        setErr(null)
        setIsPending(true)
         // signup user
          const res =  await createUserWithEmailAndPassword(auth,email,password)
          .then((res)=>{
              setIsPending(false)
              dispatch({type:"LOGIN",payload:res.user})
          })
          .catch((err)=>{
              setIsPending(false)
              setErr(err)
          })
     
    }
    // useEffect(() => {
    // return () => setIsCancel(true)
    // }, [])
    
    return {err ,isPending ,signup}

}