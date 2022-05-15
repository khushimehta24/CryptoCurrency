import React from 'react'
import { BrowserRouter as Router, Route, Routes, Outlet, Navigate } from 'react-router-dom';
import './App.css'
import CoinsPage from './pages/CoinsPage';
import DetailsPage from './pages/DetailsPage';
import LandingPage from './pages/LandingPage';
import NewsPage from './pages/NewsPage';

function App() {
    return (
        <>

            <Router>
                <Routes>
                    <Route exact path='/' element={<LandingPage />} />
                    <Route exact path='/details' element={<DetailsPage />} />
                    <Route exact path='/coins' element={<CoinsPage />} />
                    <Route exact path='/news' element={<NewsPage />} />


                </Routes>
            </Router>
        </>
    )
}

export default App