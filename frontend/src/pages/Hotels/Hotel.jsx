// frontend/src/pages/Hotels/Hotel.jsx
import React, { useState } from 'react';
import axios from 'axios';
import HotelCard from '../../components/HotelCard';
import Navbar from '../../components/Navbar/Navbar';

const Hotel = () => {
  // Helper for default dates
  const getFutureDate = (days) => {
    const date = new Date();
    date.setDate(date.getDate() + days);
    return date.toISOString().split('T')[0];
  };

  // State
  const [destination, setDestination] = useState('Mumbai');
  const [checkInDate, setCheckInDate] = useState(getFutureDate(1)); // Tomorrow
  const [checkOutDate, setCheckOutDate] = useState(getFutureDate(2)); // Day after tomorrow
  const [adults, setAdults] = useState(1);
  
  const [hotels, setHotels] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setHotels([]);

    try {
      // Pass all 4 fields to backend
      const params = {
        query: destination,
        checkInDate: checkInDate,
        checkOutDate: checkOutDate,
        adults: adults
      };
      
      // Using the /find endpoint to avoid browser caching issues
      const response = await axios.get('http://localhost:5001/api/hotels/find', { params });
      
      if (response.data && response.data.length > 0) {
        setHotels(response.data);
      } else {
        setError('No hotels found for these details.');
      }
    } catch (err) {
      setError('Failed to fetch hotels. Please try again later.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
        <Navbar />
        <div className="min-h-screen bg-gray-100">
            {/* Header */}
            {/* Search Form */}
            <div className="!ml-auto !mb-20 !mr-auto !p-6 max-w-6xl mx-auto bg-white rounded-lg shadow-lg -mt-8 relative z-10 mx-4">
                {/* Changed grid to 5 columns to fit new fields */}
                <form onSubmit={handleSearch} className="grid grid-cols-1 md:grid-cols-5 gap-4 items-end">
                  
                  {/* 1. Destination */}
                  <div className="flex flex-col">
                      <label className="text-sm font-bold text-gray-700 mb-1">Where are you going?</label>
                      <input 
                      type="text" 
                      value={destination}
                      onChange={(e) => setDestination(e.target.value)}
                      placeholder="e.g. Mumbai"
                      className="!p-3 border border-gray-300 rounded-md w-full text-black bg-white focus:ring-2 focus:ring-blue-500 outline-none"
                      required
                      />
                  </div>

                  {/* 2. Check-in Date */}
                  <div className="flex flex-col">
                      <label className="text-sm font-bold text-gray-700 mb-1">Check-in Date</label>
                      <input 
                      type="date" 
                      value={checkInDate}
                      onChange={(e) => setCheckInDate(e.target.value)}
                      className="!p-3 border border-gray-300 rounded-md w-full text-black bg-white focus:ring-2 focus:ring-blue-500 outline-none"
                      required
                      />
                  </div>

                  {/* 3. Check-out Date (New) */}
                  <div className="flex flex-col">
                      <label className="text-sm font-bold text-gray-700 mb-1">Check-out Date</label>
                      <input 
                      type="date" 
                      value={checkOutDate}
                      min={checkInDate} // Prevent selecting a date before check-in
                      onChange={(e) => setCheckOutDate(e.target.value)}
                      className="!p-3 border border-gray-300 rounded-md w-full text-black bg-white focus:ring-2 focus:ring-blue-500 outline-none"
                      required
                      />
                  </div>

                  {/* 4. Adults (New) */}
                  <div className="flex flex-col">
                      <label className="text-sm font-bold text-gray-700 mb-1">Adults</label>
                      <input 
                      type="number" 
                      min="1"
                      max="30"
                      value={adults}
                      onChange={(e) => setAdults(e.target.value)}
                      className="!p-3 border border-gray-300 rounded-md w-full text-black bg-white focus:ring-2 focus:ring-blue-500 outline-none"
                      required
                      />
                  </div>

                  {/* 5. Search Button */}
                  <button type="submit" disabled={loading} className="!p-3 w-full !bg-orange-500 !text-white !font-bold rounded-md hover:!bg-orange-600 !transition-colors !duration-200 disabled:!bg-gray-400">
                      {loading ? 'Searching...' : 'Search Hotels'}
                  </button>
                </form>
            </div>

            {/* Results */}
            <main className="!mx-auto !pb-50 p-6 mt-4">
                {loading && (
                <div className="text-center py-10">
                    <p className="text-xl text-gray-600 animate-pulse">Searching for the best properties...</p>
                </div>
                )}
                
                {error && (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative text-center">
                    {error}
                </div>
                )}
                
                <div className="!mx-20 !max-w-500 grid grid-cols-1 gap-6">
                {hotels.map((hotel) => (
                  <HotelCard 
                    key={hotel.hotel_id || hotel.property.id} 
                    hotel={hotel} 
                    // ADD THIS PROP: Pass the search parameters to the card
                    searchParams={{ checkInDate, checkOutDate, adults }} 
                  />
                ))}
                </div>
            </main>
        </div>
    </>
  );
};

export default Hotel;