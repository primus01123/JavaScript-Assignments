// File: array_looping.js
// Task: Process an array of numbers.
// Use a for loop to calculate the sum of all numbers in the array.
// Use a for loop to find the largest number in the array.
// Requirements:
// Use console.log() to display the sum and largest number.
// Include comments explaining your logic

// Create an array of 5 numbers
let numbers = [3, 7, 2, 9, 1];

// Initialize a variable to store the sum
let sum = 0;

// Use a for loop to calculate the sum of all numbers in the array
for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i]; // Add each number to the sum
}

// Display the sum
console.log("Sum of numbers:", sum);

// Initialize a variable to store the largest number, start with the first element
let largest = numbers[0];

// Use a for loop to find the largest number in the array
for (let i = 1; i < numbers.length; i++) {
  if (numbers[i] > largest) {
    largest = numbers[i]; // Update largest if a bigger number is found
  }
}

// Display the largest number
console.log("Largest number:", largest);

