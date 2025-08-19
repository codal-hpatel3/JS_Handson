// We can change the contents of a constant array, but we cannot reassign it to a new array.

const cars = ['Toyota', 'Honda', 'Ford'];
cars[0] = 'Tesla'; // This is allowed, modifying the contents of the array
cars.push('Chevrolet'); // This is also allowed, adding a new element to the array
console.log(cars); // Output: ['Tesla', 'Honda', 'Ford']

// cars = ["Toyota", "Volvo", "Audi"];  // Thi will throw an error as we cannot reassign a constant array.
