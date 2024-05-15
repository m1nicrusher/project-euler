/* File: 4.js 
 * Description: Project Euler Problem 4 - Largest Palindrome Product
 * Copyright (c) 2024 Stephen Zhang
 */

// Use string slicing to check if an integer is palindrome
function isPalindrome(n) {
  let s = n.toString();
  // Optimise complexity by only checking half of the string (against the other half)
  for (let i = 0; i < Math.ceil(s.length / 2.0); i++) {
    let revi = s.length - i - 1;
    if (s[i] != s[revi]) return false;  
  }
  return true;
}

function largestPalindromeProduct(n) {
  let max = 0;
  for (let i = 10**(n - 1); i < 10**n; i++) {
  // Optimise complexity by never allowing j to be more than i (avoiding repeted products)
    for (let j = 10**(n - 1); j <= i; j++) {
      let product = i * j;
      if (isPalindrome(product)) {
        max = product > max ? product : max;
      }
    }
  }
  return max;
}

// Original answer
largestPalindromeProduct(3);
