/***
 * JavaScript Remainder Operator
 * Summary: in this tutorial, you'll learn about the JavaScript remainder operator (%) to get the remainder of a number divided by another number.
 */

/***
 * 1. Introduction to the JavaScript remainder operator
 * JavaSCript uses the % to represent the remainder operator. The remainder operator returns the remainder left over when one value is divided by another value.
 * Here's the syntax of the remainder operator:
 *  dividend % divisor
 * The following shows the equation for the remainder:
 *  dividend = divisor * quotient + remainder
 *  where |remainder| < |divisor|
 * In this equation, the diviend, divisor, quotient, and remainded are all integers. The sign of the remainder is the same as the sign of the dividend.
 *   ┌───┐   ┌───┐   ┌───┐         ┌───┐
 *   │ 5 │   │ % │   │ 2 │  ────>  │ 1 │
 *   └───┘   └───┘   └───┘         └───┘
 */

/***
 * 2. JavaScript remainder operator examples
 * Let's take some examples of using the JavaScript remainder operator.
 */

/***
 * 2.1. Using the remainder operator with a positive dividend
 */

// TODO: The following example shows how to use the remainder operator with a positive dividend:
// let remainder = 5 % -2;
// console.log(remainder); // 1

// remainder = 5 % 2;
// console.log(remainder); // 1

/***
 * 2.2. Using the remainder operator with a negative dividend
 */

// TODO: The following example uses the remainder operator with a negative dividend:
// let remainder = -5 % 3;
// console.log(remainder); // -2

// remainder = -5 % -3;
// console.log(remainder); // -2

/***
 * 2.3. Using the remainder operator with special values
 */

// TODO: If a dividend is an `Infinity` and a divisor is a finite number, the remainder is `NaN`. For example:
// let remainder = Infinity % 2;
// console.log(remainder); // NaN

// TODO: If a dividend is a finite number and a divisor is zero, the remainder is `NaN`:
// let remainder = 10 % 0;
// console.log(remainder); // NaN

// TODO: If both dividend and divisor are `Infinity`, the remainder is `NaN`:
// let remainder = Infinity % Infinity;
// console.log(remainder); // NaN

// TODO: If a dividend is a finite number and the divisor is an `Infinity`, the remainder is the dividend. For example:
// let remainder = 10 % Infinity;
// console.log(remainder); // 10

// TODO: If the dividend is zero and the divisor is non-zero, the remainder is zero:
// let remainder = 0 % 10;
// console.log(remainder); // 0

// TODO: If either dividend of divisor is not a number, it's converted to a number using the `Number()` function and applied the above rules. For example:
// let remainder = '10' % 3;
// console.log(remainder); // 1

/***
 * 3. Checking if a number is an odd number
 */

// TODO: To check if a number is an odd number, you use the remainder operator (`%`) like the following example:
// let num = 13;
// let isOdd = num % 2 == 1;
// console.log(isOdd); // true

// In this example, if the `num` is an odd number, ther remainder is one. But if the `num` is an even number, the remainder is zero.

// TODO: Later, you'll learn how to define a function that returns `true` if a number is odd or `false` otherwise like this:
// function isOdd(num) {
//   return num % 2;
// }

//  Alternatively, you can use an arrow function in ES6:
// const isOdd = (num) => num % 2;

/***
 * 4. Remainer vs Modulo operator
 * In JavaScript, the remainder operator (%) is not the modulo operator.
 * If you have been working with Python, you may find the `%` represents the ,odulo operator. However, this is not the case in JavaScript.
 * To get a modulo in JavaScript, you use the following expression:
 *  ((diviend & divisor) + divisor) % divisor
 * Alternatively, you can wrap it in the function:
 *  const mod = (dividend, divisor) => ((dividend % divisor) + divisor) % divisor;
 * If the division and divisor have the same sign, the remainder and modulo operators return the same result. Otherwise, they return different results.
 */

// TODO: For example:
// const mod = (dividend, divisor) => ((dividend % divisor) + divisor) % divisor

// // dividend and divisor have the same sign
// console.log('remainder:', 5 % 3); // 2
// console.log('modulo:', mod(5, 3)); // 2

// // dividend and divisor have the different signs
// console.log('remainder:', -5 % 3); // -2
// console.log('modulo:', mod(-5, 3)); // 1

/***
 * 5. Summary
 * Use the JavaScript remainder operator (`%`) get the remainder of a value divided by another value
 */

