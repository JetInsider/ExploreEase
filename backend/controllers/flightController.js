// backend/controllers/flightController.js

const axios = require('axios');

// Budget validation function
const validateBudget = (budgetValue, fromId, toId) => {
  if (!budgetValue) return { isValid: true, message: null };

  const budgetNum = parseInt(budgetValue);

  // Define minimum realistic budgets for different route types
  const domesticMinBudget = 5000; // Minimum for domestic flights in INR
  const internationalMinBudget = 25000; // Minimum for international flights in INR

  // Check if it's domestic or international route (using IATA codes)
  const domesticAirports = ['BOM', 'DEL', 'BLR', 'MAA', 'CCU', 'HYD'];
  const fromCity = fromId?.split('.')[0]; // Extract city code from "BOM.AIRPORT"
  const toCity = toId?.split('.')[0];

  const isDomestic = domesticAirports.includes(fromCity) && domesticAirports.includes(toCity);

  if (isDomestic && budgetNum < domesticMinBudget) {
    return {
      isValid: false,
      message: `Low budget warning: ₹${budgetNum} might be too low for domestic flights. Consider increasing your budget to at least ₹${domesticMinBudget} for better options.`
    };
  } else if (!isDomestic && budgetNum < internationalMinBudget) {
    return {
      isValid: false,
      message: `Low budget warning: ₹${budgetNum} might be too low for international flights. Consider increasing your budget to at least ₹${internationalMinBudget} for better options.`
    };
  }

  return { isValid: true, message: null };
};

// We are moving the logic here and exporting it
const searchFlights = async (req, res) => {
  try {
    // Extract budget from query parameters
    const { budget, fromId, toId } = req.query;

    // Validate budget if provided
    if (budget) {
      const budgetValidation = validateBudget(budget, fromId, toId);
      if (!budgetValidation.isValid) {
        return res.status(400).json({
          error: 'Budget validation failed',
          message: budgetValidation.message,
          warning: true
        });
      }
    }

    const options = {
      method: 'GET',
      url: 'https://booking-com15.p.rapidapi.com/api/v1/flights/searchFlights',
      params: {
        fromId: req.query.fromId,
        toId: req.query.toId,
        departDate: req.query.departDate,
        adults: req.query.adults,
        sort: 'BEST',
        cabinClass: 'ECONOMY',
        currency_code: 'INR'
      },
      headers: {
        'x-rapidapi-key': process.env.RAPIDAPI_KEY,
        'x-rapidapi-host': 'booking-com15.p.rapidapi.com'
      }
    };

    const response = await axios.request(options);
    res.json(response.data);

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error fetching flight data from the controller.' });
  }
};

// Export the function so our routes can use it
module.exports = {
  searchFlights,
};