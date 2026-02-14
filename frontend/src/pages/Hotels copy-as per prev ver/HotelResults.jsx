import React, { useState, useEffect } from 'react'
import { hotelService } from '../../services/hotelService'
import './HotelResults.css'

const HotelResults = ({ searchData }) => {
  const [hotels, setHotels] = useState([])
  const [loading, setLoading] = useState(true)
  const [selectedHotel, setSelectedHotel] = useState(null)
  const [showPriceComparison, setShowPriceComparison] = useState(false)

  useEffect(() => {
    const loadHotels = async () => {
      try {
        setLoading(true)
        const hotelData = await hotelService.searchHotels(searchData)
        setHotels(hotelData)
      } catch (error) {
        console.error('Error loading hotels:', error)
      } finally {
        setLoading(false)
      }
    }

    loadHotels()
  }, [searchData])

  const handleHotelSelect = (hotel) => {
    setSelectedHotel(hotel)
    setShowPriceComparison(true)
  }

  const handleBookNow = (websiteUrl) => {
    window.open(websiteUrl, '_blank')
  }

  const getLowestPrice = (priceComparison) => {
    if (!priceComparison || priceComparison.length === 0) return null
    return Math.min(...priceComparison.map(p => p.price))
  }

  const getHighestPrice = (priceComparison) => {
    if (!priceComparison || priceComparison.length === 0) return null
    return Math.max(...priceComparison.map(p => p.price))
  }

  const renderStars = (rating) => {
    const stars = []
    const fullStars = Math.floor(rating)
    const hasHalfStar = rating % 1 !== 0

    for (let i = 0; i < fullStars; i++) {
      stars.push(<ion-icon key={i} name="star" className="star filled"></ion-icon>)
    }

    if (hasHalfStar) {
      stars.push(<ion-icon key="half" name="star-half" className="star filled"></ion-icon>)
    }

    const emptyStars = 5 - Math.ceil(rating)
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<ion-icon key={`empty-${i}`} name="star-outline" className="star"></ion-icon>)
    }

    return stars
  }

  if (loading) {
    return (
      <section className="hotel-results">
        <div className="container">
          <div className="loading-state">
            <div className="loading-spinner"></div>
            <p>Searching for hotels...</p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="hotel-results">
      <div className="container">
        <div className="results-header">
          <h3>Hotel Results</h3>
          <p>
            {searchData.destination} • {searchData.checkin} to {searchData.checkout} • {searchData.guests}
          </p>
        </div>

        <div className="results-list">
          {hotels.map((hotel) => (
            <div key={hotel.id} className="hotel-card">
              <div className="hotel-image">
                <img src={hotel.image} alt={hotel.name} />
                <div className="hotel-price">
                  <span className="price">₹{hotel.price.toLocaleString()}</span>
                  <span className="per-night">per night</span>
                  {hotel.priceComparison && (
                    <div className="price-range">
                      <span className="range-text">
                        From ₹{getLowestPrice(hotel.priceComparison)?.toLocaleString()}
                        to ₹{getHighestPrice(hotel.priceComparison)?.toLocaleString()}
                      </span>
                    </div>
                  )}
                </div>
              </div>

              <div className="hotel-content">
                <div className="hotel-header">
                  <h4 className="hotel-name">{hotel.name}</h4>
                  <div className="hotel-rating">
                    <div className="stars">
                      {renderStars(hotel.rating)}
                    </div>
                    <span className="rating-text">{hotel.rating}</span>
                  </div>
                </div>

                <p className="hotel-location">
                  <ion-icon name="location-outline"></ion-icon>
                  {hotel.location}
                </p>

                <p className="hotel-description">{hotel.description}</p>

                <div className="hotel-amenities">
                  {hotel.amenities.map((amenity, index) => (
                    <span key={index} className="amenity">
                      {amenity}
                    </span>
                  ))}
                </div>

                <div className="hotel-actions">
                  <input 
                    type="text" 
                    placeholder="Enter promo code or special requests..."
                    className="promo-input"
                  />
                  <button className="btn btn-outline">View Details</button>
                  <button
                    className="btn btn-primary"
                    onClick={() => handleHotelSelect(hotel)}
                  >
                    Compare Prices
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {showPriceComparison && selectedHotel && (
          <div className="price-comparison-modal">
            <div className="modal-content">
              <div className="modal-header">
                <h3>Price Comparison - {selectedHotel.name}</h3>
                <button
                  className="close-btn"
                  onClick={() => setShowPriceComparison(false)}
                >
                  ×
                </button>
              </div>

              <div className="comparison-content">
                <div className="hotel-summary">
                  <div className="hotel-info">
                    <img src={selectedHotel.image} alt={selectedHotel.name} className="hotel-thumbnail" />
                    <div className="hotel-details">
                      <h4>{selectedHotel.name}</h4>
                      <p>{selectedHotel.location}</p>
                      <div className="hotel-rating">
                        <div className="stars">
                          {renderStars(selectedHotel.rating)}
                        </div>
                        <span className="rating-text">{selectedHotel.rating}</span>
                      </div>
                    </div>
                  </div>
                  <div className="stay-info">
                    <span>{searchData.checkin} to {searchData.checkout}</span>
                    <span>{searchData.guests}</span>
                  </div>
                </div>

                <div className="price-options">
                  {selectedHotel.priceComparison?.map((option, index) => (
                    <div key={index} className="price-option">
                      <div className="website-info">
                        <img
                          src={option.logo}
                          alt={option.website}
                          className="website-logo"
                        />
                        <div className="website-details">
                          <h4>{option.website}</h4>
                          {option.rating && (
                            <div className="rating">
                              <span className="stars">★★★★☆</span>
                              <span className="rating-text">{option.rating}</span>
                              <span className="reviews">({option.reviews} reviews)</span>
                            </div>
                          )}
                        </div>
                      </div>

                      <div className="price-details">
                        <span className="price">₹{option.price.toLocaleString()}</span>
                        <span className="per-night">per night</span>
                        <button
                          className="btn btn-primary book-btn"
                          onClick={() => handleBookNow(option.url)}
                        >
                          Book Now
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="comparison-footer">
                  <p>Prices shown are for {searchData.guests} • All prices include taxes and fees</p>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="results-footer">
          <p>Showing {hotels.length} hotels • Prices may vary</p>
        </div>
      </div>
    </section>
  )
}

export default HotelResults
