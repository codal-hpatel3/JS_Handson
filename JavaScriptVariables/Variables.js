
// Js will assign the variable automatically or var, let or const
// var, let and const

// const - These are constant values which connot be changed.

const price1 = 10;
const price2 = 20;
let total = price1 + price2;
console.log(total);

// Always use const if the value should not be changed
// Always use const if the type should not be changed
// Only use let if you can't use const

// Variables declared with let have Block Scope
// Variables declared with let must be Declared before use
// Variables declared with let cannot be Redeclared in the same scope

// Block Scope : 

{
    let h = 5;
}
// h cannot be use here.

// Global Scope :

{
  var x = 2;
}
// x CAN be used here

// Variable defined with let cannot be redeclared

let x = "Himen";
let x = 10; // Cannot be redeclared

// Variable defined with var can be redeclared

var v = "Variable";
var v = 20;

// Example : 

var s = 10;

{
    var s = 5;
}

// Here s value is 5;

// let and const have block scope.
// var have global scope.
// let and const must be declared before use


// let, redeclaring a variable in the same block is Not allowed.

var x = 1;
let y = 2;
{
    let y = 2;
   // let y = 3; // Not allowed
}

// let, redeclaring a variable in the another block is allowed.

let x = 5;

{
    let x = 6; // Allowed
}

{
    let x = 7; // Allowed
}

// const :

// Variables defined with const cannot be Redeclared
// Variables defined with const cannot be Reassigned
// Variables defined with const have Block Scope

