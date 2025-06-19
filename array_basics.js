// File: array_basics.js
// Task: Create and manipulate an array.
// Requirements:
// Use console.log() to display outputs.
// Include comments explaining each step.

// Create an array called hobbies with 4 of your favorite hobbies.
let hobbies = ["football", "reading", "traveling", "trading"]
// Print the first and last hobby in the array.
console.log(hobbies[0])
console.log(hobbies[3])
// Add a new hobby to the end of the array using push().
hobbies.push("Gaming")
console.log(hobbies)
// Remove the last hobby using pop().
hobbies.pop()
console.log(hobbies)
// Print the length of the array.
console.log(hobbies.length)

// First hobby: football
// Last hobby: trading
// After adding a new hobby: ["football", "reading", "traveling", "trading", "Gaming"]
// After removing the last hobby: ["football", "reading", "traveling", "trading"]
// Number of hobbies: 4
