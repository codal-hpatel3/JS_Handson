// JavaScript Array Serch Methods
// In JavaScript, arrays can be searched using various methods to find elements based on specific criteria.
// Commonly used array search methods include:
// 1. find() - Returns the value of the first element in the array that satisfies the provided testing function.
// 2. findIndex() - Returns the index of the first element in the array that satisfies the provided testing function.
// 3. includes() - Determines whether an array includes a certain value among its entries, returning true or false as appropriate.
// 4. indexOf() - Returns the first index at which a given element can be found in the array, or -1 if it is not present.
// 5. lastIndexOf() - Returns the last index at which a given element can be found in the array, or -1 if it is not present.
// 6. filter() - Creates a new array with all elements that pass the test implemented by the provided function.
// 7. findlast() - Returns the value of the last element in the array that satisfies the provided testing function.
// 8. findLastIndex() - Returns the index of the last element in the array that satisfies the provided testing function.

// Example of using some of these methods:
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const firstEven = numbers.find(num => num % 2 === 0); // Finds the first even number
console.log(firstEven); // Output: 2

const firstEvenIndex = numbers.findIndex(num => num % 2 === 0); // Finds the index of the first even number
console.log(firstEvenIndex); // Output: 1
const includesThree = numbers.includes(3); // Checks if the array includes the number 3
console.log(includesThree); // Output: true
const includesFive = numbers.includes(5); // Checks if the array includes the number 5
console.log(includesFive); // Output: true

const indexOfFive = numbers.indexOf(5); // Finds the index of the number 5
console.log(indexOfFive); // Output: 4

const lastIndexOfFive = numbers.lastIndexOf(5); // Finds the last index of the number 5
console.log(lastIndexOfFive); // Output: 4

const evenNumbers = numbers.filter(num => num % 2 === 0); // Creates a new array with all even numbers
console.log(evenNumbers); // Output: [2, 4, 6, 8, 10]   

const lastEven = numbers.findLast(num => num % 2 === 0); // Finds the last even number  
console.log(lastEven); // Output: 10

const lastEvenIndex = numbers.findLastIndex(num => num % 2 === 0); // Finds the index of the last even number
console.log(lastEvenIndex); // Output: 9

const fruits = ["Apple", "Banana", "Cherry", "Date", "Elderberry", "Fig", "Grape"];
const firstFruitWithE = fruits.find(fruit => fruit.includes('e')); // Finds the first fruit that contains the letter 'e'
console.log(firstFruitWithE); // Output: "Apple"

const firstFruitWithEIndex = fruits.findIndex(fruit => fruit.includes('e')); // Finds the index of the first fruit that contains the letter 'e'
console.log(firstFruitWithEIndex); // Output: 0

const includesBanana = fruits.includes("Banana"); // Checks if the array includes "Banana"
console.log(includesBanana); // Output: true

const indexOfCherry = fruits.indexOf("Cherry"); // Finds the index of "Cherry"
console.log(indexOfCherry); // Output: 2

const lastIndexOfFig = fruits.lastIndexOf("Fig"); // Finds the last index of "Fig"
console.log(lastIndexOfFig); // Output: 5