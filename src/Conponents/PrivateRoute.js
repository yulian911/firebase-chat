import React from 'react'
import { Navigate } from 'react-router'
import { useApp } from '../Contex/AppContext'

const PrivateRoute=({ children })=> {
    const {user} =useApp()
    return user ? children : <Navigate to="/login" />;
  }

export default PrivateRoute