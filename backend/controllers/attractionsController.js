// backend/controllers/attractionsController.js

const axios = require('axios');

const searchAttractions = async (req, res) => {
  try {
    const { query, departDate } = req.query;
    if (!query || !departDate) {
      return res.status(400).json({ message: 'Query and date parameters are required' });
    }

    // --- STEP 1: Get the Location ID from the query text ---
    
    const locationOptions = {
      method: 'GET',
      url: 'https://booking-com15.p.rapidapi.com/api/v1/attraction/searchLocation',
      params: { query: query },
      headers: {
        'x-rapidapi-key': process.env.RAPIDAPI_KEY,
        'x-rapidapi-host': 'booking-com15.p.rapidapi.com'
      }
    };
    
    const locationResponse = await axios.request(locationOptions);

    // Extract the ID from the first destination result
    const destinations = locationResponse.data.data.destinations;
    if (!destinations || destinations.length === 0) {
      return res.json({ products: [] }); // Send empty result if no location found
    }
    const locationId = destinations[0].id; // This is the ID we need, e.g., "eyJ1ZmkiOi0yMTA2MTAyfQ=="

    // --- STEP 2: Search for attractions using the new ID ---

    // Calculate end_date (one day after start_date)
    const startDateObj = new Date(departDate);
    const endDateObj = new Date(startDateObj);
    endDateObj.setDate(endDateObj.getDate() + 1);
    const endDate = endDateObj.toISOString().split('T')[0];

    const attractionsOptions = {
      method: 'GET',
      url: 'https://booking-com15.p.rapidapi.com/api/v1/attraction/searchAttractions',
      params: {
        id: locationId,      // Using the ID from Step 1
        startDate: departDate,
        endDate: endDate,    // Using the calculated end date
        currency_code: 'INR'
      },
      headers: {
        'x-rapidapi-key': process.env.RAPIDAPI_KEY,
        'x-rapidapi-host': 'booking-com15.p.rapidapi.com'
      }
    };

    const attractionsResponse = await axios.request(attractionsOptions);

    // Send the final list of products back to the frontend
    res.json(attractionsResponse.data.data || { products: [] }); 

  } catch (error) {
    console.error(error);
    // Log the detailed error from the API if one occurs
    if (error.response) {
      console.error('API Error:', error.response.data);
    }
    res.status(500).json({ message: 'Error fetching attractions data.' });
  }
};

module.exports = {
  searchAttractions,
};