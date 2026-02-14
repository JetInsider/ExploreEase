// Budget service for providing destination-specific budget recommendations
export const budgetService = {
  // Get minimum budget requirements for different destinations
  getMinimumBudget(destination, numPeople = 1) {
    const dest = destination.toLowerCase();

    // International destinations with minimum budgets in INR
    const internationalBudgets = {
      'new york': { minPerPerson: 120000, currency: 'USD', minUSD: 1500, category: 'Premium' },
      'london': { minPerPerson: 140000, currency: 'GBP', minGBP: 1400, category: 'Premium' },
      'paris': { minPerPerson: 130000, currency: 'EUR', minEUR: 1500, category: 'Premium' },
      'tokyo': { minPerPerson: 160000, currency: 'JPY', minJPY: 200000, category: 'Premium' },
      'singapore': { minPerPerson: 100000, currency: 'SGD', minSGD: 1200, category: 'Premium' },
      'dubai': { minPerPerson: 110000, currency: 'AED', minAED: 5000, category: 'Premium' },
      'bangkok': { minPerPerson: 70000, currency: 'THB', minTHB: 25000, category: 'Budget' },
      'bali': { minPerPerson: 60000, currency: 'IDR', minIDR: 10000000, category: 'Budget' },
      'sydney': { minPerPerson: 150000, currency: 'AUD', minAUD: 2500, category: 'Premium' },
      'toronto': { minPerPerson: 130000, currency: 'CAD', minCAD: 2000, category: 'Premium' },
      'amsterdam': { minPerPerson: 120000, currency: 'EUR', minEUR: 1400, category: 'Premium' },
      'berlin': { minPerPerson: 110000, currency: 'EUR', minEUR: 1300, category: 'Premium' },
      'rome': { minPerPerson: 120000, currency: 'EUR', minEUR: 1400, category: 'Premium' },
      'barcelona': { minPerPerson: 110000, currency: 'EUR', minEUR: 1300, category: 'Premium' },
      'prague': { minPerPerson: 90000, currency: 'CZK', minCZK: 30000, category: 'Budget' },
      'budapest': { minPerPerson: 80000, currency: 'HUF', minHUF: 400000, category: 'Budget' },
      'kuala lumpur': { minPerPerson: 80000, currency: 'MYR', minMYR: 4000, category: 'Budget' },
      'ho chi minh city': { minPerPerson: 60000, currency: 'VND', minVND: 20000000, category: 'Budget' },
      'manila': { minPerPerson: 70000, currency: 'PHP', minPHP: 50000, category: 'Budget' },
      'seoul': { minPerPerson: 120000, currency: 'KRW', minKRW: 2000000, category: 'Premium' }
    };

    // Indian destinations with minimum budgets in INR
    const indianBudgets = {
      'mumbai': { minPerPerson: 8000, category: 'Metro', region: 'West' },
      'delhi': { minPerPerson: 7000, category: 'Metro', region: 'North' },
      'bangalore': { minPerPerson: 7500, category: 'Metro', region: 'South' },
      'chennai': { minPerPerson: 6500, category: 'Metro', region: 'South' },
      'kolkata': { minPerPerson: 6000, category: 'Metro', region: 'East' },
      'hyderabad': { minPerPerson: 6500, category: 'Metro', region: 'South' },
      'pune': { minPerPerson: 6000, category: 'Tier2', region: 'West' },
      'ahmedabad': { minPerPerson: 5500, category: 'Tier2', region: 'West' },
      'jaipur': { minPerPerson: 4000, category: 'Tourist', region: 'North' },
      'udaipur': { minPerPerson: 4500, category: 'Tourist', region: 'North' },
      'jodhpur': { minPerPerson: 4000, category: 'Tourist', region: 'North' },
      'jaisalmer': { minPerPerson: 4500, category: 'Tourist', region: 'North' },
      'agra': { minPerPerson: 3500, category: 'Tourist', region: 'North' },
      'varanasi': { minPerPerson: 3000, category: 'Spiritual', region: 'North' },
      'rishikesh': { minPerPerson: 3500, category: 'Spiritual', region: 'North' },
      'haridwar': { minPerPerson: 3000, category: 'Spiritual', region: 'North' },
      'manali': { minPerPerson: 4000, category: 'Hill Station', region: 'North' },
      'shimla': { minPerPerson: 4500, category: 'Hill Station', region: 'North' },
      'darjeeling': { minPerPerson: 5000, category: 'Hill Station', region: 'East' },
      'gangtok': { minPerPerson: 5500, category: 'Hill Station', region: 'East' },
      'goa': { minPerPerson: 6000, category: 'Beach', region: 'West' },
      'kerala': { minPerPerson: 7000, category: 'Backwaters', region: 'South' },
      'munnar': { minPerPerson: 5500, category: 'Hill Station', region: 'South' },
      'alleppey': { minPerPerson: 6000, category: 'Backwaters', region: 'South' },
      'kodaikanal': { minPerPerson: 5000, category: 'Hill Station', region: 'South' },
      'ooty': { minPerPerson: 5000, category: 'Hill Station', region: 'South' },
      'coorg': { minPerPerson: 5500, category: 'Hill Station', region: 'South' },
      'mysore': { minPerPerson: 4500, category: 'Heritage', region: 'South' },
      'hampi': { minPerPerson: 4000, category: 'Heritage', region: 'South' },
      'badami': { minPerPerson: 3500, category: 'Heritage', region: 'South' },
      'ajanta': { minPerPerson: 4000, category: 'Heritage', region: 'West' },
      'ellora': { minPerPerson: 4000, category: 'Heritage', region: 'West' },
      'khajuraho': { minPerPerson: 4000, category: 'Heritage', region: 'Central' },
      'sanchi': { minPerPerson: 3500, category: 'Heritage', region: 'Central' },
      'bhopal': { minPerPerson: 4500, category: 'Tier2', region: 'Central' },
      'indore': { minPerPerson: 4500, category: 'Tier2', region: 'Central' },
      'nagpur': { minPerPerson: 4000, category: 'Tier2', region: 'Central' },
      'raipur': { minPerPerson: 4000, category: 'Tier2', region: 'Central' },
      'bhubaneswar': { minPerPerson: 4500, category: 'Tier2', region: 'East' },
      'patna': { minPerPerson: 4000, category: 'Tier2', region: 'East' },
      'ranchi': { minPerPerson: 4000, category: 'Tier2', region: 'East' },
      'guwahati': { minPerPerson: 4500, category: 'Tier2', region: 'East' },
      'imphal': { minPerPerson: 4000, category: 'Tier2', region: 'East' },
      'aizawl': { minPerPerson: 4000, category: 'Tier2', region: 'East' },
      'shillong': { minPerPerson: 4500, category: 'Hill Station', region: 'East' },
      'kohima': { minPerPerson: 4000, category: 'Tier2', region: 'East' },
      'gangtok': { minPerPerson: 5500, category: 'Hill Station', region: 'East' },
      'darjeeling': { minPerPerson: 5000, category: 'Hill Station', region: 'East' },
      'kalimpong': { minPerPerson: 4500, category: 'Hill Station', region: 'East' },
      'mirik': { minPerPerson: 4000, category: 'Hill Station', region: 'East' },
      'pelling': { minPerPerson: 4500, category: 'Hill Station', region: 'East' },
      'lachung': { minPerPerson: 5000, category: 'Hill Station', region: 'East' },
      'lachen': { minPerPerson: 5000, category: 'Hill Station', region: 'East' },
      'namchi': { minPerPerson: 4000, category: 'Hill Station', region: 'East' },
      'ravangla': { minPerPerson: 4000, category: 'Hill Station', region: 'East' },
      'yumthang': { minPerPerson: 5000, category: 'Hill Station', region: 'East' },
      'zuluk': { minPerPerson: 4500, category: 'Hill Station', region: 'East' },
      'nathula': { minPerPerson: 5000, category: 'Hill Station', region: 'East' },
      'changu': { minPerPerson: 5000, category: 'Hill Station', region: 'East' },
      'baba mandir': { minPerPerson: 5000, category: 'Hill Station', region: 'East' },
      'tsomgo lake': { minPerPerson: 5000, category: 'Hill Station', region: 'East' },
      'gurudongmar lake': { minPerPerson: 5500, category: 'Hill Station', region: 'East' },
      'yumthang valley': { minPerPerson: 5000, category: 'Hill Station', region: 'East' },
      'zero point': { minPerPerson: 5000, category: 'Hill Station', region: 'East' },
      'katao': { minPerPerson: 4500, category: 'Hill Station', region: 'East' },
      'phodong': { minPerPerson: 4000, category: 'Hill Station', region: 'East' },
      'rangdum': { minPerPerson: 4500, category: 'Hill Station', region: 'East' },
      'tashiding': { minPerPerson: 4000, category: 'Hill Station', region: 'East' },
      'rabdentse': { minPerPerson: 4000, category: 'Hill Station', region: 'East' },
      'pemayangtse': { minPerPerson: 4000, category: 'Hill Station', region: 'East' },
      'sanga choeling': { minPerPerson: 4000, category: 'Hill Station', region: 'East' },
      'tashiding monastery': { minPerPerson: 4000, category: 'Hill Station', region: 'East' },
      'rumtek monastery': { minPerPerson: 4000, category: 'Hill Station', region: 'East' },
      'enchey monastery': { minPerPerson: 4000, category: 'Hill Station', region: 'East' },
      'labrang monastery': { minPerPerson: 4000, category: 'Hill Station', region: 'East' },
      'phodong monastery': { minPerPerson: 4000, category: 'Hill Station', region: 'East' },
      'rangdum monastery': { minPerPerson: 4000, category: 'Hill Station', region: 'East' },
      'tashiding monastery': { minPerPerson: 4000, category: 'Hill Station', region: 'East' },
      'rabdentse ruins': { minPerPerson: 4000, category: 'Hill Station', region: 'East' },
      'pemayangtse monastery': { minPerPerson: 4000, category: 'Hill Station', region: 'East' },
      'sanga choeling monastery': { minPerPerson: 4000, category: 'Hill Station', region: 'East' }
    };

    // Check for international destinations first
    for (const [key, value] of Object.entries(internationalBudgets)) {
      if (dest.includes(key) || key.includes(dest)) {
        return {
          minPerPerson: value.minPerPerson,
          minTotal: value.minPerPerson * numPeople,
          currency: value.currency,
          minCurrency: value.minCurrency,
          category: value.category,
          isInternational: true
        };
      }
    }

    // Check for Indian destinations
    for (const [key, value] of Object.entries(indianBudgets)) {
      if (dest.includes(key) || key.includes(dest)) {
        return {
          minPerPerson: value.minPerPerson,
          minTotal: value.minPerPerson * numPeople,
          category: value.category,
          region: value.region,
          isInternational: false
        };
      }
    }

    // Default for unknown destinations
    return {
      minPerPerson: 5000,
      minTotal: 5000 * numPeople,
      category: 'Unknown',
      isInternational: false
    };
  },

  // Get budget warning and suggestions
  getBudgetWarning(destination, budget, numPeople) {
    const budgetData = this.getMinimumBudget(destination, numPeople);
    const budgetPerPerson = budget / numPeople;
    const isLowBudget = budgetPerPerson < budgetData.minPerPerson;

    let warning = null;
    let suggestion = null;
    let severity = 'info';

    if (isLowBudget) {
      severity = 'warning';

      if (budgetData.isInternational) {
        warning = `⚠️ Budget Alert: Your budget is below the recommended minimum for ${destination}`;
        suggestion = `For ${numPeople} people, we recommend a minimum budget of ₹${budgetData.minTotal.toLocaleString()} (₹${budgetData.minPerPerson.toLocaleString()} per person). Current budget: ₹${budgetPerPerson.toLocaleString()} per person.`;
      } else {
        warning = `⚠️ Budget Alert: Your budget is below the recommended minimum for ${destination}`;
        suggestion = `For ${numPeople} people, we recommend a minimum budget of ₹${budgetData.minTotal.toLocaleString()} (₹${budgetData.minPerPerson.toLocaleString()} per person). Current budget: ₹${budgetPerPerson.toLocaleString()} per person.`;
      }
    } else if (budgetPerPerson >= budgetData.minPerPerson * 1.5) {
      severity = 'success';
      warning = `✅ Budget Status: Your budget looks good for ${destination}`;
      suggestion = `You have a comfortable budget for your trip. Consider adding some luxury experiences!`;
    } else {
      severity = 'info';
      warning = `ℹ️ Budget Status: Your budget meets the minimum requirements for ${destination}`;
      suggestion = `Your budget is adequate for basic travel. Plan carefully to make the most of it.`;
    }

    return {
      warning,
      suggestion,
      severity,
      budgetData,
      currentPerPerson: budgetPerPerson,
      isLowBudget
    };
  },

  // Get budget breakdown for a destination
  getBudgetBreakdown(destination, budget, numPeople) {
    const budgetData = this.getMinimumBudget(destination, numPeople);
    const budgetPerPerson = budget / numPeople;

    let breakdown = {
      accommodation: 0,
      food: 0,
      transportation: 0,
      activities: 0,
      miscellaneous: 0
    };

    if (budgetData.isInternational) {
      // International destination breakdown
      breakdown.accommodation = Math.round(budgetPerPerson * 0.4);
      breakdown.food = Math.round(budgetPerPerson * 0.25);
      breakdown.transportation = Math.round(budgetPerPerson * 0.2);
      breakdown.activities = Math.round(budgetPerPerson * 0.1);
      breakdown.miscellaneous = Math.round(budgetPerPerson * 0.05);
    } else {
      // Indian destination breakdown
      breakdown.accommodation = Math.round(budgetPerPerson * 0.35);
      breakdown.food = Math.round(budgetPerPerson * 0.3);
      breakdown.transportation = Math.round(budgetPerPerson * 0.2);
      breakdown.activities = Math.round(budgetPerPerson * 0.1);
      breakdown.miscellaneous = Math.round(budgetPerPerson * 0.05);
    }

    return breakdown;
  },

  // Get money-saving tips for a destination
  getMoneySavingTips(destination, budget, numPeople) {
    const budgetData = this.getMinimumBudget(destination, numPeople);
    const budgetPerPerson = budget / numPeople;
    const isLowBudget = budgetPerPerson < budgetData.minPerPerson;

    let tips = [];

    if (isLowBudget) {
      tips.push(
        '🏨 Book budget accommodations in advance',
        '🍽️ Eat at local restaurants and street food',
        '🚌 Use public transportation instead of taxis',
        '🎫 Look for free or discounted attractions',
        '📅 Travel during off-peak seasons',
        '👥 Consider group discounts for activities'
      );
    }

    if (budgetData.isInternational) {
      tips.push(
        '💳 Use credit cards with no foreign transaction fees',
        '🏦 Exchange currency at banks, not airports',
        '📱 Use local SIM cards for data',
        '🎫 Book flights and hotels in advance',
        '🍽️ Avoid tourist trap restaurants'
      );
    } else {
      tips.push(
        '🏨 Stay in budget hotels or homestays',
        '🍽️ Try local street food and dhabas',
        '🚌 Use local buses and trains',
        '🎫 Visit free attractions and temples',
        '📅 Avoid peak tourist seasons',
        '👥 Book group tours for better rates'
      );
    }

    return tips;
  }
};

