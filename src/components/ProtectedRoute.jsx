import React from 'react'
import { useSelector } from 'react-redux'
import { Outlet } from 'react-router-dom'
import { selectCurrentToken, selectCurrentUser } from '../features/auth/authSlice'

export const ProtectedRoute = () => {
  const token = useSelector(selectCurrentToken);
  const isLoggedIn = localStorage.getItem('loggedInUser');
  const roles = useSelector(selectCurrentUser);

  return <Outlet />
}
