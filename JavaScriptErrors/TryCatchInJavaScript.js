// Try and catch in JavaScript
// The try...catch statement allows you to test a block of code for errors.
// If an error occurs in the try block, control is passed to the catch block.

// Syntax:
// try {
//     // code to be executed
// } catch (error) {
//     // code to handle the error
// }

// Example:
try {
    let result = riskyFunction(); // Assume this function might throw an error
    console.log("Result: " + result);
} catch (error) {
    console.error("An error occurred: " + error.message);
}
// The catch block can access the error object, which contains information about the error that occurred.

try {
    // This will throw a ReferenceError because 'undeclaredVariable' is not defined
    console.log(undeclaredVariable);
} catch (error) {
    console.log("Easy Example Error: " + error.message);
}
