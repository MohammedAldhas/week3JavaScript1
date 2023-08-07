
// - using for loop calculate the square number between 1 and 10.
// - using any loop print odd number between 1 and 20.
// - using any loop print even number between 1 and 25.
// - using loop print the following.

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

