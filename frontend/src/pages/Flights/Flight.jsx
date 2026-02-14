// import React, { useState, useEffect } from 'react';
// import Navbar from '../../components/Navbar/Navbar';
// import FlightResults from './FlightResults';
// import { flightService } from '../../services/flightService';
// import './Flight.css';
// import axios from 'axios'; // <-- 1. Import axios
// import { toast } from 'react-hot-toast'; // <-- 2. Import toast

// function Flight() {
//   const [searchData, setSearchData] = useState({
//     from: 'India',
//     to: 'New York',
//     depart: '2025-08-20',
//     return: '2025-08-27',
//     passengers: '1 adult, Economy',
//     budget: '', // Add budget field
//   });

//   // --- 2. Add state for results, loading, and errors ---
//   const [flightResults, setFlightResults] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState(null);

//   const [showResults, setShowResults] = useState(false);
//   const [popularOrigins, setPopularOrigins] = useState([]);
//   const [popularDestinations, setPopularDestinations] = useState([]);
//   const [showFromDropdown, setShowFromDropdown] = useState(false);
//   const [showToDropdown, setShowToDropdown] = useState(false);

//   useEffect(() => {
//     // This part remains the same
//     try {
//       setPopularOrigins(flightService.getPopularOrigins());
//       setPopularDestinations(flightService.getPopularDestinations());
//     } catch (error) {
//       console.error('Error loading popular locations:', error);
//       setPopularOrigins(['Delhi', 'Mumbai', 'Bangalore', 'Chennai', 'Kolkata']);
//       setPopularDestinations(['New York', 'London', 'Paris', 'Tokyo', 'Sydney']);
//     }
//   }, []);

//   const handleInputChange = (e) => {
//     // This part remains the same
//     const { id, value } = e.target;
//     setSearchData(prev => ({
//       ...prev,
//       [id]: value,
//     }));
//     if (id === 'from') setShowFromDropdown(value.length > 0);
//     else if (id === 'to') setShowToDropdown(value.length > 0);
//   };

//   const handleLocationSelect = (location, type) => {
//     // This part remains the same
//     setSearchData(prev => ({
//       ...prev,
//       [type]: location,
//     }));
//     setShowFromDropdown(false);
//     setShowToDropdown(false);
//   };

//   // Budget validation function
//   const validateBudget = (budgetValue, fromCity, toCity) => {
//     if (!budgetValue) return true; // Budget is optional

//     const budgetNum = parseInt(budgetValue);

//     // Define minimum realistic budgets for different route types
//     const domesticMinBudget = 5000; // Minimum for domestic flights in INR
//     const internationalMinBudget = 25000; // Minimum for international flights in INR

//     // Check if it's domestic or international route
//     const isDomestic = fromCity === 'delhi' || fromCity === 'mumbai' || fromCity === 'bangalore' ||
//       fromCity === 'chennai' || fromCity === 'kolkata' || fromCity === 'india' ||
//       toCity === 'delhi' || toCity === 'mumbai' || toCity === 'bangalore' ||
//       toCity === 'chennai' || toCity === 'kolkata' || toCity === 'india';

//     if (isDomestic && budgetNum < domesticMinBudget) {
//       toast.warning(`Low budget warning: ₹${budgetNum} might be too low for domestic flights. Consider increasing your budget to at least ₹${domesticMinBudget} for better options.`);
//       return false;
//     } else if (!isDomestic && budgetNum < internationalMinBudget) {
//       toast.warning(`Low budget warning: ₹${budgetNum} might be too low for international flights. Consider increasing your budget to at least ₹${internationalMinBudget} for better options.`);
//       return false;
//     }

//     return true;
//   };

//   // --- 3. Update the handleSearch function ---
//   const handleSearch = async (e) => {
//     e.preventDefault();

//     // Validate budget before proceeding
//     if (searchData.budget && !validateBudget(searchData.budget, searchData.from, searchData.to)) {
//       return; // Stop search if budget validation fails
//     }

//     setIsLoading(true);
//     setError(null);
//     setShowResults(true); // Show the results area immediately

//     // --- Data Transformation ---
//     // The API needs IATA codes (e.g., 'DEL'), not full names ('Delhi').
//     // This is a simplified mapping. A real app would use a search API or a larger library.
//     const cityToIata = {
//       'delhi': 'DEL',
//       'mumbai': 'BOM',
//       'new york': 'JFK',
//       'london': 'LHR',
//       'india': 'DEL' // Default for 'India'
//     };

//     // Extract the number of adults from the passengers string
//     const adults = parseInt(searchData.passengers, 10) || 1;

//     // Prepare the data payload for the backend
//     const payload = {
//       from: cityToIata[searchData.from.toLowerCase()] || 'DEL',
//       to: cityToIata[searchData.to.toLowerCase()] || 'JFK',
//       departDate: searchData.depart,
//       returnDate: searchData.return,
//       adults: adults,
//       budget: searchData.budget, // Add budget to payload
//     };

//     console.log('Sending search data to backend:', payload);

//     try {
//       // Make the API call to YOUR backend server
//       const response = await axios.get('http://localhost:5001/api/flights/search', {
//         params: {
//           fromId: `${payload.from}.AIRPORT`,
//           toId: `${payload.to}.AIRPORT`,
//           departDate: payload.departDate,
//           adults: payload.adults,
//           budget: payload.budget,
//         }
//       });

//       console.log("Data received from backend:", response.data);
//       setFlightResults(response.data.data.flights); // Set the flight results from the API response

//     } catch (err) {
//       console.error('Error fetching flight data:', err);
//       setError('Could not fetch flight results. Please try again later.');
//       setFlightResults([]); // Clear any previous results
//     } finally {
//       setIsLoading(false); // Stop loading, whether success or fail
//     }
//   };

//   return (
//     <>
//       <Navbar />

//       <div className="flight-page">
//         <section className="hero">
//           <div className="container">
//             {/* The form part remains largely the same */}
//             <h2>So, where are you going next?</h2>
//             <form className="search-box" onSubmit={handleSearch}>
//               {/* ... your input fields ... */}
//               {/* No changes needed inside the <form> element itself */}
//               <div className="search-fields">
//                 <div className="field">
//                   <label htmlFor="from">From</label>
//                   <div className="locationInput">
//                     <input
//                       type="text"
//                       id="from"
//                       value={searchData.from}
//                       onChange={handleInputChange}
//                       placeholder="India (IN)"
//                     />
//                     {showFromDropdown && (
//                       <div className="locationDropdown">
//                         {popularOrigins
//                           .filter(origin =>
//                             origin.toLowerCase().includes(searchData.from.toLowerCase())
//                           )
//                           .map((origin, index) => (
//                             <div
//                               key={index}
//                               className="locationOption"
//                               onClick={() => handleLocationSelect(origin, 'from')}
//                             >
//                               {origin}
//                             </div>
//                           ))}
//                       </div>
//                     )}
//                   </div>
//                 </div>

//                 <div className="field">
//                   <label htmlFor="to">To</label>
//                   <div className="locationInput">
//                     <input
//                       type="text"
//                       id="to"
//                       value={searchData.to}
//                       onChange={handleInputChange}
//                       placeholder="New York (NY)"
//                     />
//                     {showToDropdown && (
//                       <div className="locationDropdown">
//                         {popularDestinations
//                           .filter(destination =>
//                             destination.toLowerCase().includes(searchData.to.toLowerCase())
//                           )
//                           .map((destination, index) => (
//                             <div
//                               key={index}
//                               className="locationOption"
//                               onClick={() => handleLocationSelect(destination, 'to')}
//                             >
//                               {destination}
//                             </div>
//                           ))}
//                       </div>
//                     )}
//                   </div>
//                 </div>

//                 <div className="field">
//                   <label htmlFor="depart">Departure Date</label>
//                   <input
//                     type="date"
//                     id="depart"
//                     value={searchData.depart}
//                     onChange={handleInputChange}
//                   />
//                 </div>

//                 <div className="field">
//                   <label htmlFor="return">Return Date</label>
//                   <input
//                     type="date"
//                     id="return"
//                     value={searchData.return}
//                     onChange={handleInputChange}
//                   />
//                 </div>

//                 <div className="field">
//                   <label htmlFor="passengers">Passengers & Class</label>
//                   <select
//                     id="passengers"
//                     value={searchData.passengers}
//                     onChange={handleInputChange}
//                   >
//                     <option value="1 adult, Economy">1 adult, Economy</option>
//                     <option value="1 adult, Business">1 adult, Business</option>
//                     <option value="1 adult, First">1 adult, First</option>
//                     <option value="2 adults, Economy">2 adults, Economy</option>
//                     <option value="2 adults, Business">2 adults, Business</option>
//                     <option value="Family, Economy">Family, Economy</option>
//                   </select>
//                 </div>

//                 <div className="field">
//                   <label htmlFor="budget">Budget (Optional)</label>
//                   <input
//                     type="number"
//                     id="budget"
//                     value={searchData.budget}
//                     onChange={handleInputChange}
//                     placeholder="e.g., 10000"
//                     min="1000"
//                     style={{ width: '100%', padding: '0.5rem', border: '1px solid #ccc', borderRadius: '4px' }}
//                   />
//                   <p style={{ fontSize: '0.8rem', color: '#666', marginTop: '0.25rem' }}>Enter your budget in INR (₹) to filter results.</p>
//                 </div>
//               </div>

//               <button type="submit" className="btn btn-primary" disabled={isLoading}>
//                 {isLoading ? 'Searching...' : 'Search Flights'}
//               </button>
//             </form>
//           </div>
//         </section>

//         {/* --- 4. Pass the new state down to the results component --- */}
//         {showResults && (
//           <FlightResults
//             isLoading={isLoading}
//             error={error}
//             flights={flightResults}
//           />
//         )}
//       </div>
//     </>
//   );
// }

// export default Flight;