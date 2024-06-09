/* File: 14.js 
 * Description: Project Euler Problem 14 - Longest Collatz Sequence
 * Copyright (c) 2024 Stephen Zhang
 */

// Naive algorithm. Enumerate 1 - limit and calculate len of collatz sequence
// by calculating the whole sequence for every single one of them.

function collatz(n) {
  if (n % 2 == 0) return n / 2;
  return 3 * n + 1;
}

function longestCollatzSequence(limit) {
  let maxlen = 0;
  let maxlenStart = 0;
  for (let i = 1; i < limit; i++) {
    let n = i;
    let len = 1;
    while (n != 1) {
      n = collatz(n);
      len += 1;
    }
    if (len > maxlen) {
      maxlen = len;
      maxlenStart = i;
    }
  }
  return maxlenStart;
}

// Original ans
console.log(longestCollatzSequence(1000000));
