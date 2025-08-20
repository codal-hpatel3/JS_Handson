// Different kinds of loops in JavaScript
// 1. For Loop
// 2. While Loop
// 3. Do-While Loop
// 4. For...of Loop
// 5. For...in Loop
// 6. ForEach Loop
// 7. Nested Loops
// 8. Break and Continue Statements

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

// 2. While Loop

// A while loop executes a block of code as long as a specified condition is true.
// It checks the condition before executing the block of code, which means if the condition is false
// at the start, the code inside the loop will not execute at all.

// Syntax:
// while (condition) {  
//     // code to be executed
// }    

// Example:
let j =0 ;
while (j < 5) { 
    console.log("While Loop iteration: " + j); // Output: While Loop iteration: 0, 1, 2, 3, 4
    j++;
}   

// 3. Do-While Loop

// A do-while loop is similar to a while loop, but it guarantees that the block of code will be executed at least once.
// The condition is checked after the code block has been executed, so even if the condition is false initially,
// the code inside the loop will run once.
// Syntax:

// do {
//     // code to be executed   
// } while (condition);

let k = 0;
do {    
    console.log("Do-While Loop iteration: " + k); // Output: Do-While Loop iteration: 0, 1, 2, 3, 4
    k++;
} while (k < 5);

// 4. For...of Loop
// The for...of loop is used to iterate over iterable objects like arrays, strings, maps, sets, etc.
// It provides a simple way to loop through the values of an iterable without needing to access the index.
// Syntax:
// for (const element of iterable) {    
//     // code to be executed
// }

const array = [10, 20, 30, 40, 50, "Codal"];
for (const value of array) {
    console.log("For...of Loop value: " + value); // Output: For...of Loop value: 10, 20, 30, 40, 50
}

// Iterating maps and Sets with for...of loop

// Maps are collections of key-value pairs, and you can iterate over them using the for...of loop.
const map = new Map([
    ["Selenium", "UI Automation"],
    ["Rest Assured", "API Automation"],
    ["Jmeter", "Perfromance Testing"],
    ["Appium", "Mobile Automation"],
]);

for (const [key, value] of map) {
    console.log(`Map entry: ${key} = ${value}`); // Output: Map entry: key1 = value1, etc.
}

// Sets are collections of unique values, and you can also iterate over them using the for...of loop.
const set = new Set([1, 2, 3, 4, 5]);
for (const value of set) {
    console.log("Set value: " + value); // Output: Set value: 1, 2, 3, 4, 5
}

// 5. For...in Loop
// The for...in loop is used to iterate over the enumerable properties of an object.
// It is not recommended for arrays, as it iterates over all enumerable properties, including those inherited from the prototype chain.
// Syntax:  
// for (const key in object) {
//     // code to be executed   
// }

const person = {
    name: "John",       
    age: 30,
    city: "New York"
};

for (const key in person) {
    console.log(`${key}: ${person[key]}`); // Output: name: John, age: 30, city: New York
}

// 6. ForEach Loop
// The forEach loop is a method available on arrays that allows you to execute a function for each element in the array.
// It is a more functional approach to iterating over arrays compared to traditional loops. 

// Syntax:
// array.forEach((element, index) => {
//     // code to be executed
// });

const numbers = [1, 2, 3, 4, 5, "Codal"];
numbers.forEach((num, index) => {
    console.log(`ForEach Loop index: ${index}, value: ${num}`); // Output: ForEach Loop index: 0, value: 1, etc.
});

// 7. Nested Loops
// Nested loops are loops inside another loop. They can be used to iterate over multi-dimensional arrays or perform complex iterations.
// Syntax:
// for (let i = 0; i < outerLimit; i++) {
//     for (let j = 0; j < innerLimit; j++) {   
//         // code to be executed
//     }
// }

const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

for (let i = 0; i < matrix.length; i++) {
    console.log(matrix[i]); // Output: [1, 2, 3], [4, 5, 6], [7, 8, 9]
    for (let j = 0; j < matrix[i].length; j++) {
        console.log(`Matrix[${i}][${j}] = ${matrix[i][j]}`); // Output: Matrix[0][0] = 1, etc.
    }
}

// Nested loops can also be used with other types of loops, such as while or do-while loops.


// 8. Break and Continue Statements
// The break statement is used to exit a loop prematurely, while the continue statement is used to skip the current iteration and move to the next one.

// Syntax for break:
// break;

// Syntax for continue:
// continue;

for (let l = 0; l < 10; l++) {
    if (l === 5) {
        console.log("Breaking the loop at l = " + l); // Output: Breaking the loop at l = 5
        break; // Exits the loop when l is 5
    }
    console.log("Loop iteration: " + l); // Output: Loop iteration: 0, 1, 2, 3, 4
}

for (let m = 0; m < 10; m++) {
    if (m === 5) {
        console.log("Skipping iteration at m = " + m); // Output: Skipping iteration at m = 5
        continue; // Skips the current iteration when m is 5
    }
    console.log("Loop iteration: " + m); // Output: Loop iteration: 0, 1, 2, 3, 4, 6, 7, 8, 9
}