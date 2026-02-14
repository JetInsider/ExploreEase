// frontend/src/components/HotelCard.jsx
import React from 'react';
import { StarIcon } from '@heroicons/react/24/solid';

const HotelCard = ({ hotel, searchParams }) => {
  const property = hotel.property;
  const hotelId = hotel.hotel_id || property.id;
  
  const name = property.name;
  const photo = property.photoUrls?.[0] || '';
  const rating = property.reviewScore || 0;
  const reviewWord = property.reviewScoreWord || '';
  const reviewCount = property.reviewCount || 0;
  const price = property.priceBreakdown?.grossPrice?.value;
  const currency = property.priceBreakdown?.grossPrice?.currency || 'INR';
  const location = property.wishlistName || 'City Center';
  
  // GET THE STAR RATING (defaults to 0 if missing)
  const stars = property.propertyClass || 0;
  
  const accessibilityLabel = hotel.accessibilityLabel || "";
  const { checkInDate, checkOutDate, adults } = searchParams || {};

  const bookingUrl = `https://www.booking.com/searchresults.html?dest_id=${hotelId}&dest_type=hotel&checkin=${checkInDate}&checkout=${checkOutDate}&group_adults=${adults}&no_rooms=1`;

  return (
    <div className=" !ml-auto !mr-auto !max-w-350 bg-white shadow-md rounded-xl mb-6 overflow-hidden grid grid-cols-1 md:grid-cols-3 transition-all duration-300 hover:shadow-lg hover:scale-[1.01]">
      <img 
        src={photo} 
        alt={name} 
        className="h-64 md:h-full w-full object-cover" 
      />

      <div className="col-span-2 !p-5 flex flex-col justify-between">
        <div>
          <div className="flex justify-between items-start">
            <div>
              {/* NEW: Star Rating Display */}
              {stars > 0 && (
                <div className="flex mb-1">
                  {[...Array(stars)].map((_, i) => (
                    <StarIcon key={i} className="h-6 w-6 text-yellow-400" />
                  ))}
                </div>
              )}
              
              <h3 className="text-2.5xl font-bold text-gray-900 mb-1">{name}</h3>
              <p className="text-lg text-gray-500 flex items-center">
                📍 {location}
              </p>
            </div>
            
            {rating > 0 && (
              <div className="flex flex-col items-end">
                <div className=" bg-blue-900 text-white p-2 rounded-lg text-center min-w-[50px]">
                  <p className="font-bold text-lg">{rating}</p>
                </div>
                <p className="text-lg text-gray-500 mt-1 text-right">{reviewCount.toLocaleString()} reviews</p>
              </div>
            )}
          </div>

          {reviewWord && (
             <p className="text-lg font-medium text-gray-700 mt-2">{reviewWord}</p>
          )}
          
          <p className="text-sm text-gray-400 mt-2 line-clamp-2">{accessibilityLabel}</p>
        </div>

        <div className="flex justify-between items-end mt-4 pt-4 border-t border-gray-100">
          <div>
            {price ? (
              <>
                <p className="text-sm text-gray-500">per night</p>
                <p className="text-2xl font-bold text-slate-800">
                  {Math.round(price).toLocaleString()} <span className="text-sm font-normal">{currency}</span>
                </p>
                <p className="text-xl text-gray-500">+ taxes and charges</p>
              </>
            ) : (
              <p className="text-lg font-bold text-slate-700">Price N/A</p>
            )}
          </div>
          
          <a 
            href={bookingUrl}
            target="_blank" 
            rel="noopener noreferrer"
            className="!py-2 !px-6 !bg-blue-800 !text-white !font-bold rounded-md hover:!bg-blue-900 !transition-colors !duration-200 disabled:!bg-gray-400 no-underline flex items-center justify-center"
          >
            View Availability
          </a>
        </div>
      </div>
    </div>
  );
};

export default HotelCard;