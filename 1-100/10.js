/* File: 10.js 
 * Description: Project Euler Problem 10 - Summation of Primes
 * Copyright (c) 2024 Stephen Zhang
 */

/*
  The idea is to use "Sieve of Eratosthenes" algorithm to find all the primes
  below n and sum that list of primes.

  (Naive algorithm is too slow for n = 2M)

  The actual implementation is to first "sieve" (mark) off all the composite
  numbers and then capture the rest (not-marked, prime number) into a new list,
  then sum that list.

  The program can be further optimised into directly using the bool array to sum.
  However separating into two functions make the program more readable and robust,
  with complexity penalty of at most O(2n), or O(n + m) where m is the number of
  primes below n, which is negligible.
 */

function findPrimes(n) {
  // True means prime
  let primes = Array(n).fill(true);
  for (let i = 2; i < n; i++) {
    // Skip if is already marked as composite
    if (!primes[i]) continue;
    // Mark multiples of i as composite
    for (let c = 2 * i; c < n; c += i) {
      primes[c] = false;
    }
  }
  
  // Convert bool list into a list that consists all the primes < n
  let numbers = [];
  for (let i = 2; i < n; i++) {
    if (primes[i]) numbers.push(i);
  }
  return numbers;
}

function primeSummation(n) {
  let primes = findPrimes(n);
  let sum = 0;
  for (let i = 0; i < primes.length; i++) {
    sum += primes[i];
  }
  return sum;
}

//console.log(findPrimes(2000000));
// Original ans
console.log(primeSummation(2000000));
