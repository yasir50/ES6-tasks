// Global Scope
var globalVar = "I am a var";
let globalLet = "I am a let";
const globalConst = "I am a const";
console.log(globalVar, globalLet, globalConst); // All are accessible globally

// Function Scope
function testFunctionScope() {
  var funcVar = "Function Var";
  let funcLet = "Function Let";
  const funcConst = "Function Const";
}
console.log(funcVar, typeof funcLet, typeof funcConst); // ReferenceError for funcLet and funcConst

// Block Scope
if (true) {
  var blockVar = "Block Var";
  let blockLet = "Block Let";
  const blockConst = "Block Const";
}
console.log(blockVar); // Accessible (var ignores block scope)
console.log(typeof blockLet, typeof blockConst); // ReferenceError

// Hoisting with var
console.log(hoistedVar); // undefined
var hoistedVar = "Hoisted Var";

// Hoisting with let and const
console.log(hoistedLet); // ReferenceError
let hoistedLet = "Hoisted Let";
console.log(hoistedConst); // ReferenceError
const hoistedConst = "Hoisted Const";

// Re-declaration
var x = 10;
var x = 20; // No error
let y = 10;
// let y = 20; // SyntaxError
const z = 10;
// const z = 20; // SyntaxError

// Re-assignment
var varReassign = 10;
varReassign = 20; // Allowed
let letReassign = 10;
letReassign = 20; // Allowed
const constReassign = 10;
// constReassign = 20; // TypeError

// Temporal Dead Zone (TDZ)
{
  console.log(tdLet); // ReferenceError
  let tdLet = "Inside TDZ";
  console.log(tdConst); // ReferenceError
  const tdConst = "Inside TDZ";
}

// Good Use Cases
// var: Function-level variables in non-strict mode
function varExample() {
  for (var i = 0; i < 3; i++) {
    console.log(i);
  }
  console.log(i); // Accessible outside loop
}

// let: Block-level variables
if (true) {
  let temp = "Block Let";
  console.log(temp);
}

// const: Constant values
const PI = 3.14159;

// Template Literals
const firstName = "John";
const lastName = "Doe";
console.log(`Full Name: ${firstName} ${lastName}`);

// Multi-line Strings
const address = `1234 Elm Street
Apt 101
Springfield, USA`;
console.log(address);

// Simple Expressions
const num1 = 5;
const num2 = 10;
console.log(`Sum: ${num1 + num2}`);

// Function Calls
const multiplication = (a, b) => a * b;
console.log(`Product: ${multiplication(4, 5)}`);

// Tagged Templates
function tag(strings, ...values) {
  console.log(strings, values);
}
tag`Hello ${firstName} ${lastName}!`;

function formatUpper(strings, ...values) {
  return strings.map((str) => str.toUpperCase()).join("") + values.join("");
}
console.log(formatUpper`Hello ${firstName} ${lastName}`);

// Conditional Logic
const hour = new Date().getHours();
console.log(`Good ${hour < 12 ? "Morning" : "Afternoon"}`);

// Loops within Template Literals
const items = ["Milk", "Eggs", "Bread"];
console.log(`<ul>${items.map((item) => `<li>${item}</li>`).join("")}</ul>`);

// Escaping Backticks
console.log(`This is a \`backtick\``);

// Nested Template Literals
const table = `<table>${[...Array(3)]
  .map(
    (_, row) =>
      `<tr>${[...Array(3)]
        .map((_, cell) => `<td>R${row}C${cell}</td>`)
        .join("")}</tr>`
  )
  .join("")}</table>`;
console.log(table);

// Simple Condition
const age = 18;
const canVote = age >= 18 ? "Yes" : "No";
console.log(`Can vote: ${canVote}`);

// Even or Odd
const number = 7;
const evenOrOdd = number % 2 === 0 ? "Even" : "Odd";
console.log(`Number is ${evenOrOdd}`);

// Grade Evaluation
const score = 85;
const grade =
  score >= 90
    ? "A"
    : score >= 80
    ? "B"
    : score >= 70
    ? "C"
    : score >= 60
    ? "D"
    : "F";
console.log(`Grade: ${grade}`);

// Login Status
const isLoggedIn = true;
const statusMessage = isLoggedIn ? "Welcome back!" : "Please log in";
console.log(statusMessage);

// Discount Eligibility
const isMember = true;
const purchaseAmount = 150;
const discount = isMember && purchaseAmount > 100 ? purchaseAmount * 0.1 : 0;
console.log(`Discount: ${discount}`);

// Determine Max Value
const maxValue = (a, b) => (a > b ? a : b);
console.log(`Max: ${maxValue(5, 10)}`);

// Greeting Message
const greet = (name = "guest") => `Hello, ${name}!`;
console.log(greet("John"));
console.log(greet());

// Mapping Values
const numbers = [1, 2, 3, 4, 5];
const mapped = numbers.map((num) => (num % 2 === 0 ? num * 2 : num * 3));
console.log(mapped);

// Filtering Values
const strings = ["a", "ab", "abc", "abcd"];
const filtered = strings.filter((str) => str.length > 3);
console.log(filtered);

// Copying an Array
const originalArray = [1, 2, 3];
const copiedArray = [...originalArray];
console.log(copiedArray);

// Merging Arrays
const array1 = [1, 2];
const array2 = [3, 4];
const mergedArray = [...array1, ...array2];
console.log(mergedArray);

// Adding Elements to an Array
const nums = [2, 3, 4];
const updatedNums = [1, ...nums, 5];
console.log(updatedNums);

// Copying an Object
const originalObject = { a: 1, b: 2 };
const copiedObject = { ...originalObject };
console.log(copiedObject);

// Merging Objects
const object1 = { a: 1, b: 2 };
const object2 = { b: 3, c: 4 };
const mergedObject = { ...object1, ...object2 };
console.log(mergedObject);

// Updating Object Properties
const user = { name: "John", age: 25, email: "john@example.com" };
const updatedUser = {
  ...user,
  email: "john.doe@example.com",
  address: "1234 Elm St",
};
console.log(updatedUser);

// Passing Array Elements as Arguments
const sum = (a, b, c) => a + b + c;
const numsToSum = [1, 2, 3];
console.log(sum(...numsToSum));

// Combining Multiple Arrays
const combineArrays = (...arrays) => arrays.flat();
console.log(combineArrays([1, 2], [3, 4], [5, 6]));

// Rest Parameter with Spread Operator
const multiply = (num, ...args) => args.map((arg) => arg * num);
console.log(multiply(2, 1, 2, 3));
