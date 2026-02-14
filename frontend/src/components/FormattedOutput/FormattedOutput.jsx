import React from 'react';
import './FormattedOutput.css';
import html2pdf from 'html2pdf.js';

const FormattedOutput = ({ text }) => {
  if (!text) return null;

  // Helper to remove markdown symbols (*, **, etc.)
  const cleanText = (str) => {
    return str.replace(/\*/g, '').trim();
  };

  const parseItinerary = (text) => {
    const days = [];
    const dayRegex = /Day\s+(\d+):\s*(.*?)(?=Day\s+\d+:|$)/gs;
    let match;
    
    while ((match = dayRegex.exec(text)) !== null) {
      const dayNumber = parseInt(match[1]);
      const dayContent = match[2].trim();
      
      if (dayContent) {
        const lines = dayContent.split('\n').filter(line => line.trim() !== '');
        days.push({
          dayNumber,
          // Clean the title immediately to remove trailing ** seen in screenshot
          title: cleanText(lines[0]) || '',
          activities: lines.slice(1)
        });
      }
    }
    
    return days;
  };

  const itineraryDays = parseItinerary(text);

  const handleDownloadPDF = () => {
    const contentElement = document.getElementById('itinerary-content');
    
    const options = {
      margin: 10,
      filename: 'travel-itinerary.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };
    
    html2pdf().from(contentElement).set(options).save();
  };

  const formatActivity = (activity) => {
    // 1. Extract Costs and Tips first
    const costMatch = activity.match(/\(Cost:\s*([^)]+)\)/i);
    const tipMatch = activity.match(/\(Tip:\s*([^)]+)\)/i);
    
    // 2. Updated Regex: Allows for leading bullets (* or -) and spaces before the time
    // Looks for: optional space/bullet -> optional bold -> Time -> optional bold -> optional colon
    const timeMatch = activity.match(/^[\s*-]*(\*\*?[\d:]+\s*(?:AM|PM)\*\*?:?)/i);

    if (timeMatch) {
      // Clean up the time string (remove * and :)
      const rawTime = timeMatch[1];
      const time = cleanText(rawTime).replace(/:$/, ''); 

      // Remove the time part, Cost part, and Tip part from the main description
      let description = activity.replace(timeMatch[0], '');
      if (costMatch) description = description.replace(costMatch[0], '');
      if (tipMatch) description = description.replace(tipMatch[0], '');
      
      // Clean up any remaining Markdown artifacts from description
      description = cleanText(description);
      // Remove leading hyphens or colons that might remain after splitting
      description = description.replace(/^[:\-\s]+/, '');

      return (
        <div className="activity-item" key={activity}>
          <div className="activity-time">{time}</div>
          <div className="activity-content">
            <div className="activity-description">{description}</div>
            {costMatch && (
              <div className="activity-cost">
                <i className="fas fa-coins"></i> {costMatch[1]}
              </div>
            )}
            {tipMatch && (
              <div className="activity-tip">
                <i className="fas fa-lightbulb"></i> {tipMatch[1]}
              </div>
            )}
          </div>
        </div>
      );
    }
    
    // Fallback: If no time is found, just clean the text and display
    return <p key={activity}>{cleanText(activity)}</p>;
  };

  return (
    <div className="formatted-output">
      <div id="itinerary-content">
        <div className="note">
          <i className="fas fa-info-circle"></i>
          <span>Note: This itinerary is a suggestion. Prices and availability may vary. Please book in advance to secure the best deals.</span>
        </div>
        
        {itineraryDays.map((day) => (
          <div className="day-card" key={day.dayNumber}>
            <div className="day-header">
              <i className="fas fa-calendar-day"></i>
              <span>Day {day.dayNumber}: {day.title}</span>
            </div>
            <div className="day-content">
              {day.activities.map((activity, index) => (
                <div key={index}>
                  {formatActivity(activity)}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      
      <button 
        className="download-pdf-btn" 
        onClick={handleDownloadPDF}
      >
        <i className="fas fa-download"></i>
        Download as PDF
      </button>
    </div>
  );
};

export default FormattedOutput;