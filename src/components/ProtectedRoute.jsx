import React from 'react'
import { useAuth } from '../context/AuthContext'
import { Navigate } from 'react-router'

export const ProtectedRoute = ({children}) => {
    const {user, loading} = useAuth();
        if (loading) return <h1>loading</h1>;

        if (!user) return <Navigate to='/index'/>;
        return <>{children}</>;
}

export default ProtectedRoute