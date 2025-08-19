// In JavaScript we have following types of conditions:
// 1. If statement  
// 2. If-else statement
// 3. If-else if statement  
// 4. Switch statement

// If Statement

// Sytax:
// if (condition) {
//     // code to be executed if condition is true
// }

const age = 18; 
if (age >= 18) {
    console.log("You are an adult."); // Output: You are an adult.
}

// If-Else Statement

// Syntax:
// if (condition) {
//     // code to be executed if condition is true
// } else {
//     // code to be executed if condition is false
// }

const score = 75;   
if (score >= 50) {
    console.log("You passed the exam."); // Output: You passed the exam.
}   else {
    console.log("You failed the exam.");
}

// If-Else If Statement
// Syntax:
// if (condition1) {    
//     // code to be executed if condition1 is true
// } else if (condition2) {
//     // code to be executed if condition2 is true
// } else {
//     // code to be executed if both conditions are false
// }

const temperature = 30;
if (temperature > 30) {
    console.log("It's hot outside."); // Output: It's hot outside.
}  else if (temperature < 40) {
    console.log("It's cold outside.");
}  else {
    console.log("The weather is pleasant."); // Output: The weather is pleasant.
}