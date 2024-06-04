/* File: 12.js 
 * Description: Project Euler Problem 12 - Highly Divisible Triangular Number
 * Copyright (c) 2024 Stephen Zhang
 */

// Naive enumerating method, with optimisation of finding factors
function divisibleTriangleNumber(n) {
  // i is used to find all triangle numbers t
  let i = 2;
  for (let t = 1;; t += (i++)) {
    // All numbers have at least 2 divisors
    let numDiv = 2;
    // Find the square root of the number to optimise finding number of factors
    let tRoot = Math.sqrt(t);
    // Square numbers have one less factor (repeated)
    if (tRoot % 1 == 0) numDiv--;
    for (let j = 2; j < tRoot; j++) {
      if (t % j == 0) numDiv += 2;
      if (numDiv > n) return t;
    }
  }
}

// Original ans
console.log(divisibleTriangleNumber(500));
