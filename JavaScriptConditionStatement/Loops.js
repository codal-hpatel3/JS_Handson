// Different kinds of loops in JavaScript
// 1. For Loop
// 2. While Loop
// 3. Do-While Loop
// 4. For...of Loop
// 5. For...in Loop
// 6. ForEach Loop
// 7. Nested Loops

// 1. For Loop
// Syntax:
// for (initialization; condition; increment/decrement) {
//     // code to be executed   
// }

// initialization, we declare and initialize a variable.
// condition, the loop continues as long as this condition is true.
// increment/decrement, we update the variable after each iteration.

for (let i = 0; i < 5; i++) {
    console.log("For Loop iteration: " + i); // Output: For Loop iteration: 0, 1, 2, 3, 4
}

// When let is used to declare the i variable in a loop, the i variable will only be visible within the loop.

let i = 5;
for (let i = 0; i < 10; i++) {
    console.log("For Loop iteration: " + i);
}
console.log("Value of i after loop: " + i); // Output: Value of i after loop: 10