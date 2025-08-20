// Static Keyword in JavaScript

// The static keyword in JavaScript is used to define static methods and properties within a class.
// Static methods and properties are called on the class itself, rather than on instances of the class.
// They are often used for utility functions or to maintain state that is shared across all instances of the class.
// Commonly used static features include:
// 1. Static Methods - Methods that can be called on the class itself, not on instances.
// 2. Static Properties - Properties that are shared across all instances of the class.
// 3. Static Getters and Setters - Special methods for accessing and modifying static properties.
// Example of using static features:

class MathUtils {
    static add(a, b) {
        return a + b; // Static method to add two numbers
    }

    static subtract(a, b) {
        return a - b; // Static method to subtract two numbers
    }

    static multiply(a, b) {
        return a * b; // Static method to multiply two numbers
    }

    static divide(a, b) {
        if (b === 0) {
            throw new Error("Cannot divide by zero"); // Error handling for division by zero
        }
        return a / b; // Static method to divide two numbers
    }
}

// Example usage of static methods:
console.log(MathUtils.add(5, 3)); // Output: 8
console.log(MathUtils.subtract(10, 4)); // Output: 6
console.log(MathUtils.multiply(2, 3)); // Output: 6
console.log(MathUtils.divide(12, 4)); // Output: 3