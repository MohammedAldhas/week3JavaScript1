//LAP1
// ## If else statement

// ### even & odd numbers

// - Declare a variable and assign number to it
// - Write if else statement to check if that number you entered is even or odd and print the result in the console

// ### Write this question using if else statment, that is if:

// - Grade is 90 and above is an A
// - Grade of 80 to 89 is a B
// - Grade of 70 to 79 is a C
// - Grade of 60 to 69 is a D
// - Grade of 59 or below is a F

let num = 3;
if (num % 2 === 0) {
  console.log("Number is even");
} else {
  console.log("Number is odd");
}

let grade = 70;
if (grade >= 90 && grade <= 100) {
  console.log("A");
} else if (grade >= 80) {
  console.log("B");
} else if (grade >= 70) {
  console.log("C");
} else if (grade >= 60) {
  console.log("D");
} else if (grade < 60 && grade > 0) {
  console.log("F");
} else {
  console.log("Error");
}


let num5 = 3;

let res3 = num5 / 3 ;
let res5 = num5 / 5 ;
let res9 = num5 / 9 ;

if (res3 === Math.round(res3) === true) {
  console.log("3");
}else console.log("!3");

if (res5 === Math.round(res5) === true) {
  console.log("5");
}else console.log("!5");
if (res9 === Math.round(res9) === true) {
  console.log("9");
}else console.log("!9");

console.log("===".repeat(20));

//LAP 2
// q1
let re1 = 0;
for(let i=1;i<=10;i++){
    console.log(i**2);
}

// q2
for(i=1;i<=20;i++){
    if(i%2 !== 0){
        console.log(i);
    }
}

// q3
for(i=1;i<=20;i++){
    if(i%2 === 0){
        console.log(i);
    }

}

// q4
for(i=1;i<=8;i++){
    let m = " ";
    for(let j=1;j<=i;j++){
        m += j + " ";
    }
    console.log(m);
}

// q5
let num1 = 0;
let num2 = 1;
// let addition = 0;

for (let i = 1; i <= 20; i++) {
  console.log(num1);
  let nextTerm = num1 + num2;
  num1 = num2;
  num2 = nextTerm;
}

