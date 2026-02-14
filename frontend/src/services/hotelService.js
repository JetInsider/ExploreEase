// Hotel service for managing hotel-related operations
export const hotelService = {
  // Get popular destination cities
  getPopularDestinations() {
    return [
      'New York',
      'Paris',
      'London',
      'Tokyo',
      'Dubai',
      'Singapore',
      'Bangkok',
      'Hong Kong',
      'Sydney',
      'Toronto'
    ]
  },

  // Search for hotels with price comparison (mock implementation)
  async searchHotels(searchParams) {
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    // Mock hotel data with price comparisons from different websites
    const mockHotels = [
      {
        id: 1,
        name: 'The Plaza Hotel',
        location: searchParams.destination,
        rating: 4.8,
        price: 350,
        image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=300&fit=crop',
        amenities: ['Free WiFi', 'Pool', 'Spa', 'Restaurant'],
        description: 'Luxury hotel in the heart of the city with stunning views.',
        checkin: searchParams.checkin,
        checkout: searchParams.checkout,
        guests: searchParams.guests,
        priceComparison: [
          {
            website: 'Booking.com',
            price: 350,
            url: 'https://www.booking.com/hotel/us/the-plaza-new-york.html',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Booking.com_logo.svg/2560px-Booking.com_logo.svg.png'
          },
          {
            website: 'Expedia',
            price: 365,
            url: 'https://www.expedia.com/New-York-Hotels-The-Plaza-Hotel.h191.hotel-information',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Expedia_2012_logo.svg/2560px-Expedia_2012_logo.svg.png'
          },
          {
            website: 'Hotels.com',
            price: 340,
            url: 'https://www.hotels.com/ho123456/the-plaza-hotel-new-york/',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2560px-Google_2015_logo.svg.png'
          },
          {
            website: 'TripAdvisor',
            price: 355,
            url: 'https://www.tripadvisor.com/Hotel_Review-g60763-d93302-Reviews-The_Plaza-New_York_City_New_York.html',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Tripadvisor_logo.svg/2560px-Tripadvisor_logo.svg.png'
          }
        ]
      },
      {
        id: 2,
        name: 'Waldorf Astoria',
        location: searchParams.destination,
        rating: 4.9,
        price: 450,
        image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=400&h=300&fit=crop',
        amenities: ['Free WiFi', 'Gym', 'Spa', 'Bar'],
        description: 'Iconic luxury hotel with world-class service and amenities.',
        checkin: searchParams.checkin,
        checkout: searchParams.checkout,
        guests: searchParams.guests,
        priceComparison: [
          {
            website: 'Booking.com',
            price: 450,
            url: 'https://www.booking.com/hotel/us/waldorf-astoria-new-york.html',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Booking.com_logo.svg/2560px-Booking.com_logo.svg.png'
          },
          {
            website: 'Expedia',
            price: 465,
            url: 'https://www.expedia.com/New-York-Hotels-Waldorf-Astoria.h191.hotel-information',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Expedia_2012_logo.svg/2560px-Expedia_2012_logo.svg.png'
          },
          {
            website: 'Hotels.com',
            price: 440,
            url: 'https://www.hotels.com/ho789012/waldorf-astoria-new-york/',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2560px-Google_2015_logo.svg.png'
          },
          {
            website: 'TripAdvisor',
            price: 455,
            url: 'https://www.tripadvisor.com/Hotel_Review-g60763-d93303-Reviews-Waldorf_Astoria-New_York_City_New_York.html',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Tripadvisor_logo.svg/2560px-Tripadvisor_logo.svg.png'
          }
        ]
      },
      {
        id: 3,
        name: 'The Ritz-Carlton',
        location: searchParams.destination,
        rating: 4.7,
        price: 380,
        image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=400&h=300&fit=crop',
        amenities: ['Free WiFi', 'Pool', 'Gym', 'Restaurant'],
        description: 'Elegant hotel offering sophisticated luxury and comfort.',
        checkin: searchParams.checkin,
        checkout: searchParams.checkout,
        guests: searchParams.guests,
        priceComparison: [
          {
            website: 'Booking.com',
            price: 380,
            url: 'https://www.booking.com/hotel/us/ritz-carlton-new-york.html',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Booking.com_logo.svg/2560px-Booking.com_logo.svg.png'
          },
          {
            website: 'Expedia',
            price: 395,
            url: 'https://www.expedia.com/New-York-Hotels-The-Ritz-Carlton.h191.hotel-information',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Expedia_2012_logo.svg/2560px-Expedia_2012_logo.svg.png'
          },
          {
            website: 'Hotels.com',
            price: 370,
            url: 'https://www.hotels.com/ho345678/ritz-carlton-new-york/',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2560px-Google_2015_logo.svg.png'
          },
          {
            website: 'TripAdvisor',
            price: 385,
            url: 'https://www.tripadvisor.com/Hotel_Review-g60763-d93304-Reviews-The_Ritz_Carlton-New_York_City_New_York.html',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Tripadvisor_logo.svg/2560px-Tripadvisor_logo.svg.png'
          }
        ]
      },
      {
        id: 4,
        name: 'Marriott Marquis',
        location: searchParams.destination,
        rating: 4.5,
        price: 280,
        image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=400&h=300&fit=crop',
        amenities: ['Free WiFi', 'Gym', 'Restaurant', 'Business Center'],
        description: 'Modern hotel perfect for business and leisure travelers.',
        checkin: searchParams.checkin,
        checkout: searchParams.checkout,
        guests: searchParams.guests,
        priceComparison: [
          {
            website: 'Booking.com',
            price: 280,
            url: 'https://www.booking.com/hotel/us/marriott-marquis-new-york.html',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Booking.com_logo.svg/2560px-Booking.com_logo.svg.png'
          },
          {
            website: 'Expedia',
            price: 295,
            url: 'https://www.expedia.com/New-York-Hotels-Marriott-Marquis.h191.hotel-information',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Expedia_2012_logo.svg/2560px-Expedia_2012_logo.svg.png'
          },
          {
            website: 'Hotels.com',
            price: 270,
            url: 'https://www.hotels.com/ho901234/marriott-marquis-new-york/',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2560px-Google_2015_logo.svg.png'
          },
          {
            website: 'TripAdvisor',
            price: 285,
            url: 'https://www.tripadvisor.com/Hotel_Review-g60763-d93305-Reviews-Marriott_Marquis-New_York_City_New_York.html',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Tripadvisor_logo.svg/2560px-Tripadvisor_logo.svg.png'
          }
        ]
      }
    ]

    return mockHotels
  },

  // Get hotel details by ID
  async getHotelDetails(hotelId) {
    await new Promise(resolve => setTimeout(resolve, 500))
    
    const mockHotel = {
      id: hotelId,
      name: 'The Plaza Hotel',
      location: 'New York, NY',
      rating: 4.8,
      price: 350,
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&fit=crop',
      amenities: ['Free WiFi', 'Pool', 'Spa', 'Restaurant', 'Concierge', 'Valet Parking'],
      description: 'Luxury hotel in the heart of Manhattan with stunning city views.',
      checkin: '2025-08-20',
      checkout: '2025-08-27',
      guests: '1 room, 2 adults',
      rooms: [
        { type: 'Deluxe Room', price: 350, available: true },
        { type: 'Executive Suite', price: 550, available: true },
        { type: 'Presidential Suite', price: 1200, available: false }
      ],
      priceComparison: [
        {
          website: 'Booking.com',
          price: 350,
          url: 'https://www.booking.com/hotel/us/the-plaza-new-york.html',
          logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Booking.com_logo.svg/2560px-Booking.com_logo.svg.png'
        },
        {
          website: 'Expedia',
          price: 365,
          url: 'https://www.expedia.com/New-York-Hotels-The-Plaza-Hotel.h191.hotel-information',
          logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Expedia_2012_logo.svg/2560px-Expedia_2012_logo.svg.png'
        },
        {
          website: 'Hotels.com',
          price: 340,
          url: 'https://www.hotels.com/ho123456/the-plaza-hotel-new-york/',
          logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2560px-Google_2015_logo.svg.png'
        },
        {
          website: 'TripAdvisor',
          price: 355,
          url: 'https://www.tripadvisor.com/Hotel_Review-g60763-d93302-Reviews-The_Plaza-New_York_City_New_York.html',
          logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Tripadvisor_logo.svg/2560px-Tripadvisor_logo.svg.png'
        }
      ]
    }

    return mockHotel
  },

  // Book a hotel
  async bookHotel(hotelId, bookingDetails) {
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    // Mock booking confirmation
    return {
      bookingId: `HB${Date.now()}`,
      hotelId: hotelId,
      status: 'Confirmed',
      bookingDetails: bookingDetails,
      totalAmount: 350 * 7, // price per night * number of nights
      bookingDate: new Date().toISOString()
    }
  },

  // Get price comparison for a specific hotel
  async getPriceComparison(hotelId) {
    await new Promise(resolve => setTimeout(resolve, 500))
    
    // Mock price comparison data
    const priceComparison = [
      {
        website: 'Booking.com',
        price: 350,
        url: 'https://www.booking.com/hotel/us/the-plaza-new-york.html',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Booking.com_logo.svg/2560px-Booking.com_logo.svg.png',
        rating: 4.8,
        reviews: 1247
      },
      {
        website: 'Expedia',
        price: 365,
        url: 'https://www.expedia.com/New-York-Hotels-The-Plaza-Hotel.h191.hotel-information',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Expedia_2012_logo.svg/2560px-Expedia_2012_logo.svg.png',
        rating: 4.7,
        reviews: 892
      },
      {
        website: 'Hotels.com',
        price: 340,
        url: 'https://www.hotels.com/ho123456/the-plaza-hotel-new-york/',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2560px-Google_2015_logo.svg.png',
        rating: 4.6,
        reviews: 567
      },
      {
        website: 'TripAdvisor',
        price: 355,
        url: 'https://www.tripadvisor.com/Hotel_Review-g60763-d93302-Reviews-The_Plaza-New_York_City_New_York.html',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/TripAdvisor_logo.svg/2560px-TripAdvisor_logo.svg.png',
        rating: 4.9,
        reviews: 2156
      }
    ]

    return priceComparison
  }
}
