/* File: 6.js 
 * Description: Project Euler Problem 6 - Sum Square Difference
 * Copyright (c) 2024 Stephen Zhang
 */

// Naive algorithm
function sumSquareDifference(n) {
  let sumOfSqr = 0;
  let sqrOfSum = 0;
  for (let i = 1; i <= n; i++) {
    sumOfSqr += i**2;
    sqrOfSum += i;
  }
  sqrOfSum **= 2;
  return sqrOfSum - sumOfSqr;
}

// Original answer
sumSquareDifference(100);
