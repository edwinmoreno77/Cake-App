import React from 'react'
import { Navigate } from 'react-router-dom';
import { useAuthStore } from '../hooks';

export const PublicRoute = ({ children }) => {

    const { status } = useAuthStore();

    return (status === 'not-authenticated') ? children : <Navigate to="/homePage#Home" />
}
