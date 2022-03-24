import {useState,useEffect} from 'react'
import { useApp } from '../Contex/AppContext'
import { auth} from '../FIrebase/config'
import {signInWithEmailAndPassword} from "firebase/auth"



export const useLogin =()=>{
    const [err ,setErr]=useState(null)
    const {dispatch} =useApp()

        const login =(email,password) => {
            setErr(null)
            signInWithEmailAndPassword(auth,email ,password)
            .then((res)=>{
                // console.log("user logged in", res.user)
                dispatch({type:"LOGIN",payload:res.user})
            })
            .catch((err)=>{
                setErr(err.message)
            })
          

          
        }


    return {err,login}

}