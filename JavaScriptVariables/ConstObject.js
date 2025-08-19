// Constant Object.

const car = {
    brand: 'Toyota',
    model: 'Camry',
    year: 2020 };

// We can change the properties of a constant object, but we cannot reassign it to a new object.
car.brand = 'Honda'; // This is allowed, modifying the property of the object   
car.owner = 'John'; // This is also allowed, adding a new property to the object
console.log(car); // Output: { brand: 'Honda', model: 'Camry', year: 2020, owner: 'John' }

// const car = { brand: 'Ford', model: 'Mustang' }; // This will throw an error as we cannot reassign a constant object.