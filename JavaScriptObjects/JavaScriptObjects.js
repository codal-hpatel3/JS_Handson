// JavaScript Objects are collections of properties, which can include both data and functions.
// An Object is variable that can hold multiple values in the form of key-value pairs.
// Objects are mutable, meaning we can change their properties and methods after they are created.
// They are defined using curly braces `{}` and can be accessed using dot notation or bracket notation.
// Objects are collections of Key-Value pairs, where keys are strings (or Symbols) and values can be of any type, including other objects or functions.

// Example of a simple JavaScript object

const car = { brand : "Toyota", Model : "Camry", year : 2020 };

// Accessing properties of an object
console.log(car.brand); // Output: Toyota
console.log(car['Model']); // Output: Camry
// Adding a new property to an object
car.owner = 'John'; // This is allowed, adding a new property to the object 
console.log(car); // Output: { brand: 'Toyota', Model: 'Camry', year: 2020, owner: 'John' }

// We can also create blank objects and add properties later
const person = {}; // Creating an empty object
person.name = 'Alice'; // Adding a property
person.age = 30; // Adding another property
person['city'] = 'New York'; // Adding a property using bracket notation  
console.log(person); // Output: { name: 'Alice', age: 30 }

// We can also use the `Object` constructor to create an object
const anotherCar = new Object();  
anotherCar.make = 'Honda'; // Adding properties to the object
anotherCar.model = 'Civic';
anotherCar.year = 2021; // Adding another property
anotherCar['color'] = 'Blue'; // Adding a property using bracket notation
console.log(anotherCar); // Output: { make: 'Honda', model: 'Civic', year: 2021 }