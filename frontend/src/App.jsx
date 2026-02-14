import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home/Home'
import Flight from './pages/Flights/FlightsPage'
import Hotel from './pages/Hotels/Hotel'
import ItineraryPlanner from './pages/ItineraryPlanner/ItineraryPlanner'
import AttractionsPage from './pages/LocalAttractions/AttractionsPage' // <-- 1. Import the new page
import { Auth0ProviderWrapper } from './auth/Auth0Provider'

function App() {
  return (
    <Auth0ProviderWrapper>
      <div className="app">
        <BrowserRouter>
          {/* A navigation bar would go here */}
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/home' element={<Home />} />
            <Route path='/flights' element={<Flight />} />
            <Route path='/hotels' element={<Hotel />} />
            <Route path='/itinerary-planner' element={<ItineraryPlanner />} />
            <Route path='/attractions' element={<AttractionsPage />} /> {/* <-- 2. Add the route */}
            <Route path='*' element={<div className="page-container">Error 404! No page found 😕</div>} />
          </Routes>
        </BrowserRouter>
      </div>
    </Auth0ProviderWrapper>
  )
}

export default App