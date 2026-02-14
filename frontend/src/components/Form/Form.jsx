import React, { useState, useEffect, useRef } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
// import { toast } from 'react-hot-toast'; // Removed as it was only used for blocking
import './Form.css';

const Form = ({ onGenerate, isGenerating }) => {
  const { user } = useAuth0();
  const [startPlace, setStartPlace] = useState('');
  const [destination, setDestination] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [budget, setBudget] = useState('');
  const [numPeople, setNumPeople] = useState(1);

  const startInputRef = useRef(null);
  const destInputRef = useRef(null);

  useEffect(() => {
    const googleApiKey = import.meta.env.VITE_GOOGLE_API_KEY;
    if (googleApiKey) {
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=${googleApiKey}&libraries=places`;
      script.async = true;
      script.onload = () => {
        initAutocomplete();
      };
      document.head.appendChild(script);

      return () => {
        const existingScript = document.querySelector(`script[src*="maps.googleapis.com"]`);
        if (existingScript) {
          document.head.removeChild(existingScript);
        }
      };
    }
  }, []);

  const initAutocomplete = () => {
    if (window.google && startInputRef.current && destInputRef.current) {
      const startAutocomplete = new window.google.maps.places.Autocomplete(startInputRef.current);
      const destAutocomplete = new window.google.maps.places.Autocomplete(destInputRef.current);

      startAutocomplete.addListener('place_changed', () => {
        const place = startAutocomplete.getPlace();
        setStartPlace(place.formatted_address || place.name);
      });

      destAutocomplete.addListener('place_changed', () => {
        const place = destAutocomplete.getPlace();
        setDestination(place.formatted_address || place.name);
      });
    }
  };

  function handleSubmit(e) {
    e.preventDefault();

    const start = startDate ? new Date(startDate) : null;
    const end = endDate ? new Date(endDate) : null;

    let days = 1;
    if (start && end && end >= start) {
      const msPerDay = 1000 * 60 * 60 * 24;
      days = Math.floor((end - start) / msPerDay) + 1;
    }

    // --- REMOVED BLOCKING BUDGET VALIDATION HERE --- 
    // The code that checked validateBudget() and returned is gone.

    const prompt = `Create a highly detailed, engaging, and realistic daily travel itinerary from ${startPlace} to ${destination}.
     The trip is for ${numPeople} ${numPeople === 1 ? 'person' : 'people'} with a total budget of ₹${budget}.
     The journey starts on ${startDate} and ends on ${endDate}, spanning ${days} days.

      IMPORTANT: All locations, attractions, and points of interest MUST be real-world, well-known, and easily accessible. Prioritize popular and highly-rated places.

      For each day, provide a structured plan with:
      - Specific timings (e.g., 9:00 AM, 1:00 PM, 7:00 PM) for each activity.
      - A diverse mix of activities (sightseeing, cultural experiences, relaxation, adventure, etc.).
      - Concrete dining suggestions (breakfast, lunch, dinner) including specific restaurant names or types of cuisine known in the area.
      - Estimated costs for each activity and meal (in INR, if possible, or a general cost category like "low", "medium", "high").
      - Practical travel tips or notes for each day (e.g., "wear comfortable shoes", "book tickets in advance").

      The output MUST be formatted clearly, with each day marked as "Day X: (MMM DD, dddd)". Do NOT include any introductory or concluding text outside of the itinerary itself. Focus solely on the itinerary content.`;

    onGenerate(prompt);
  }

  return (
    <form id="trip-form" onSubmit={handleSubmit}>
      <div className="profile-card">
        <div className="avatar">{user.name?.charAt(0) || 'U'}</div>
        <div>
          <h4>Welcome back!</h4>
          <p>{user.email}</p>
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="start-place">Starting Place</label>
        <input
          ref={startInputRef}
          type="text"
          id="start-place"
          className="form-input"
          placeholder="e.g., Delhi"
          required
          value={startPlace}
          onChange={(e) => setStartPlace(e.target.value)}
          disabled={isGenerating}
        />
      </div>

      <div className="form-group">
        <label htmlFor="destination">Destination</label>
        <input
          ref={destInputRef}
          type="text"
          id="destination"
          className="form-input"
          placeholder="e.g., New York"
          required
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
          disabled={isGenerating}
        />
      </div>

      <div className="form-group">
        <label htmlFor="people">Number of People</label>
        <input type="number" id="people" className="form-input" value={numPeople} min="1" required onChange={(e) => setNumPeople(e.target.value)} disabled={isGenerating} />
      </div>

      <div className="form-group">
        <label htmlFor="start-date">Trip Start Date</label>
        <div className="date-input">
          <input type="date" id="start-date" className="form-input" required value={startDate} onChange={(e) => setStartDate(e.target.value)} disabled={isGenerating} />
          <i className="far fa-calendar-alt calendar-icon"></i>
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="end-date">Trip End Date</label>
        <div className="date-input">
          <input type="date" id="end-date" className="form-input" required value={endDate} onChange={(e) => setEndDate(e.target.value)} disabled={isGenerating} />
          <i className="far fa-calendar-alt calendar-icon"></i>
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="budget">Budget (₹)</label>
        <div className="budget-input">
          <span>₹</span>
          <input
            type="number"
            id="budget"
            className="form-input"
            placeholder="e.g., 200000"
            required
            // I removed the min="1000" HTML validation so it doesn't block you at browser level either
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
            disabled={isGenerating}
          />
        </div>
        
        {/* Visual Warnings (These stay, but they don't block submission) */}
        {budget && (
          (() => {
            const budgetNum = parseInt(budget);
            if (budgetNum <= 0) {
              return (
                <p style={{ fontSize: '0.8rem', color: '#ef4444', marginTop: '0.25rem' }}>
                  ❌ Please enter a valid budget amount
                </p>
              );
            } else if (budgetNum < 1000) {
              return (
                <p style={{ fontSize: '0.8rem', color: '#ef4444', marginTop: '0.25rem' }}>
                  ❌ Budget too low for travel
                </p>
              );
            } else if (budgetNum < 5000) {
              return (
                <p style={{ fontSize: '0.8rem', color: '#f59e0b', marginTop: '0.25rem' }}>
                  ⚠️ Budget might be low for travel
                </p>
              );
            }
            return null;
          })()
        )}
      </div>

      <button type="submit" className="generate-btn" disabled={isGenerating}>
        {isGenerating ? 'Generating...' : 'Generate Itinerary'}
      </button>
    </form>
  );
};

export default Form;