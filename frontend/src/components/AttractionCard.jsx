import React from 'react';

const AttractionCard = ({ attraction }) => {
  const { name, primaryPhoto, shortDescription, representativePrice, reviewsStats } = attraction;

  const price = representativePrice?.chargeAmount || 'N/A';
  const currency = representativePrice?.currency || '';
  const rating = reviewsStats?.combinedNumericStats?.average || 0;
  const reviewsCount = reviewsStats?.allReviewsCount || 0;

  return (
    <div className="bg-white max-w-250 shadow-md !m-5 !p-5 rounded-lg mb-4 flex text-left overflow-hidden">
      <img 
        src={primaryPhoto?.small} 
        alt={name} 
        className="w-1/3 h-48 object-cover"
      />
      <div className="p-5 flex flex-col justify-between flex-grow">
        <div className='!p-5 !pt-0'>
          <h3 className="text-xl font-bold text-gray-900">{name}</h3>
          <p className="text-sm text-gray-600 mt-1 h-50">{shortDescription}</p>
          {rating > 0 && (
            <div className="flex items-center mt-2">
              <span className="bg-blue-800 text-white text-sm font-bold px-2 py-1 rounded">
                {rating.toFixed(1)}
              </span>
              <span className="ml-2 text-sm text-gray-600">({reviewsCount} reviews)</span>
            </div>
          )}
        </div>
        <div className="text-right mt-4">
          <p className="text-lg font-bold text-slate-700">from ₹{Math.round(price)}</p>
          <button className="mt-2 bg-orange-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-orange-600 transition-colors duration-200">
            See Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default AttractionCard;