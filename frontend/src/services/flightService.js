// Flight service for managing flight-related operations
export const flightService = {
  // Get popular origin cities
  getPopularOrigins() {
    return [
      'Delhi',
      'Mumbai',
      'Bangalore',
      'Chennai',
      'Kolkata',
      'Hyderabad',
      'Pune',
      'Ahmedabad',
      'Jaipur',
      'Lucknow'
    ]
  },

  // Get popular destination cities
  getPopularDestinations() {
    return [
      'New York',
      'London',
      'Paris',
      'Tokyo',
      'Sydney',
      'Dubai',
      'Singapore',
      'Bangkok',
      'Hong Kong',
      'Toronto'
    ]
  },

  // Search for flights with price comparison (mock implementation)
  async searchFlights(searchParams) {
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000))

    // Mock flight data with price comparisons from different websites
    const mockFlights = [
      {
        id: 1,
        airline: 'Air India',
        flightNumber: 'AI101',
        departure: '06:00',
        arrival: '09:30',
        duration: '3h 30m',
        price: 45000,
        stops: 'Direct',
        class: 'Economy',
        from: searchParams.from,
        to: searchParams.to,
        date: searchParams.depart,
        priceComparison: [
          {
            website: 'MakeMyTrip',
            price: 45000,
            url: 'https://www.makemytrip.com/flights/air-india-ai101-delhi-new-york',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/MakeMyTrip_Logo.svg/2560px-MakeMyTrip_Logo.svg.png'
          },
          {
            website: 'Goibibo',
            price: 46500,
            url: 'https://www.goibibo.com/flights/air-india-ai101-delhi-new-york',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Goibibo_logo.svg/2560px-Goibibo_logo.svg.png'
          },
          {
            website: 'Yatra',
            price: 44000,
            url: 'https://www.yatra.com/flights/air-india-ai101-delhi-new-york',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Yatra_logo.svg/2560px-Yatra_logo.svg.png'
          },
          {
            website: 'Expedia',
            price: 47000,
            url: 'https://www.expedia.com/Flights-Search?leg1=from:DEL,to:JFK,departure:2025-08-20TANYT',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Expedia_2012_logo.svg/2560px-Expedia_2012_logo.svg.png'
          }
        ]
      },
      {
        id: 2,
        airline: 'Emirates',
        flightNumber: 'EK202',
        departure: '08:15',
        arrival: '12:45',
        duration: '4h 30m',
        price: 52000,
        stops: '1 stop',
        class: 'Economy',
        from: searchParams.from,
        to: searchParams.to,
        date: searchParams.depart,
        priceComparison: [
          {
            website: 'MakeMyTrip',
            price: 52000,
            url: 'https://www.makemytrip.com/flights/emirates-ek202-delhi-new-york',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/MakeMyTrip_Logo.svg/2560px-MakeMyTrip_Logo.svg.png'
          },
          {
            website: 'Goibibo',
            price: 53500,
            url: 'https://www.goibibo.com/flights/emirates-ek202-delhi-new-york',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Goibibo_logo.svg/2560px-Goibibo_logo.svg.png'
          },
          {
            website: 'Yatra',
            price: 51000,
            url: 'https://www.yatra.com/flights/emirates-ek202-delhi-new-york',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Yatra_logo.svg/2560px-Yatra_logo.svg.png'
          },
          {
            website: 'Expedia',
            price: 54000,
            url: 'https://www.expedia.com/Flights-Search?leg1=from:DEL,to:JFK,departure:2025-08-20TANYT',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Expedia_2012_logo.svg/2560px-Expedia_2012_logo.svg.png'
          }
        ]
      },
      {
        id: 3,
        airline: 'British Airways',
        flightNumber: 'BA303',
        departure: '10:30',
        arrival: '15:00',
        duration: '4h 30m',
        price: 48000,
        stops: 'Direct',
        class: 'Economy',
        from: searchParams.from,
        to: searchParams.to,
        date: searchParams.depart,
        priceComparison: [
          {
            website: 'MakeMyTrip',
            price: 48000,
            url: 'https://www.makemytrip.com/flights/british-airways-ba303-delhi-new-york',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/MakeMyTrip_Logo.svg/2560px-MakeMyTrip_Logo.svg.png'
          },
          {
            website: 'Goibibo',
            price: 49500,
            url: 'https://www.goibibo.com/flights/british-airways-ba303-delhi-new-york',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Goibibo_logo.svg/2560px-Goibibo_logo.svg.png'
          },
          {
            website: 'Yatra',
            price: 47000,
            url: 'https://www.yatra.com/flights/british-airways-ba303-delhi-new-york',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Yatra_logo.svg/2560px-Yatra_logo.svg.png'
          },
          {
            website: 'Expedia',
            price: 50000,
            url: 'https://www.expedia.com/Flights-Search?leg1=from:DEL,to:JFK,departure:2025-08-20TANYT',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Expedia_2012_logo.svg/2560px-Expedia_2012_logo.svg.png'
          }
        ]
      },
      {
        id: 4,
        airline: 'Lufthansa',
        flightNumber: 'LH404',
        departure: '14:00',
        arrival: '18:30',
        duration: '4h 30m',
        price: 51000,
        stops: '1 stop',
        class: 'Economy',
        from: searchParams.from,
        to: searchParams.to,
        date: searchParams.depart,
        priceComparison: [
          {
            website: 'MakeMyTrip',
            price: 51000,
            url: 'https://www.makemytrip.com/flights/lufthansa-lh404-delhi-new-york',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/MakeMyTrip_Logo.svg/2560px-MakeMyTrip_Logo.svg.png'
          },
          {
            website: 'Goibibo',
            price: 52500,
            url: 'https://www.goibibo.com/flights/lufthansa-lh404-delhi-new-york',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Goibibo_logo.svg/2560px-Goibibo_logo.svg.png'
          },
          {
            website: 'Yatra',
            price: 50000,
            url: 'https://www.yatra.com/flights/lufthansa-lh404-delhi-new-york',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Yatra_logo.svg/2560px-Yatra_logo.svg.png'
          },
          {
            website: 'Expedia',
            price: 53000,
            url: 'https://www.expedia.com/Flights-Search?leg1=from:DEL,to:JFK,departure:2025-08-20TANYT',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Expedia_2012_logo.svg/2560px-Expedia_2012_logo.svg.png'
          }
        ]
      }
    ]

    return mockFlights
  },

  // Get flight details by ID
  async getFlightDetails(flightId) {
    await new Promise(resolve => setTimeout(resolve, 500))

    const mockFlight = {
      id: flightId,
      airline: 'Air India',
      flightNumber: 'AI101',
      departure: '06:00',
      arrival: '09:30',
      duration: '3h 30m',
      price: 45000,
      stops: 'Direct',
      class: 'Economy',
      from: 'Delhi',
      to: 'New York',
      date: '2025-08-20',
      aircraft: 'Boeing 787 Dreamliner',
      terminal: 'T3',
      gate: 'A12',
      status: 'On Time',
      priceComparison: [
        {
          website: 'MakeMyTrip',
          price: 45000,
          url: 'https://www.makemytrip.com/flights/air-india-ai101-delhi-new-york',
          logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/MakeMyTrip_Logo.svg/2560px-MakeMyTrip_Logo.svg.png'
        },
        {
          website: 'Goibibo',
          price: 46500,
          url: 'https://www.goibibo.com/flights/air-india-ai101-delhi-new-york',
          logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Goibibo_logo.svg/2560px-Goibibo_logo.svg.png'
        },
        {
          website: 'Yatra',
          price: 44000,
          url: 'https://www.yatra.com/flights/air-india-ai101-delhi-new-york',
          logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Yatra_logo.svg/2560px-Yatra_logo.svg.png'
        },
        {
          website: 'Expedia',
          price: 47000,
          url: 'https://www.expedia.com/Flights-Search?leg1=from:DEL,to:JFK,departure:2025-08-20TANYT',
          logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Expedia_2012_logo.svg/2560px-Expedia_2012_logo.svg.png'
        }
      ]
    }

    return mockFlight
  },

  // Book a flight
  async bookFlight(flightId, passengerDetails) {
    await new Promise(resolve => setTimeout(resolve, 2000))

    // Mock booking confirmation
    return {
      bookingId: `BK${Date.now()}`,
      flightId: flightId,
      status: 'Confirmed',
      passengerDetails: passengerDetails,
      totalAmount: 45000,
      bookingDate: new Date().toISOString()
    }
  },

  // Get price comparison for a specific flight
  async getPriceComparison(flightId) {
    await new Promise(resolve => setTimeout(resolve, 500))

    // Mock price comparison data
    const priceComparison = [
      {
        website: 'MakeMyTrip',
        price: 45000,
        url: 'https://www.makemytrip.com/flights/air-india-ai101-delhi-new-york',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/MakeMyTrip_Logo.svg/2560px-MakeMyTrip_Logo.svg.png',
        rating: 4.8,
        reviews: 1247
      },
      {
        website: 'Goibibo',
        price: 46500,
        url: 'https://www.goibibo.com/flights/air-india-ai101-delhi-new-york',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Goibibo_logo.svg/2560px-Goibibo_logo.svg.png',
        rating: 4.7,
        reviews: 892
      },
      {
        website: 'Yatra',
        price: 44000,
        url: 'https://www.yatra.com/flights/air-india-ai101-delhi-new-york',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Yatra_logo.svg/2560px-Yatra_logo.svg.png',
        rating: 4.6,
        reviews: 567
      },
      {
        website: 'Expedia',
        price: 47000,
        url: 'https://www.expedia.com/Flights-Search?leg1=from:DEL,to:JFK,departure:2025-08-20TANYT',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Expedia_2012_logo.svg/2560px-Expedia_2012_logo.svg.png',
        rating: 4.9,
        reviews: 2156
      }
    ]

    return priceComparison
  }
}
