// Functions are fundamental building blocks in JavaScript, allowing us to encapsulate code for reuse and organization.
// They can take parameters, return values, and be defined in various ways, including function declarations, expressions, and arrow functions.
// Functions are called when invoked, executing the code within their body.

function myFunction(param1, param2) {
    // This is a simple function that takes two parameters and returns their sum.
    return param1 + param2;
}

// Example of calling the function
const result = myFunction(5, 10);
console.log(result); // Output: 15

// Why we need to use functions:
// Code reusability: Functions allow us to write code once and use it multiple times without rewriting.
// Organization: Functions help in organizing code into logical blocks, making it easier to read and maintain.
// We can use same functions with different parameters to perform similar operations on different data.


// Arrow functions are a more concise syntax for writing functions in JavaScript.
const arrowFunction = (a, b) => a + b;
// Example of calling the arrow function
const arrowResult = arrowFunction(3, 7);
console.log(arrowResult); // Output: 10