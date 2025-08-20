// JavaScript Iteration Methods
// In JavaScript, arrays can be iterated over using various methods to perform operations on each element.
// Commonly used array iteration methods include:
// 1. forEach() - Executes a provided function once for each array element.
// 2. map() - Creates a new array populated with the results of calling a provided function on every element in the calling array.
// 3. filter() - Creates a new array with all elements that pass the test implemented by the provided function.
// 4. reduce() - Executes a reducer function on each element of the array, resulting in a single output value.
// 5. some() - Tests whether at least one element in the array passes the test implemented by the provided function.
// 6. every() - Tests whether all elements in the array pass the test implemented by the provided function.
// 7. find() - Returns the value of the first element in the array that satisfies the provided testing function.
// 8. findIndex() - Returns the index of the first element in the array that satisfies the provided testing function.
// 9. for...of - A loop that iterates over iterable objects, including arrays
// 10. from() - Creates a new array from an array-like or iterable object.
// 11. with() - Creates a new array with the same elements as the original array, but with a specified element replaced at a given index.

// Example of using some of these methods:
const numbers = [1, 2, 3, 4, 5];
numbers.forEach((num, index) => {
    console.log(`Element at index ${index}: ${num}`); // Output: Element at index 0: 1, etc.
});

const doubled = numbers.map(num => num * 2); // Creates a new array with each element doubled
console.log(doubled); // Output: [2, 4, 6, 8, 10]

const evenNumbers = numbers.filter(num => num % 2 === 0); // Creates a new array with only even numbers
console.log(evenNumbers); // Output: [2, 4]

const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0); // Sums all elements in the array
console.log(sum); // Output: 15

const hasEven = numbers.some(num => num % 2 === 0); // Checks if at least one element is even
console.log(hasEven); // Output: true

const allEven = numbers.every(num => num % 2 === 0); // Checks if all elements are even
console.log(allEven); // Output: false

// every() returns true if all elements pass the test

const numbers3 = [6, 8, 10];
let allOver18 = numbers3.every(myFunction); // Checks if all elements are greater than 18
console.log(allOver18); // Output: false

function myFunction(value) {
    return value > 18;
}

const firstEven = numbers.find(num => num % 2 === 0); // Finds the first even number
console.log(firstEven); // Output: 2

const firstEvenIndex = numbers.findIndex(num => num % 2 === 0); // Finds the index of the first even number
console.log(firstEvenIndex); // Output: 1

const iterable = [10, 20, 30];
for (const value of iterable) {
    console.log(value); // Output: 10, 20, 30
}

// for...of loop iterates over iterable objects, including arrays
const fruits = ["Apple", "Banana", "Cherry"];
for (const fruit of fruits) {
    console.log(fruit); // Output: Apple, Banana, Cherry
}   

// for...of loop can also be used with strings
const str = "Hello";
for (const char of str) {
    console.log(char); // Output: H, e, l, l, o
}

// from() creates a new array from an array-like or iterable object
const arrayLike = { 0: 'a', 1: 'b', length: 2 };
const newArray = Array.from(arrayLike); // Converts array-like object to an array
console.log(newArray); // Output: ['a', 'b']

// with() creates a new array with the same elements as the original array, but with a specified element replaced at a given index
const originalArray = [1, 2, 3, 4];
const modifiedArray = originalArray.with(1, 5); // Replaces the element at index 1 with 5
console.log(modifiedArray); // Output: [1, 5, 3, 4]
// with() does not modify the original array
console.log(originalArray); // Output: [1, 2, 3, 4]