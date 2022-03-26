import React ,{createContext ,useContext,useReducer,useEffect} from 'react'
import { auth} from '../FIrebase/config'
import {onAuthStateChanged} from 'firebase/auth'


export const AppContext = createContext(null)

export const authReducer =(state,action)=>{
  switch(action.type){

      case 'LOGIN':
          return{...state,user:action.payload }
      case 'LOGOUT':
           return{...state,user:null }
      case 'AUTH_IS_READY':
          return{...state,user:action.payload ,authIsReady:true }
  
      default:
          return state
  }
}




export const AppProvider= ({children}) => {
    const value = useProviderApp();
    return (
      <AppContext.Provider value={value}>{children}</AppContext.Provider>
    );
  };
  const useProviderApp = () => {

    const [state,dispatch]=useReducer(authReducer,{
      user:null,
      authIsReady:false
  })

  useEffect(() => {
    ///sprawdza czy jest user 
  const unsub =onAuthStateChanged(auth,(user)=>{
    dispatch({type : 'AUTH_IS_READY' ,payload:user})
      })
     return ()=> unsub()
     }, [])


     console.log("Auth state :",state)

    return {
        ...state,
        dispatch,
     
     
    };
  };

  export const useApp = () => {
    const app = useContext(AppContext);
    if (!app) {
      throw new Error('useProfile must be used inside ProfileContexProvider');
    }
    return app;
  };