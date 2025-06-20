// File: object_loops.js
// Task: Work with a JavaScript object.
// Create an object called car with properties: make, model, year, and color.
// Print the model and year of the car.
// Use a for...in loop to print all properties and their values.
// Add a new property mileage to the object and update the color.
// Print the updated object.
// Requirements:
// Use console.log() for outputs.
// Include comments for each step.

// Step 1: Create an object called 'car' with properties: make, model, year, and color
let car = {
  make: "Toyota",
  model: "Corolla",
  year: 2020,
  color: "Blue"
};
//  Explanation:
// An object in JavaScript is a collection of key-value pairs (also called properties).
// make, model, year, and color are the keys (property names).
// "Toyota", "Corolla", 2020, and "Blue" are their **values`.

// Step 2: Print the model and year of the car
console.log("Model:", car.model); // Accessing and printing the model
console.log("Year:", car.year);   // Accessing and printing the year
// Explanation:
// You access a specific property of an object using dot notation: objectName.propertyName.
// Here, we print out the values for the model and year properties.

// Step 3: Use a for...in loop to print all properties and their values
console.log("All car properties:");
for (let key in car) {
  // 'key' is the property name, 'car[key]' is the value
  console.log(key + ":", car[key]);
}
//  Explanation:
// for...in is a loop used to go through all the keys (property names) in an object.
// key will be each property name (make, model, year, etc.)
// car[key] gives you the value associated with that property.
// This will print

// Step 4: Add a new property 'mileage' to the car object
car.mileage = 45000; // Adding mileage property with a value
// Explanation:
// You can add a new property to an object by simply assigning a value to it using dot notation.
// Now the object has a new key: mileage, with a value of 45000.

// Step 5: Update the color of the car
car.color = "Red"; // Changing the color from Blue to Red
//  Explanation:
// This updates the value of an existing property.
// The color was "Blue", but now it's updated to "Red".

// Step 6: Print the updated object
console.log("Updated car object:", car);
// Explanation:
// This prints the full updated object, showing all properties:
