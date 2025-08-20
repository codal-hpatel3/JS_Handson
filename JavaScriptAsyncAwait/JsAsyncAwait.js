// JavaScript Async/Await Example
// This code demonstrates the use of async/await in JavaScript to handle asynchronous operations.   
// Async/await is a syntax that allows you to write asynchronous code in a more synchronous style, making it easier to read and maintain.
// It is built on top of Promises and provides a way to work with asynchronous code without the need for chaining `.then()` methods.

// Example of using async/await:

// Why we need async/await?
// JavaScript is single-threaded and executes tasks asynchronously (using the event loop).
// Before async/await, we had callbacks and Promises to handle asynchronous operations, which could lead to "callback hell" or complex Promise chains.
// Async/await simplifies this by allowing you to write asynchronous code that looks synchronous, making it easier to understand and manage.

// Example of callback hell with console.log:
function getUserData(callback) {
    setTimeout(() => {
        callback({ id: 1, name: "Himen" });
    }, 2000);
}

// Using callback
getUserData((user) => {
    console.log("Callback:", user);
});

// Example of using Promises with console.log:

function getUserData_1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({ id: 1, name: "Himen" });
        }, 2000);
    });
}

// Using promise
getUserData_1()
    .then(user => {
        console.log("Promise:", user);
    })
    .catch(error => {
        console.error("Error:", error);
    });


// Async and await example with console.log:

async function myFunction() {
    return "Hello";
}

// Is the same as :

function myFunction_1() {
    return new Promise((resolve) => {
        resolve("Hello");
    });
}