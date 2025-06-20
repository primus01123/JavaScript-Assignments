// File: student_manager.js
// Task: Manage a list of students.
// Create an array of 3 student objects, each with properties: name, age, and grade.
// Use a for loop to print the name of each student.
// Use a for loop to calculate the average age of all students.
// Requirements:
// Use console.log() to display names and average age.
// Include comments explaining your code.

// Step 1: Create an array with 3 student objects
let students = [
  { name: "Alice", age: 18, grade: "A" },
  { name: "Bob", age: 20, grade: "B" },
  { name: "Charlie", age: 19, grade: "A-" }
];
// Explanation:
// We define a variable students and assign it an array [].
// Inside the array are 3 objects — one for each student.
// Each object has 3 properties:
// name: a string (like "Alice")
// age: a number (like 18)
// grade: a string (like "A")
// Think of this as a list of student records.

// Step 2: Use a for loop to print the name of each student
console.log("Student Names:");
for (let i = 0; i < students.length; i++) {
  console.log(students[i].name); // Access and print the 'name' property of each student
}
// Explanation:
// for loop goes through the array, one student at a time.
// i is the index (starts at 0, then 1, then 2).
// students[i] gets the student object at position i.
// students[i].name gets the name from that object.
// console.log() prints the name.

// Step 3: Use a for loop to calculate the average age
let totalAge = 0; // Start with a total age of 0
for (let i = 0; i < students.length; i++) {
  totalAge += students[i].age; // Add each student's age to totalAge
}
let averageAge = totalAge / students.length; // Calculate the average by dividing by the number of students

// Step 4: Print the average age
console.log("Average Age of Students:", averageAge);
