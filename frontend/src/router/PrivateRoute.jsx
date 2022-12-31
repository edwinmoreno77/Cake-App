import React from 'react'
import { Navigate, useLocation } from 'react-router-dom';
import { useAuthStore } from '../hooks';

export const PrivateRoute = ({ children }) => {

    const { pathname, search, hash } = useLocation();

    const lasPath = pathname + search + hash;

    localStorage.setItem('lastPath', lasPath);

    const { status } = useAuthStore();

    return (status === 'authenticated') ? children : <Navigate to="/login" />
}
