//giving types to variables

let name :string = "John Doe";
let age :number = 30;
let isEmployed :boolean = true;

// variabe:type = value (type annotation)

//union types
let id: string | number;
id = "ABC123";
id = 456789;

let uname : string | null;
uname = "user1";

let unionType: string | number;
unionType = "Hello";
unionType = 42;
//unionType = true; //incorrect

//any vs unknown
let a; //type of a is any (not recommended)
let b: unknown; //type of b is unknown
b = 10;
b = "A string now";
//in unknown we can use conditions to narrow down the type and 'any' is like js where we can do anything
if (typeof b === "string") {
    console.log(b.toUpperCase()); //we have to check the type before using string methods
}

//giving types to functions
// function (variable:type): returnType (void if no return) {}
function greet(personName: string): string {
    return `Hello, ${personName}!`;
}
function add(a: number, b: number): number {
    return a + b;
} 
//calling the functions
console.log(greet("Alice"));
console.log(add(5, 10));

//typing void
function logMessage(message: string): void {
    console.log(message);
}

//typing arrays
let numbers: number[] = [1, 2, 3, 4, 5];
let fruits: string[] = ["apple", "banana", "cherry"];


//typing objects
interface Person {
    name: string;
    age: number;
    isEmployed: boolean;
} 

//using the interface to type an object
let person: Person = {
    name: "Jane Doe",
    age: 28,
    isEmployed: false
};

//typing tuples
let tuple: [string, number];
tuple = ["hello", 10]; //correct
//tuple = [10, "hello"]; //incorrect

//typing enums
enum Color {
    Red,
    Green,
    Blue
}
let favoriteColor: Color = Color.Green;


//typing any
let randomValue: any = 10;
randomValue = "Hello";
randomValue = true;

//typing functions with optional and default parameters
function multiply(a: number, b: number = 2): number {
    return a * b;
}
console.log(multiply(5)); //uses default b=2

//never type
function throwError(message: string): never {
    throw new Error(message);
}
//throwError("This is an error!"); used in throwing errors or infinite loops


//type inference
let inferredString = "I am inferred as a string";
//inferredString = 10; //incorrect, type is inferred as string
//ts detects the type based on the assigned value and if we try to assign a different type it will throw an error