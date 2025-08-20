// JavaScript Array Sort Methods
// In JavaScript, arrays can be sorted using the sort() method.
// The sort() method sorts the elements of an array in place and returns the sorted array.
// By default, the sort() method sorts the elements as strings in ascending order.
// To sort numbers or other types, a compare function can be provided.
// Commonly used array sort methods include:
// 1. sort() - Sorts the elements of an array in place and returns the sorted array.
// 2. reverse() - Reverses the elements of an array in place and returns the reversed array.
// 3. toSorted() - Returns a new array with the elements sorted, without modifying the original array.
// 4. toReversed() - Returns a new array with the elements reversed, without modifying the original array.
// Example of using some of these methods:

const numbers = [5, 3, 8, 1, 2];
const sortedNumbers = numbers.sort((a, b) => a - b); // Sorts the numbers in ascending order
console.log(sortedNumbers); // Output: [1, 2, 3, 5, 8]

const fruits = ["Banana", "Apple", "Cherry", "Date"];
const sortedFruits = fruits.sort(); // Sorts the fruits in alphabetical order
console.log(sortedFruits); // Output: ["Apple", "Banana", "Cherry", "Date"]

const reversedNumbers = numbers.reverse(); // Reverses the order of the numbers
console.log(reversedNumbers); // Output: [8, 5, 3, 2, 1]

const reversedFruits = fruits.reverse(); // Reverses the order of the fruits
console.log(reversedFruits); // Output: ["Date", "Cherry", "Banana", "Apple"]

const sortedNumbersCopy = numbers.toSorted((a, b) => a - b); // Returns a new sorted array without modifying the original
console.log(sortedNumbersCopy); // Output: [1, 2, 3, 5, 8]

const reversedNumbersCopy = fruits.toReversed(); // Returns a new reversed array without modifying the original
console.log(reversedNumbersCopy); // Output: ["Apple", "Banana", "Cherry", "Date"]

// Sorted the Numeric in descending order
const sortedNumbersDesc = numbers.sort((a, b) => b - a); // Sorts the numbers in descending order
console.log(sortedNumbersDesc); // Output: [8, 5, 3, 2, 1]