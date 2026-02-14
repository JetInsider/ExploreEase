// src/components/FlightCard.jsx

import React from 'react';

const FlightCard = ({ offer, origin, destination, departDate }) => {

  const bookingUrl = `https://flights.booking.com/flights/search.html?from=${origin}.AIRPORT&to=${destination}.AIRPORT&depart=${departDate}&type=ONEWAY&adults=1&cabinClass=ECONOMY`;

  const formatDuration = (totalSeconds) => {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    return `${hours}h ${minutes}m`;
  };

  const formatDateTime = (dateTime) => {
    const dt = new Date(dateTime);
    return dt.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  const segment = offer.segments?.[0];
  const leg = segment?.legs?.[0];
  const carrier = leg?.carriersData?.[0];
  
  if (!segment || !leg || !carrier) return null;

  return (
    <div className="bg-white shadow-md rounded-lg !m-2 !p-2 flex items-center justify-between text-left">
      {/* Airline Info */}
      <div className="flex items-center gap-4 w-1/4">
        <img src={carrier.logo} alt={`${carrier.name} logo`} className="h-10 w-10 object-contain" />
        <span className="font-medium text-gray-800">{carrier.name}</span>
      </div>

      {/* Flight Details */}
      <div className="flex-grow flex items-center justify-center gap-4">
        <div className="text-center">
          <p className="text-xl font-bold text-gray-900">{formatDateTime(segment.departureTime)}</p>
          <p className="text-sm text-gray-600">{segment.departureAirport.code}</p>
        </div>
        <div className="!text-center !text-sm !text-gray-500 !px-4">
          <p>{formatDuration(segment.totalTime)}</p>
          <div className="!w-full !h-px !bg-gray-300 !mt-1"></div>
          {/* <p>Direct</p> */}
        </div>
        <div className="!text-center">
          <p className="!text-xl !font-bold !text-gray-900">{formatDateTime(segment.arrivalTime)}</p>
          <p className="!text-sm !text-gray-600">{segment.arrivalAirport.code}</p>
        </div>
      </div>

      {/* Price Info */}
      <div className="text-right w-1/4 flex flex-col items-end">
        <h2 className="!mb-2 !text-3.5xl font-bold text-slate-700">₹{offer.priceBreakdown.total.units}</h2>
        {/* <button 
        //Booking.com URL
        onClick={() => window.open("https://tinyurl.com/3454stes", "_blank")}
        className="!bg-black !text-white font-bold !py-2 !px-4 rounded-lg hover:bg-orange-600 transition-colors duration-200">
          Select Flight
        </button> */}
        <button
          onClick={() => window.open(bookingUrl, "_blank")}
          className="!bg-black !text-white font-bold !py-2 !px-4 rounded-lg hover:bg-orange-600 transition-colors duration-200">
          Select Flight
        </button>
      </div>
    </div>
  );
};

export default FlightCard;