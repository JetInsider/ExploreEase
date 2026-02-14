// backend/controllers/hotelController.js

const axios = require('axios');

console.log("✅ Hotel Controller Loaded");

const searchHotels = async (req, res) => {
  // Prevent browser caching
  res.set('Cache-Control', 'no-store, no-cache, must-revalidate, private');

  try {
    // 1. Extract new parameters from the request
    const { query, checkInDate, checkOutDate, adults } = req.query;
    
    console.log(`📩 Request: ${query} | In: ${checkInDate} | Out: ${checkOutDate} | Pax: ${adults}`);

    // 2. Basic Validation
    if (!query || !checkInDate || !checkOutDate || !adults) {
      return res.status(400).json({ message: 'Missing required parameters (Location, Dates, or Guests)' });
    }

    // --- STEP 1: Get Destination ID ---
    const locationOptions = {
      method: 'GET',
      url: 'https://booking-com15.p.rapidapi.com/api/v1/hotels/searchDestination',
      params: { query: query },
      headers: {
        'x-rapidapi-key': process.env.RAPIDAPI_KEY,
        'x-rapidapi-host': 'booking-com15.p.rapidapi.com'
      }
    };

    const locationResponse = await axios.request(locationOptions);
    
    // Handle the JSON structure
    const locationData = locationResponse.data.data?.[0];

    if (!locationData) {
      console.log('❌ No location found for:', query);
      return res.json([]); 
    }

    const destId = locationData.dest_id;
    const searchType = locationData.search_type;
    console.log(`✅ ID Found: ${destId}`);

    // --- STEP 2: Search Hotels ---

    const hotelOptions = {
      method: 'GET',
      url: 'https://booking-com15.p.rapidapi.com/api/v1/hotels/searchHotels',
      params: {
        dest_id: destId,
        search_type: searchType,
        
        // 3. Use the parameters provided by Frontend
        arrival_date: checkInDate,
        departure_date: checkOutDate,
        adults: adults,
        
        children_age: '0,17',
        room_qty: '1',
        page_number: '1',
        units: 'metric',
        temperature_unit: 'c',
        languagecode: 'en-us',
        currency_code: 'INR'
      },
      headers: {
        'x-rapidapi-key': process.env.RAPIDAPI_KEY,
        'x-rapidapi-host': 'booking-com15.p.rapidapi.com'
      }
    };

    const hotelResponse = await axios.request(hotelOptions);
    
    const hotelsList = hotelResponse.data.data?.hotels || [];
    console.log(`🏨 Hotels Found: ${hotelsList.length}`);
    
    res.json(hotelsList);

  } catch (error) {
    console.error('🔥 Error:', error.message);
    if(error.response) console.error(error.response.data);
    res.status(500).json({ message: 'Error fetching hotel data.' });
  }
};

module.exports = {
  searchHotels,
};