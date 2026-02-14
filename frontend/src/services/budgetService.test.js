// Test cases for budget service functionality
import { budgetService } from './budgetService';

// Test Case 1: New York (International Premium Destination)
console.log('=== Test Case 1: New York ===');
const nyBudget = budgetService.getMinimumBudget('New York', 2);
console.log('Minimum Budget for 2 people:', nyBudget);
console.log('Budget Warning:', budgetService.getBudgetWarning('New York', 200000, 2));
console.log('Budget Breakdown:', budgetService.getBudgetBreakdown('New York', 200000, 2));
console.log('Money Saving Tips:', budgetService.getMoneySavingTips('New York', 200000, 2));

// Test Case 2: Low Budget for New York (Warning Case)
console.log('\n=== Test Case 2: Low Budget for New York ===');
const nyLowBudget = budgetService.getBudgetWarning('New York', 100000, 2);
console.log('Budget Warning (Low Budget):', nyLowBudget);
console.log('Money Saving Tips:', budgetService.getMoneySavingTips('New York', 100000, 2));

// Test Case 3: Mumbai (Indian Metro City)
console.log('\n=== Test Case 3: Mumbai ===');
const mumbaiBudget = budgetService.getMinimumBudget('Mumbai', 4);
console.log('Minimum Budget for 4 people:', mumbaiBudget);
console.log('Budget Warning:', budgetService.getBudgetWarning('Mumbai', 40000, 4));
console.log('Budget Breakdown:', budgetService.getBudgetBreakdown('Mumbai', 40000, 4));

// Test Case 4: Low Budget for Mumbai (Warning Case)
console.log('\n=== Test Case 4: Low Budget for Mumbai ===');
const mumbaiLowBudget = budgetService.getBudgetWarning('Mumbai', 20000, 4);
console.log('Budget Warning (Low Budget):', mumbaiLowBudget);
console.log('Money Saving Tips:', budgetService.getMoneySavingTips('Mumbai', 20000, 4));

// Test Case 5: Rishikesh (Budget-Friendly Indian Destination)
console.log('\n=== Test Case 5: Rishikesh ===');
const rishikeshBudget = budgetService.getMinimumBudget('Rishikesh', 6);
console.log('Minimum Budget for 6 people:', rishikeshBudget);
console.log('Budget Warning:', budgetService.getBudgetWarning('Rishikesh', 25000, 6));
console.log('Budget Breakdown:', budgetService.getBudgetBreakdown('Rishikesh', 25000, 6));

// Test Case 6: London (International Premium Destination)
console.log('\n=== Test Case 6: London ===');
const londonBudget = budgetService.getMinimumBudget('London', 1);
console.log('Minimum Budget for 1 person:', londonBudget);
console.log('Budget Warning:', budgetService.getBudgetWarning('London', 150000, 1));
console.log('Budget Breakdown:', budgetService.getBudgetBreakdown('London', 150000, 1));

// Test Case 7: Goa (Popular Indian Tourist Destination)
console.log('\n=== Test Case 7: Goa ===');
const goaBudget = budgetService.getMinimumBudget('Goa', 3);
console.log('Minimum Budget for 3 people:', goaBudget);
console.log('Budget Warning:', budgetService.getBudgetWarning('Goa', 25000, 3));
console.log('Budget Breakdown:', budgetService.getBudgetBreakdown('Goa', 25000, 3));

// Test Case 8: Unknown Destination (Default Case)
console.log('\n=== Test Case 8: Unknown Destination ===');
const unknownBudget = budgetService.getMinimumBudget('Unknown City', 2);
console.log('Minimum Budget for unknown destination:', unknownBudget);
console.log('Budget Warning:', budgetService.getBudgetWarning('Unknown City', 15000, 2));

// Test Case 9: Bangkok (International Budget Destination)
console.log('\n=== Test Case 9: Bangkok ===');
const bangkokBudget = budgetService.getMinimumBudget('Bangkok', 2);
console.log('Minimum Budget for 2 people:', bangkokBudget);
console.log('Budget Warning:', budgetService.getBudgetWarning('Bangkok', 80000, 2));
console.log('Budget Breakdown:', budgetService.getBudgetBreakdown('Bangkok', 80000, 2));

// Test Case 10: High Budget Case (Success)
console.log('\n=== Test Case 10: High Budget Case ===');
const highBudget = budgetService.getBudgetWarning('New York', 500000, 2);
console.log('Budget Warning (High Budget):', highBudget);
console.log('Budget Breakdown:', budgetService.getBudgetBreakdown('New York', 500000, 2));

export const testBudgetService = () => {
  console.log('Budget Service Test Cases Completed!');
};

