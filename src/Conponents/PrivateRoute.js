import React from 'react'
import { Navigate, Route, Routes } from 'react-router'
import { AppContext, useApp } from '../Contex/AppContext'

const PrivateRoute=({ children })=> {
    const {user} =useApp()
    return user ? children : <Navigate to="/login" />;
  }

export default PrivateRoute