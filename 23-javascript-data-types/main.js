/**
 * JavaScript Data Types
 * Summary: in this tutorial, you will learn about the JavaScript data types and their unique characteristics.
 * JavaScript has the primitive data types:
 * 1. null
 * 2. undefined
 * 3. boolean
 * 4. number
 * 5. string
 * 6. symbol - available from ES2015
 * 7. biginy - available from ES2020
 * and a complex data type object.
 */

// JavaScript is a dynamically typed language, meaning that a variable isn't associated with a specific type. In other words, a variable can hold a value of different types. For example:
// let counter = 120; // counter is a number
// counter = false; // counter is now a boolean
// counter = "foo"; // counter is now a string

// To determine the current type of the value stored in a variable, you use the typeof operator:
// let counter = 120;
// console.log(typeof(counter)); // "number"

// counter = false;
// console.log(typeof(counter)); // "boolean"

// counter = 'Hi';
// console.log(typeof(counter)); // "string"

/**
 * Output:
 * "number"
 * "boolean"
 * "string"
 */

/**
 * 1. The undefined type
 * The undefined type is a primitive type that has only one value undefined. By default, when a variable is declared but not initialized, it defaults to undefined.
 */

// Consider the following example:
// let counter;
// console.log(counter);         // undefined
// console.log(typeof counter);  // undefined
// In this example, the counter is a variable. Since counter hasn't been initialized, it is assigned the value undefined. The type of counter is also undefined.

// It's important to note that the typeof operator also returns undefined when you call it on a variable that hasn't been declared:
// console.log(typeof undeclaredVar); // undefined

/**
 * The null type
 * The null type is the second primitive data type that also has only one value null.
 */

// For example:
// let obj = null;
// console.log(typeof obj); // object
// The typeof null returns object is a known bug in JavaScript. A proposal to fix was rejected due to potential to break many existing sites.

// JavaScript defines that null is equal to undefined as follows:
// console.log(null == undefined); // true

/**
 * 2. The number type
 * JavaScript uses the number type to represent both integer and floating-point numbers.
 */

// The following statement declares a variable and initializes its value with an integer:
// let num = 100;

// To represent a floating-point number, you include a decimal point