const express = require('express');
const router = express.Router();
const { searchAttractions } = require('../controllers/attractionsController');

// This route will be accessible at /api/attractions/search
router.get('/search', searchAttractions);

module.exports = router;