// Inheritance in JavaScript allows one class to inherit properties and methods from another class, promoting code reuse and organization.
// Commonly used inheritance features include:
// 1. Extends - A keyword used to create a subclass that inherits from a parent class.
// 2. Super - A keyword used to call the constructor of the parent class.   
// 3. Method Overriding - Redefining a method in the subclass that already exists in the parent class.
// 4. Static Methods - Methods that belong to the class itself rather than to instances of the class.

class Car {
    constructor(brand) {
        this.brand = brand; // Property for the car's brand
    }

    present() {
        return 'I have a ' + this.brand; // Method to present the car's brand
    }
}

class Model extends Car {
    constructor(brand, model) {
        super(brand); // Call the constructor of the parent class
        this.model = model; // Property for the car's model
    }

    show() {
        return this.present() + ', it is a ' + this.model; // Method to show the car's brand and model
    }
}

const myCar = new Model("Ford", "Mustang"); // Creating a new instance of the Model class
console.log(myCar.show()); // Output: "I have a Ford, it is a Mustang"

// Getters and Setters example

class Person {
    constructor(name) {
        this._name = name; // Private property for the person's name
    }

    get name() {
        return this._name; // Getter for the name property
    }

    set name(newName) {
        this._name = newName; // Setter for the name property
    }
}

const person = new Person("Alice"); // Creating a new instance of the Person class
console.log(person.name); // Output: "Alice"