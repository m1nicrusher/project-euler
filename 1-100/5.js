/* File: 5.js 
 * Description: Project Euler Problem 5 - Smallest Multiple
 * Copyright (c) 2024 Stephen Zhang
 */

// The process is to list all numbers from 1 to n,
// Starting from the biggest to smallest, take one number at a time
// Divide all other numbers in the list by each of the prime factors
// of that number, then proceed to the next number until the list exhausts.

// Checks if n is a prime number by checking if it has 
// any factor in [2, n - 1]
function isPrime(n) {
  if (n == 0 || n == 1) return false;
  for (let i = 2; i < n; i++) {
    if (n % i == 0) return false;
  }
  return true;
}

// Returns a list of all prime factors of n
function primeFactors(n) {
  let num = n;
  let factors = [];
  // For each prime number (smallest to biggest),
  // keep dividing n until it cannot
  for (let i = 2; i < n; i++) {
    if (!isPrime(i)) continue;
    while (num % i == 0) {
      num /= i;
      factors.push(i)
    }
    // Division no longer possible 
    if (num == 1 || num < i)
      break;
  }
  // Include the remainder if there is one
  if (num != 1) factors.push(num);
  return factors;
}

function smallestMult(n) {
  let nums = [];
  for (let i = n; i >= 2; i--) nums.push(i);
  // For each numeber, biggest to smallest
  for (let i = 0; i < nums.length; i++) {
      // Find all prime factors of this number
      let pfs = primeFactors(nums[i]);
      // From the next number on
      for (let j = i + 1; j < nums.length; j++) {
          // Divide by all prime factors if possible
          for (let pi = 0; pi < pfs.length; pi++) {
              let p = pfs[pi];
              if (nums[j] % p == 0) nums[j] /= p;
          }
      }
  }
  
  // Now the product of all numbers in the array should be the ans
  let product = 1;
  for (let i = 0; i < nums.length; i++) {
      product *= nums[i];
  }
  return product;
}

// Original ans
smallestMult(20);
