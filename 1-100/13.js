/* File: 13.js 
 * Description: Project Euler Problem 13 - 
 * Copyright (c) 2024 Stephen Zhang
 */

// Rough idea: for calculating the first 10 digits of 100 numbers,
// using the first 12 digits of them is enough. (999... * 100 will only give
// you 2 more digits).
//
// We use an array to sum the first 12 digits of 100 numbers separately, then
// promotes the carry digits, finally read off from the most significant digit
// until there is 10 digits.

// Puts carry digits into the next digit, until the most significant digit
function calcCarry(arr) {
  for (let d = arr.length - 1; d >= 1; d--) {
    let digit = arr[d];
    let carry = Math.floor(digit / 10);
    let remainder = digit % 10;
    arr[d] = remainder;
    arr[d - 1] += carry;
  }
}

function largeSum(arr) {
  // An array of separate digits (with carry)
  let sumArr = []
  // d = digits (12 digits is enough for 100 numbers)
  for (let d = 0; d < 12; d++) {
    let digitSum = 0;
    // i = index of long numbers
    for (let i = 0; i < arr.length; i++)
      digitSum += parseInt(arr[i][d]); 

    sumArr.push(digitSum);
  }
  calcCarry(sumArr);

  // Starting from the most significant digit, calculate until there are 10 digits
  let sum = 0;
  for (let i = 0; i < 10; i++) {
    sum *= 10;
    sum += sumArr[i];
    if (sum >= 10**9)
      return sum;
  }

  return false;
}

// Only change code above this line

const testNums = [
  '37107287533902102798797998220837590246510135740250',
  '46376937677490009712648124896970078050417018260538'
];

// NOT original ans
// Original ans can be found on the freeCodeCamp relevant problem
console.log(largeSum(testNums));
