# Budget Service Documentation

## Overview
The Budget Service provides comprehensive budget validation and recommendations for travel destinations based on research and average costs. It helps users understand if their budget is adequate for their chosen destination and provides money-saving tips.

## Features

### 1. Destination-Specific Budget Requirements
- **International Destinations**: Premium destinations like New York, London, Paris, Tokyo with higher budget requirements
- **Indian Destinations**: Categorized by type (Metro, Tourist, Hill Station, Spiritual, Heritage, Beach, etc.)
- **Regional Classification**: North, South, East, West, Central India categorization

### 2. Budget Validation
- **Minimum Budget Calculation**: Per-person and total budget requirements
- **Budget Warning System**: Alerts when budget is below recommended minimum
- **Severity Levels**: Warning (low budget), Info (adequate), Success (comfortable)

### 3. Budget Breakdown
- **Accommodation**: 35-40% of total budget
- **Food**: 25-30% of total budget  
- **Transportation**: 20% of total budget
- **Activities**: 10% of total budget
- **Miscellaneous**: 5% of total budget

### 4. Money-Saving Tips
- **Destination-Specific**: Tips tailored to international vs. Indian destinations
- **Budget-Conscious**: Additional tips when budget is low
- **Practical Advice**: Real-world suggestions for cost reduction

## Usage Examples

### Basic Budget Check
```javascript
import { budgetService } from './budgetService';

// Check minimum budget for New York
const budget = budgetService.getMinimumBudget('New York', 2);
console.log(budget);
// Output: { minPerPerson: 120000, minTotal: 240000, currency: 'USD', ... }
```

### Budget Warning
```javascript
// Get budget warning for low budget
const warning = budgetService.getBudgetWarning('New York', 100000, 2);
console.log(warning.warning); // "⚠️ Budget Alert: Your budget is below the recommended minimum for New York"
console.log(warning.severity); // "warning"
```

### Budget Breakdown
```javascript
// Get detailed budget breakdown
const breakdown = budgetService.getBudgetBreakdown('New York', 200000, 2);
console.log(breakdown);
// Output: { accommodation: 40000, food: 25000, transportation: 20000, ... }
```

### Money-Saving Tips
```javascript
// Get tips for budget-conscious travel
const tips = budgetService.getMoneySavingTips('New York', 100000, 2);
console.log(tips);
// Output: Array of practical money-saving suggestions
```

## Test Cases

The service includes comprehensive test cases covering:

1. **International Premium Destinations**: New York, London, Paris, Tokyo
2. **International Budget Destinations**: Bangkok, Bali, Prague
3. **Indian Metro Cities**: Mumbai, Delhi, Bangalore
4. **Indian Tourist Destinations**: Jaipur, Agra, Goa
5. **Indian Hill Stations**: Manali, Shimla, Darjeeling
6. **Indian Spiritual Destinations**: Varanasi, Rishikesh, Haridwar
7. **Edge Cases**: Unknown destinations, very low budgets, high budgets

## Budget Categories

### International Destinations
- **Premium**: $1500+ USD equivalent (New York, London, Paris, Tokyo)
- **Budget**: $800-1500 USD equivalent (Bangkok, Bali, Prague)

### Indian Destinations
- **Metro Cities**: ₹6,000-8,000 per person (Mumbai, Delhi, Bangalore)
- **Tourist Destinations**: ₹3,500-6,000 per person (Jaipur, Agra, Goa)
- **Hill Stations**: ₹4,000-5,500 per person (Manali, Shimla, Darjeeling)
- **Spiritual Destinations**: ₹3,000-3,500 per person (Varanasi, Rishikesh)
- **Heritage Sites**: ₹3,500-4,000 per person (Hampi, Khajuraho)
- **Beach Destinations**: ₹6,000 per person (Goa)

## Integration with Itinerary Planner

The budget service integrates with the itinerary planner to:

1. **Show Real-time Warnings**: As users type destination and budget
2. **Enhance AI Prompts**: Include budget context in itinerary generation
3. **Provide Visual Feedback**: Color-coded alerts and detailed breakdowns
4. **Suggest Optimizations**: Money-saving tips and budget-friendly alternatives

## Future Enhancements

- **Seasonal Adjustments**: Peak vs. off-peak pricing
- **Currency Conversion**: Real-time exchange rates
- **User Preferences**: Luxury vs. budget travel preferences
- **Historical Data**: Price trends and seasonal variations
- **Group Discounts**: Automatic calculation for larger groups

