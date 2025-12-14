"use strict";
//giving types to variables
Object.defineProperty(exports, "__esModule", { value: true });
let name = "John Doe";
let age = 30;
let isEmployed = true;
// variabe:type = value (type annotation)
//union types
let id;
id = "ABC123";
id = 456789;
let uname;
uname = "user1";
let unionType;
unionType = "Hello";
unionType = 42;
//unionType = true; //incorrect
//any vs unknown
let a; //type of a is any (not recommended)
let b; //type of b is unknown
b = 10;
b = "A string now";
//in unknown we can use conditions to narrow down the type and any is like js where we can do anything
if (typeof b === "string") {
    console.log(b.toUpperCase()); //we have to check the type before using string methods
}
//giving types to functions
// function (variable:type): returnType (void if no return) {}
function greet(personName) {
    return `Hello, ${personName}!`;
}
function add(a, b) {
    return a + b;
}
//calling the functions
console.log(greet("Alice"));
console.log(add(5, 10));
//typing void
function logMessage(message) {
    console.log(message);
}
//typing arrays
let numbers = [1, 2, 3, 4, 5];
let fruits = ["apple", "banana", "cherry"];
//using the interface to type an object
let person = {
    name: "Jane Doe",
    age: 28,
    isEmployed: false
};
//typing tuples
let tuple;
tuple = ["hello", 10]; //correct
//tuple = [10, "hello"]; //incorrect
//typing enums
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
let favoriteColor = Color.Green;
//typing any
let randomValue = 10;
randomValue = "Hello";
randomValue = true;
//typing functions with optional and default parameters
function multiply(a, b = 2) {
    return a * b;
}
console.log(multiply(5)); //uses default b=2
//never type
function throwError(message) {
    throw new Error(message);
}
//throwError("This is an error!"); used in throwing errors or infinite loops
//type inference
let inferredString = "I am inferred as a string";
//inferredString = 10; //incorrect, type is inferred as string
//ts detects the type based on the assigned value and if we try to assign a different type it will throw an error
//# sourceMappingURL=app.js.map