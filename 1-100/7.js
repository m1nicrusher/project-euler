/* File: 7.js 
 * Description: Project Euler Problem 7 - 10001st Prime
 * Copyright (c) 2024 Stephen Zhang
 */

// Goes through all the numbers and check if
// they are prime.
// If they are, increment i, until i == n.

function isPrime(n) {
  if (n == 0 || n == 1) return false;
  for (let i = 2; i < n; i++) {
    if (n % i == 0) return false;
  }
  return true;
}

function nthPrime(n) {
  let num = 1;
  // num is i-th prime
  for (let i = 1; i <= n;) {
    if (isPrime(++num))
      i++;
  }
  return num;
}

// Original ans
nthPrime(10001);
