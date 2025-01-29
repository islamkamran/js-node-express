// const age = 2;
// const gender = "female";

// if (age >= 18 || gender == "male") {
//   console.log("You are an adult male");
// } else if (age >= 18 || gender == "female") {
//   console.log("You are a female adult");
// } else {
//   console.log("Chal mera putt shotti kaaar");
// }

// const num = 4;
// if (num % 2 != 0) console.log("Odd");
// else console.log("Even");

// loops
// for when we know the exact number of itteration

// for(let i = 1;i<=10;i+=5){
//     console.log(i+" "+"Islam Kamran")
// }

// while when we know the condition to fulfil a task but donnot know how many times the loop itterations will take
/*
you                 home
*/
// let initialStep = 1;
// let house = 10;
// // while (initialStep != house) {
// //   initialStep = initialStep + 1;
// //   console.log("Step Taken" + " " + initialStep);
// // }

// console.log("Bhai pahonch gaye");
// // do while

// do {
//   initialStep = initialStep + 1;
//   console.log("Step Taken" + " " + initialStep);
// } while (initialStep <= house);

// game guess the input
// let number = 40
// let guess = 0

// do{
//     guess = parseInt(prompt("Enter your guess"))
//     if(guess==40){
//         alert("Bhai Jeet gaye")
//         break
//     }
// }while(guess!=0)

// functions in JS

function sayHello() {
  console.log("Hello Islam from the function");
}

sayHello();

// the the fetched here are called arguments
function adding(n1, n2) {
  return n1 * n2;
}

let num1 = 2;
const num2 = 3;
// the data passed here are called parameters
console.log("the result is: ", adding(adding(2, 3), adding(2, 2)) + 1);

function multipleAdding() {
  let data = arguments;
  console.log(data);
  let summ = 0;
  for (let i = 0; i < data.length; i++) {
    //in is used for dictionary key and value pair and argument make it an object
    summ += parseInt(data[i]);
  }
  return summ;
}

function v2Adding(...numbers) {
  let add = 0;
  for (let i = 0; i < numbers.length; i++) {
    add += numbers[i];
  }
  return add;
}
console.log(v2Adding(1));
console.log(v2Adding(1, 2));
