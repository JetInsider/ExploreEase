# 🗺️ ExploreEase - Integrated Travel Website

A beautiful, modern travel website that combines the stunning design of the original Tourest template with powerful React functionality for flight booking, hotel search, and AI-powered itinerary planning.

## ✨ Features

### 🎨 Beautiful Design
- **Modern UI/UX**: Clean, responsive design with smooth animations
- **Tourest Design System**: Consistent color scheme and typography
- **Mobile-First**: Fully responsive across all devices
- **Smooth Transitions**: Elegant hover effects and state changes

### ✈️ Flight Search
- **Smart Search**: Advanced flight search with autocomplete
- **Popular Routes**: Pre-populated popular destinations
- **Real-time Results**: Dynamic flight results display
- **Booking Ready**: Integrated booking flow

### 🏨 Hotel Search
- **Destination Search**: Find hotels in any city worldwide
- **Advanced Filters**: Date selection, guest count, room types
- **Rich Results**: Hotel images, ratings, amenities, and pricing
- **Instant Booking**: Direct booking integration

### 🤖 AI Itinerary Planner
- **Smart Planning**: AI-powered travel recommendations
- **Personalized**: Customized based on interests and budget
- **Comprehensive**: Day-by-day breakdowns with local tips
- **Export Ready**: Download and share your itineraries

### 🔐 Authentication
- **Auth0 Integration**: Secure user authentication
- **User Profiles**: Save preferences and favorites
- **Protected Features**: Secure access to premium features

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd tourest-master
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   Create a `.env` file in the root directory:
   ```env
   VITE_AUTH0_DOMAIN=your-domain.auth0.com
   VITE_AUTH0_CLIENT_ID=your-client-id
   VITE_apiKey=your-gemini-api-key
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:3000`

## 🏗️ Project Structure

```
exploreease-master/
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── Auth/           # Authentication components
│   │   ├── Form/           # Form components
│   │   ├── FormattedOutput/# Output formatting
│   │   └── Navbar/         # Navigation component
│   ├── pages/              # Page components
│   │   ├── Flights/        # Flight search pages
│   │   ├── Hotels/         # Hotel search pages
│   │   ├── Home/           # Homepage
│   │   └── ItineraryPlanner/# AI planner
│   ├── services/           # API services
│   ├── auth/               # Auth0 configuration
│   └── styles/             # Global styles
├── assets/                 # Images and static assets
├── public/                 # Public assets
└── package.json            # Dependencies and scripts
```

## 🎯 Key Components

### Home Page
- Hero section with call-to-action buttons
- Destination showcase with beautiful imagery
- Popular tours and featured content
- About section highlighting services
- Blog section for travel content

### Flight Search
- **Flight.jsx**: Main search interface
- **FlightResults.jsx**: Results display
- **flightService.js**: Flight data management

### Hotel Search
- **Hotel.jsx**: Hotel search interface
- **HotelResults.jsx**: Hotel listings
- **hotelService.js**: Hotel data management

### Itinerary Planner
- **ItineraryPlanner.jsx**: Main planner interface
- **Form.jsx**: User input form
- **FormattedOutput.jsx**: Results formatting

## 🎨 Design System

### Colors
- **Primary**: Viridian Green (`#1E6B6B`)
- **Secondary**: Oxford Blue (`#1B2A3A`)
- **Accent**: Mikado Yellow (`#F7B500`)
- **Neutral**: Light Gray (`#CCCCCC`)

### Typography
- **Headings**: Abril Fatface (serif)
- **Body**: Heebo (sans-serif)
- **Decorative**: Comforter Brush (cursive)

### Components
- **Buttons**: Primary, secondary, and outline variants
- **Cards**: Consistent card design with hover effects
- **Forms**: Clean, accessible form inputs
- **Navigation**: Responsive navbar with mobile menu

## 🔧 Configuration

### Auth0 Setup
1. Create an Auth0 application
2. Configure callback URLs
3. Set environment variables

### API Keys
- **Gemini AI**: For itinerary planning
- **Flight APIs**: For real flight data
- **Hotel APIs**: For real hotel data

## 📱 Responsive Design

- **Mobile**: Optimized for mobile devices
- **Tablet**: Responsive tablet layouts
- **Desktop**: Full-featured desktop experience
- **Touch-Friendly**: Optimized for touch interactions

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

### Deploy Options
- **Vercel**: Zero-config deployment
- **Netlify**: Easy static site deployment
- **AWS S3**: Scalable cloud hosting
- **GitHub Pages**: Free hosting for open source

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the ISC License.

## 🙏 Acknowledgments

- **Original Design**: ExploreEase template by codewithsadee
- **Icons**: Ionicons for beautiful iconography
- **Fonts**: Google Fonts for typography
- **React**: Modern UI development framework

## 📞 Support

For support and questions:
- Create an issue in the repository
- Contact the development team
- Check the documentation

---

**Happy Traveling! ✈️🌍**
