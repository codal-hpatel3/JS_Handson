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

// Object methods are function definitions stored as property values

const personWithMethods = {
    name: 'Bob',    
    age: 25,
    fullName: function() { // Method to greet the person
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
};
// Calling the method       
personWithMethods.fullName(); // Output: Hello, my name is Bob and I am 25 years old.

// We can also use arrow functions as methods in objects
const anotherPerson = { 
    name: 'Charlie',
    age: 28,
    greet: () => { // Arrow function as a method
        console.log(`Hi, I'm ${anotherPerson.name} and I'm ${anotherPerson.age} years old.`);
    }
};
// Calling the arrow function method
anotherPerson.greet(); // Output: Hi, I'm Charlie and I'm 28 years old.

// Objects can also contain nested objects
const student = {
    name: 'David',
    age: 22,
    address: {
        street: '123 Main St',
        city: 'Los Angeles',
        zip: '90001'
    }
};
// Accessing nested object properties
console.log(student.address.city); // Output: Los Angeles
// We can also use the `Object.keys()` method to get an array of the object's keys
const keys = Object.keys(student);  
console.log(keys); // Output: ['name', 'age', 'address']
// We can also use the `Object.values()` method to get an array of the object's values
const values = Object.values(student);
console.log(values); // Output: ['David', 22, { street: '123 Main St', city: 'Los Angeles', zip: '90001' }]
// We can also use the `Object.entries()` method to get an array of the object's key-value pairs
const entries = Object.entries(student);
console.log(entries); // Output: [['name', 'David'], ['age', 22], ['address', { street: '123 Main St', city: 'Los Angeles', zip: '90001' }]]

// Now we can use new Person() to create many new Person objects:

function Person(first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye;
}

const myFather = new Person("John", "Doe", 50, "blue");
const myMother = new Person("Sally", "Rally", 48, "green");
// We can access the properties of these objects just like we did with the `car` object
console.log(myFather.firstName); // Output: John
console.log(myMother.lastName); // Output: Rally
console.log(myFather.age); // Output: 50
console.log(myMother.eyeColor); // Output: green