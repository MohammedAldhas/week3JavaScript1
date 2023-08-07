//# JavaScript-Fundamentals-HomeWork

/*
## Calculate area of a rectangle

 - Store the length of rectangle.
 - Store the width of rectangle.
 - Calculate the area and print the output "The area of the rectangle is: NN"
 */

console.log("==".repeat(27));
console.log("==".repeat(27));
let recLength = 10;
let recwidth = 10;
recArea = recLength * recwidth;
console.log("The area of the rectangle is: ", recArea);

/*## The Temperature Converter
 
 - Store a celsius temperature into a variable.
 - Convert it to fahrenheit and output "NN°C is NN°F".
 - Now store a fahrenheit temperature into a variable.
 - Convert it to celsius and output "NN°F is NN°C."
 */

console.log("--".repeat(27));
let temp;
let C = 5;

temp = C * (9 / 5) + 32;
console.log(`${C}°C is ${temp}°F`);

let F = temp;
temp = ((F - 32) * 5) / 9;
console.log(`${F}°F is ${C}°C`);
console.log("--".repeat(27));

// Convert hours to seconds

let hours = 2,
  secondsH = 3600,
  convert = hours * secondsH;
console.log(`${hours} hours  => ${secondsH}`);

console.log("--".repeat(27));

// Leap year

let year = 1922;

if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
  console.log(`${year} + " is a leap year.`);
} else {
  console.log(`${year} + " is not a leap year.`);
}

console.log("--".repeat(27));

// ## ****Find the a number is present in given range****

// find if the given number is within the provided start and end range and print ture if in range or false if it is out of range.

// Example start = 11, end = 30, number = 15

let start = 11;
let number = 15;
let end = 30;

if (number >= start && number <= end) {
  console.log(true);
} else console.log(false);

console.log("--".repeat(27));

//   ## Factorial numbers
//   Write program that takes a number and returns its factorial.
//   Factorial is the product of an integer and all the integers below it. For example, the factorial of 5 is 5 x 4 x 3 x 2 x 1 = 120.
//
let nums = 9;
let res = 1;
console.log(`${nums}! =`);
for (let i = nums; i >0; i--) {
    res *= i;
    console.log(i);
}
console.log(`${nums}! =`,  res);
console.log("--".repeat(27));
