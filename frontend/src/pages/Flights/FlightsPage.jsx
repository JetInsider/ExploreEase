// src/pages/FlightsPage.jsx

import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import axios from 'axios';
import FlightCard from '../../components/FlightCard.jsx';
import Navbar from '../../components/Navbar/Navbar.jsx';

const FlightsPage = () => {
  // State for form inputs
  const [origin, setOrigin] = useState('BOM'); // Default value
  const [destination, setDestination] = useState('DEL'); // Default value
  const today = new Date().toISOString().split("T")[0];
  const [departDate, setDepartDate] = useState(today); // Default value
  const [budget, setBudget] = useState(''); // Add budget state

  // State for API data, loading, and errors
  const [flights, setFlights] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Budget validation function
  const validateBudget = (budgetValue, fromCity, toCity) => {
    const budgetNum = parseInt(budgetValue);

    // Define minimum realistic budgets for different route types
    const domesticMinBudget = 5000; // Minimum for domestic flights in INR
    const internationalMinBudget = 25000; // Minimum for international flights in INR

    // Check if it's domestic or international route
    const isDomestic = fromCity === 'BOM' || fromCity === 'DEL' || fromCity === 'BLR' ||
      fromCity === 'MAA' || fromCity === 'CCU' || fromCity === 'HYD' ||
      toCity === 'BOM' || toCity === 'DEL' || toCity === 'BLR' ||
      toCity === 'MAA' || toCity === 'CCU' || toCity === 'HYD';

    if (isDomestic && budgetNum < domesticMinBudget) {
      toast.warning(`Low budget warning: ₹${budgetNum} might be too low for domestic flights. Consider increasing your budget to at least ₹${domesticMinBudget} for better options.`);
      return false;
    } else if (!isDomestic && budgetNum < internationalMinBudget) {
      toast.warning(`Low budget warning: ₹${budgetNum} might be too low for international flights. Consider increasing your budget to at least ₹${internationalMinBudget} for better options.`);
      return false;
    }

    return true;
  };

  const handleSearch = async (e) => {
    e.preventDefault(); // Prevent form from reloading the page

    // Validate budget before proceeding
    if (budget && !validateBudget(budget, origin, destination)) {
      return; // Stop search if budget validation fails
    }

    setLoading(true);
    setError('');
    setFlights([]); // Clear previous results

    try {
      const params = {
        fromId: `${origin}.AIRPORT`,
        toId: `${destination}.AIRPORT`,
        departDate: departDate,
        adults: '1',
        budget: budget, // Add budget to API call
      };

      const response = await axios.get('http://localhost:5001/api/flights/search', { params });

      if (response.data?.data?.flightOffers) {
        setFlights(response.data.data.flightOffers);
      } else {
        toast.error('No flights found for the selected route and date.');
      }
    } catch (err) {
      setError('Failed to fetch flights. Please try again later.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>

      <Navbar />
      <div className="!min-h-screen !bg-gray-100">

        {/* Header */}
        {/* <header className="!bg-blue-800 !text-white !p-6 !shadow-md">
        <div className="!max-w-4xl !mx-auto">
          <h1 className="!text-5xl !text-center !font-bold">✈️ Flight Search</h1>
        </div>
      </header> */}

        {/* Search Form */}
        <div className="!ml-auto  !mr-auto !mb-5 !p-8 !max-w-4xl !mx-auto !bg-white !rounded-lg !shadow-lg">
          <form onSubmit={handleSearch} >
            <div className="!flex !flex-col">
              <label htmlFor="origin" className="!text-sm !font-medium !text-gray-700 !mb-1">Origin</label>
              <input
                type="text"
                id="origin"
                value={origin}
                onChange={(e) => setOrigin(e.target.value.toUpperCase())}
                placeholder="e.g., BOM"
                className="!p-4 !border !border-gray-300 !rounded-md !shadow-sm focus:!ring-blue-500 focus:!border-blue-500 !text-black !bg-white"
                required
              />
            </div>

            <div className="!mt-2 !flex !flex-col">
              <label htmlFor="destination" className="!text-sm !font-medium !text-gray-700 !mb-1">Destination</label>
              <input
                type="text"
                id="destination"
                value={destination}
                onChange={(e) => setDestination(e.target.value.toUpperCase())}
                placeholder="e.g., DEL"
                className="!p-4 !border !border-gray-300 !rounded-md !shadow-sm focus:!ring-blue-500 focus:!border-blue-500 !text-black !bg-white"
                required
              />
            </div>

            <div className="!mt-2 !flex !flex-col">
              <label htmlFor="departDate" className="!text-sm !font-medium !text-gray-700 !mb-1">Departure Date</label>
              <input
                type="date"
                id="departDate"
                value={departDate}
                onChange={(e) => setDepartDate(e.target.value)}
                className="!p-4 !border !border-gray-300 !rounded-md !shadow-sm focus:!ring-blue-500 focus:!border-blue-500 !text-black !bg-white"
                required
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="!p-4 !m-4 !ml-0 !w-full !text-white !bg-orange-500 !font-bold !py-2 !px-4 !rounded-md hover:!bg-orange-600 !transition-colors !duration-200 disabled:!bg-gray-400"
            >
              {loading ? 'Searching...' : 'Search'}
            </button>
          </form>
        </div>

        {/* Results */}
        <main className="">
          {loading && <p className="!m-auto !text-center !text-gray-600">Finding the best flights for you...</p>}
          {error && <p className="!text-center !text-red-600 !bg-red-100 !p-3 !rounded-md">{error}</p>}
          {/* <div className="!flights-list !mt-4">
            {flights.map((offer) => (
              <FlightCard key={offer.token} offer={offer} />
            ))}
          </div> */}
          <div className="flights-list mt-4">
            {flights.map((offer) => (
              <FlightCard
                key={offer.token}
                offer={offer}
                origin={origin}
                destination={destination}
                departDate={departDate}
              />
            ))}
          </div>
        </main>
      </div>

    </>
  );

};

export default FlightsPage;
