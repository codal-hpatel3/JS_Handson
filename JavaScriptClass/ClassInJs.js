// Class in JavaScript
// In JavaScript, a class is a blueprint for creating objects with shared properties and methods.
// They allow for a more structured and object-oriented approach to programming.    
// Commonly used class features include:
// 1. Constructor - A special method for initializing new objects.
// 2. Methods - Functions defined within a class that can operate on the class's properties.
// 3. Inheritance - The ability to create a new class based on an existing class, inheriting its properties and methods.
// 4. Static methods - Methods that belong to the class itself rather than to instances of the class.
// 5. Getters and Setters - Special methods for accessing and modifying properties of a class.
// Example of using some of these features:

class car {
    constructor(brand, model, year) {
        this.brand = brand; // Property for the car's brand
        this.model = model; // Property for the car's model
        this.year = year;   // Property for the car's year
    }

    displayInfo() { // Method to display car information
        return `${this.year} ${this.brand} ${this.model}`;
    }

    age() { // Method to calculate the car's age
        const currentYear = new Date().getFullYear();
        return currentYear - this.year;
    }
}

const myCar = new car("Toyota", "Corolla", 2020); // Creating a new instance of the car class
console.log(myCar.displayInfo()); // Output: "2020 Toyota Corolla"
console.log(`Car age: ${myCar.age()} years`); // Output: "Car age: 3 years" (assuming current year is 2023)
// Inheritance example

