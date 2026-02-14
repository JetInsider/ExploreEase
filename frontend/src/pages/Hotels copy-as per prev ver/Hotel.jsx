import React, { useState, useEffect } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import HotelResults from './HotelResults'
import HotelHeader from '../../components/HotelHeader/HotelHeader'
import { hotelService } from '../../services/hotelService'
import './Hotel.css'

const Hotel = () => {
  const [searchData, setSearchData] = useState({
    destination: 'New York',
    checkin: '2025-08-20',
    checkout: '2025-08-27',
    guests: '1'
  })
  const [showResults, setShowResults] = useState(false)
  const [popularDestinations, setPopularDestinations] = useState([])
  const [showDestinations, setShowDestinations] = useState(false)

  useEffect(() => {
    try {
      const destinations = hotelService.getPopularDestinations()
      setPopularDestinations(destinations)
    } catch (error) {
      console.error('Error loading popular destinations:', error)
      setPopularDestinations(['New York', 'Paris', 'London', 'Tokyo', 'Dubai'])
    }
  }, [])

  const handleInputChange = (e) => {
    const { id, value } = e.target
    setSearchData(prev => ({
      ...prev,
      [id]: value
    }))

    if (id === 'destination') {
      setShowDestinations(value.length > 0)
    }
  }

  const handleDestinationSelect = (destination) => {
    setSearchData(prev => ({
      ...prev,
      destination: destination
    }))
    setShowDestinations(false)
  }

  const handleSearch = (e) => {
    e.preventDefault()
    try {
      console.log('Searching for hotels with data:', searchData)
      setShowResults(true)
      
      // Scroll to results section after a short delay
      setTimeout(() => {
        const resultsSection = document.querySelector('.hotel-results')
        if (resultsSection) {
          resultsSection.scrollIntoView({ 
            behavior: 'smooth', 
            block: 'start' 
          })
        }
      }, 100)
    } catch (error) {
      console.error('Error in search:', error)
    }
  }

  return (
    <>
      <Navbar />
      
      <div className="hotel-page">
        {/* Background Decor */}
        <div className="bg-decor">
          <div className="decor-element decor-1"></div>
          <div className="decor-element decor-2"></div>
          <div className="decor-element decor-3"></div>
        </div>

        <HotelHeader />

        <div className="container">
          <div className="search-card">
            <form onSubmit={handleSearch}>
              <div className="form-group">
                <label htmlFor="destination">Destination</label>
                <div className="destinationInput">
                  <input
                    type="text"
                    id="destination"
                    className="form-input"
                    value={searchData.destination}
                    onChange={handleInputChange}
                    placeholder="e.g., New York"
                    required
                  />
                  {showDestinations && (
                    <div className="destinationDropdown">
                      {popularDestinations
                        .filter(dest =>
                          dest.toLowerCase().includes(searchData.destination.toLowerCase())
                        )
                        .map((destination, index) => (
                          <div
                            key={index}
                            className="destinationOption"
                            onClick={() => handleDestinationSelect(destination)}
                          >
                            {destination}
                          </div>
                        ))}
                    </div>
                  )}
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="checkin">Check-in Date</label>
                <div className="date-input">
                  <input
                    type="date"
                    id="checkin"
                    className="form-input"
                    value={searchData.checkin}
                    onChange={handleInputChange}
                    required
                  />
                  <i className="far fa-calendar-alt calendar-icon"></i>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="checkout">Check-out Date</label>
                <div className="date-input">
                  <input
                    type="date"
                    id="checkout"
                    className="form-input"
                    value={searchData.checkout}
                    onChange={handleInputChange}
                    required
                  />
                  <i className="far fa-calendar-alt calendar-icon"></i>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="guests">Number of Guests</label>
                <select
                  id="guests"
                  className="guest-select"
                  value={searchData.guests}
                  onChange={handleInputChange}
                  required
                >
                  <option value="1">1 Guest</option>
                  <option value="2">2 Guests</option>
                  <option value="3">3 Guests</option>
                  <option value="4">4 Guests</option>
                  <option value="5">5+ Guests</option>
                </select>
              </div>

              <button type="submit" className="search-btn">
                <i className="fas fa-search"></i> Search Hotels
              </button>
            </form>
          </div>
        </div>

        {showResults && (
          <HotelResults searchData={searchData} />
        )}
      </div>
    </>
  )
}

export default Hotel
