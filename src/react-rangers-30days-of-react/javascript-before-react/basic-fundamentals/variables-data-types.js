// Variables
// declaration and initialization
var name = "John Doe"; // Using var(older method, function-scoped)
let age = 34; // Using let(introduced in ES6, blocked-scoped)
const pi = 3.1459; // Using const(introduced in ES6, blocked-scoped and its value can't be reassigned)

// Data Types
// Primitive Data Types
let str = "Hello, World!"; // String
let integer = 10; // Number: Represents both integers and floating-point numbers
let floatingPoint = 10.5;
let isTrue = true; // Boolean
let isFalse = false;
let something; // Undefined: Represents a variable that has been declared but not assigned a value yet
let emptyValue = null; // Null: Represents an intentional absence of value. It's a value you can assign to a variable to signify 'no value'.
const uniqueSymbol = Symbol("description"); // Symbol(ES6): Represents a unique value that's not equal to any other value.
const bigNumber = 1234567890123456789012345678901234567890n; // BigInt: Represents large integers that can't be represented by the Number type.
// Non-primitive(Reference) Data Types
// Object: Used to store collections of data and more complex entities.
let person = {
  name: "John",
  age: 30,
};
let colors = ["red", "green", "blue"]; // Array: A type of object used to store multiple values in a single variable.
// Function: A block of code designed to perform a particular task. In JavaScript, functions are objects.
function greet() {
  console.log("Hello, World!");
}

//  type of a variable can be achieved using the typeof operator
console.log(typeof "Hello"); // "string"
console.log(typeof 10); // "number"
console.log(typeof true); // "boolean"
