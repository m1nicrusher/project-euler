/* File: 9.js 
 * Description: Project Euler Problem 9 - Special Pythagorean Triplet
 * Copyright (c) 2024 Stephen Zhang
 */

function specialPythagoreanTriplet(n) {
  let sumOfabc = n;
  for (let a = 3; a < n; a++) {
      for (let b = 4; b < n; b++) {
          let c = Math.sqrt(a**2 + b**2);
          if (!Number.isInteger(c)) continue;
          if (a + b + c == sumOfabc) return a * b * c;
      }
  }
  return false;
}

// Original ans
specialPythagoreanTriplet(1000);
