// JS arrays : JavaScript Array Methods
// In JavaScript, arrays are used to store multiple values in a single variable.    
// They are dynamic, meaning you can add or remove elements as needed.  
// Arrays can hold elements of any type, including numbers, strings, objects, and even other arrays.
// Commonly used array methods include:
// 1. push() - Adds one or more elements to the end of an array and returns the new length of the array.
// 2. pop() - Removes the last element from an array and returns that element.
// 3. shift() - Removes the first element from an array and returns that element.
// 4. unshift() - Adds one or more elements to the beginning of an array and returns the new length of the array.
// 5. splice() - Changes the contents of an array by removing or replacing existing elements    
// 6. slice() - Returns a shallow copy of a portion of an array into a new array object.
// 7. forEach() - Executes a provided function once for each array element.
// 8. map() - Creates a new array populated with the results of calling a provided function on every element in the calling array.  
// 9. filter() - Creates a new array with all elements that pass the test implemented by the provided function.
// 10. reduce() - Executes a reducer function on each element of the array, resulting in a single output value.
// 11. find() - Returns the value of the first element in the array that satisfies the provided testing function.
// 12. findIndex() - Returns the index of the first element in the array that satisfies the provided testing function.
// 13. sort() - Sorts the elements of an array in place and returns the sorted array.
// 14. reverse() - Reverses the elements of an array in place and returns the reversed array.
// 15. includes() - Determines whether an array includes a certain value among its entries, returning true or false as appropriate.
// 16. indexOf() - Returns the first index at which a given element can be found in the array, or -1 if it is not present.
// 17. join() - Joins all elements of an array into a string.
// 18. concat() - Merges two or more arrays into a new array.
// 19. toString() - Returns a string representation of the array.
// 20. length - Returns the number of elements in the array.
// 21. Array.delete() - Deletes an element from an array at a specified index.
// 22. Array.clear() - Clears all elements from an array.
// Example of using some of these methods:

// Slice method creates a new array containing a portion of the original array, without modifying the original array.
// slice() method does not remove any elements from the original array; it simply returns a new array containing the specified elements.

// Example:
const fruits = ["Apple", "Banana", "Cherry"];
fruits.push("Date"); // Adds "Date" to the end of the array
console.log(fruits); // Output: ["Apple", "Banana", "Cherry", "Date"]

fruits.pop(); // Removes the last element ("Date")
console.log(fruits); // Output: ["Apple", "Banana", "Cherry"]

fruits.shift(); // Removes the first element ("Apple")
console.log(fruits); // Output: ["Banana", "Cherry"]

fruits.unshift("Mango"); // Adds "Mango" to the beginning of the array
console.log(fruits); // Output: ["Mango", "Banana", "Cherry"]

fruits.splice(2, 1, "Orange"); // Replaces the element at index 2 ("Cherry") with "Orange"
console.log(fruits);   // Output: ["Mango", "Banana", "Orange"]

fruits.slice(1, 3); // Returns a new array with elements from index 1 to 2 (not including index 3)
console.log(fruits); // Output: ["Banana", "Orange"]

fruits.forEach((fruit, index) => {
    console.log(`Fruit at index ${index}: ${fruit}`); // Output: Fruit at index 0: Mango, etc.
});

const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(num => num * 2); // Creates a new array with each element doubled
console.log(doubled); // Output: [2, 4, 6, 8, 10]   

const evenNumbers = numbers.filter(num => num % 2 === 0); // Creates a new array with only even numbers
console.log(evenNumbers); // Output: [2, 4]     

const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0); // Sums all elements in the array
console.log(sum); // Output: 15 // 0 Means the initial value of the accumulator

const found = numbers.find(num => num > 3); // Finds the first number greater than 3
console.log(found); // Output: 4 // Why 5 is not returned? Because find returns the first element that satisfies the condition

const index = numbers.findIndex(num => num > 3); // Finds the index of the first number greater than 3
console.log(index); // Output: 3 // Index of the first element greater than 3

fruits.sort(); // Sorts the array in alphabetical order
console.log(fruits); // Output: ["Banana", "Mango", "Orange"]

fruits.reverse(); // Reverses the order of the array
console.log(fruits); // Output: ["Orange", "Mango", "Banana"]

fruits.includes("Mango"); // Checks if "Mango" is in the array
console.log(fruits.includes("Mango")); // Output: true

fruits.indexOf("Banana"); // Returns the index of "Banana" in the array
console.log(fruits.indexOf("Banana")); // Output: 2

fruits.join(", "); // Joins all elements into a string
console.log(fruits.join(", ")); // Output: "Orange, Mango, Banana"

fruits.concat(["Grapes", "Pineapple"]); // Merges another array into the fruits array
console.log(fruits.concat(["Grapes", "Pineapple"])); // Output: "Orange, Mango, Banana, Grapes, Pineapple"

fruits.toString(); // Returns a string representation of the array
console.log(fruits.toString()); // Output: "Orange,Mango,Banana"

//fruits.length - Returns the number of elements in the array
console.log(fruits.length); // Output: 3

// Array Concate
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const combinedArray = array1.concat(array2); // Merges array1 and array2
console.log(combinedArray); // Output: [1, 2, 3, 4, 5, 6]