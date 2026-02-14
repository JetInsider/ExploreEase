// backend/routes/flightRoutes.js

const express = require('express');
const router = express.Router();
const { searchFlights } = require('../controllers/flightController'); // Import the controller logic

// Define the route. The path is relative to the path defined in server.js
// So, this will correspond to '/api/flights/search'
router.get('/search', searchFlights);

module.exports = router;