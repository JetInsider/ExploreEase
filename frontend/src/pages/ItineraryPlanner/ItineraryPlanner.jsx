import React, { useState, useEffect, useRef } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
import Navbar from '../../components/Navbar/Navbar';
import Form from '../../components/Form/Form';
import FormattedOutput from '../../components/FormattedOutput/FormattedOutput';
import LoginPrompt from '../../components/Auth/LoginPrompt';
import './ItineraryPlanner.css';

const ItineraryPlanner = () => {
  const { isAuthenticated, isLoading } = useAuth0();
  const [answer, setAnswer] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const itineraryRef = useRef(null);

  useEffect(() => {
    if (answer && answer !== 'Loading...') {
      itineraryRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [answer]);

  const generate = async (prompt) => {
    setIsGenerating(true);
    setAnswer('Loading...');
    const apiKey = import.meta.env.VITE_apiKey;

    try {
      const response = await axios({
        url: `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`,
        method: 'POST',
        data: {
          contents: [
            {
              role: 'user',
              parts: [{ text: prompt }]
            }
          ]
        }
      });

      setAnswer(response.data.candidates[0].content.parts[0].text);
    } catch (error) {
      console.error('Error fetching from Gemini:', error);
      setAnswer('Something went wrong. Try again.');
    } finally {
      setIsGenerating(false);
    }
  };

  // Show loading state while checking authentication
  if (isLoading) {
    return (
      <>
        <Navbar />
        <div className="itinerary-page">
          <div className="loading-state">
            <div className="loading-spinner"></div>
            <p>Checking authentication...</p>
          </div>
        </div>
      </>
    );
  }

  // Show login prompt if not authenticated
  if (!isAuthenticated) {
    return <LoginPrompt featureName="AI Itinerary Planner" />;
  }

  // Show itinerary planner if authenticated
  return (
    <>
      <Navbar />
      <div className="itinerary-page">
        <div className="container">
          <h1><i className="fas fa-route"></i> Plan Your Journey with ExploreEase</h1>
          <p className="subtitle">Tell us your details and we'll craft the perfect itinerary</p>

          <div className="main-content">
            <div className="left-panel">
              <Form onGenerate={generate} isGenerating={isGenerating} />
            </div>

            <div className="right-panel">
              {isGenerating ? (
                <div className="loading-state">
                  <div className="loading-spinner"></div>
                  <p>Generating your perfect itinerary...</p>
                </div>
              ) : !answer || answer === 'Loading...' ? (
                <>
                  <i className="fas fa-suitcase-rolling travel-icon"></i>
                  <h3>Your Personalized Itinerary</h3>
                  <p className="placeholder-text">
                    Fill in your trip details and click <span className="highlight">"Generate Itinerary"</span><br />
                    We'll plan your perfect journey with smart recommendations.
                  </p>
                  <div className="info-text">
                    <i className="fas fa-info-circle"></i> Your itinerary will appear below this panel after you click generate!
                  </div>
                </>
              ) : null}
            </div>
          </div>

          {answer && answer !== 'Loading...' && (
            <div ref={itineraryRef} className="itinerary-section animate-on-scroll">
              <h2 className="itinerary-title">Your Personalized Itinerary</h2>
              <FormattedOutput text={answer} />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ItineraryPlanner;
