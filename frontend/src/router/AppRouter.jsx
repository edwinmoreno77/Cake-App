import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";

import { LoginPage } from "../auth/pages/LoginPage";
import { CakesRoutes } from "../cakes/routes/CakesRoutes";
import { useAuthStore } from "../hooks";
import { Spinner } from "../ui";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";


export const AppRouter = () => {

    const { status, checkAuthToken } = useAuthStore();

    useEffect(() => {
        checkAuthToken();

    }, [])

    if (status === 'checking') {
        return <Spinner />
    }

    return (
        <>
            <Routes>
                <Route path="login" element={
                    <PublicRoute>
                        <LoginPage />
                    </PublicRoute>
                } />

                <Route path="/*" element={
                    <PrivateRoute>
                        <CakesRoutes />
                    </PrivateRoute>
                } />
            </Routes>
        </>
    )
}
