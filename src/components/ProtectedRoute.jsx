import React from 'react'
import { useSelector } from 'react-redux'
import { Outlet, useLocation, Navigate } from 'react-router-dom'
import { selectCurrentToken } from '../features/auth/authSlice'

export const ProtectedRoute = () => {
  const location = useLocation()
  const currentToken = useSelector(selectCurrentToken);

  return (
    currentToken 
      ? <Outlet /> 
        : <Navigate to='/login' 
            state={{ from : location }} replace />
  )
}
