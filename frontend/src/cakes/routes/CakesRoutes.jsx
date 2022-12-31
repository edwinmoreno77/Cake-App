import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Footer, Navbar } from '../../ui'
import { AllCakesPages, ButterCreamPage, CakePage, GanachePage, HomePage, NosotrosPage, SearchPage } from '../pages'

export const CakesRoutes = () => {

    return (
        <>
            <Navbar />
            <Routes>
                <Route path="homePage" element={<HomePage />} />
                <Route path="buttercream" element={<ButterCreamPage />} />
                <Route path="ganache" element={<GanachePage />} />
                <Route path="allCakes" element={<AllCakesPages />} />
                <Route path="cake/:uid" element={<CakePage />} />
                <Route path="search" element={<SearchPage />} />
                <Route path="nosotros" element={<NosotrosPage />} />
                <Route path="/*" element={<Navigate to="homePage#Home" />} />
            </Routes>
            <Footer />
        </>
    )
}
