// frontend/src/pages/AttractionsPage.jsx

import React, { useState } from 'react';
import axios from 'axios';
import AttractionCard from '../../components/AttractionCard';
import Navbar from '../../components/Navbar/Navbar.jsx';

const AttractionsPage = () => {
  // State for form inputs
  const [place, setPlace] = useState('Mumbai'); // Default value
  const today = new Date().toISOString().split("T")[0];
  const [date, setDate] = useState(today); // Default value
  
  // State for API data, loading, and errors
  const [attractions, setAttractions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setAttractions([]);

    try {
      const params = {
        query: place,
        departDate: date,
      };
      
      const response = await axios.get('http://localhost:5001/api/attractions/search', { params });
      
      if (response.data?.products?.length > 0) {
        setAttractions(response.data.products);
      } else {
        setError('No attractions found for this location and date.');
      }
    } catch (err) {
      setError('Failed to fetch attractions. Please try again later.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
    
      <Navbar />
      <div className="min-h-screen bg-gray-100">
        {/* Search Form Card */}
        <div className="!ml-auto !mr-auto !p-8 max-w-xl mx-auto bg-white rounded-lg shadow-lg mt-10">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Find Local Experiences</h2>
          <form onSubmit={handleSearch} className="grid grid-cols-1 gap-4 items-end">
            <div className="flex flex-col">
              <label htmlFor="place" className="text-sm font-medium text-gray-700 mb-1">Place</label>
              <input 
                type="text" 
                id="place" 
                value={place}
                onChange={(e) => setPlace(e.target.value)}
                placeholder="e.g., Mumbai"
                className="!p-4 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 !text-black bg-white"
                required
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="date" className="text-sm font-medium text-gray-700 mb-1">Date</label>
              <input 
                type="date" 
                id="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="!p-4 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 !text-black bg-white"
                required
              />
            </div>
            <button type="submit" disabled={loading} className="!p-4 w-full !text-white !bg-orange-500 font-bold py-2 px-4 rounded-md  hover:!bg-orange-600 !transition-colors !duration-200 disabled:!bg-gray-400">
              {loading ? 'Searching...' : 'Search'}
            </button>
          </form>
        </div>

        {/* Results */}
        <main className="max-w-4xl  p-6 !items-center">
          {loading && <p className="text-center !mx-auto text-gray-600">Finding experiences...</p>}
          {error && <p className="text-center !mx-auto text-red-600 bg-red-100 p-3 rounded-md">{error}</p>}
          <div className="attractions-list !w-screen mt-4 flex flex-col !items-center !ml-auto">
            {attractions.map((attraction) => (
              <AttractionCard key={attraction.id} attraction={attraction} />
            ))}
          </div>
        </main>
      </div>
    </>
  );
};

export default AttractionsPage;