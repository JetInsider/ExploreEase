// backend/server.js
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
require('dotenv').config();

// Connect to database
connectDB();


// Import our new router
const flightRoutes = require('./routes/flightRoutes');
const attractionsRoutes = require('./routes/attractionsRoutes');
const hotelRoutes = require('./routes/hotelRoutes');

const app = express();
const PORT = 5001;

// Middleware
app.use(cors());
app.use(express.json());

// Use the flight router for any requests to '/api/flights'
app.use('/api/flights', flightRoutes);
app.use('/api/attractions', attractionsRoutes);
app.use('/api/hotels', hotelRoutes);

app.listen(PORT, () => {
  console.log(`✈️  Backend server running on http://localhost:${PORT}`);
});