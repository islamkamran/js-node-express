console.log("hello");
// data types
// numbers

let num = 3;
let num2 = 3.33;
console.log(num + num2);
console.log(typeof (num + num2));

// strings

let firstName = "Islam";
let lastName = "kamran";

console.log(firstName + "" + lastName);
console.log(typeof firstName);

// booleans

let isLoggedIn = true;

console.log(isLoggedIn);
console.log(typeof isLoggedIn);

let lasLogOut = null;
console.log(lasLogOut);
//  but it takes some space someting exist but the actual value is not there we use undefined in that case

let last = undefined;
console.log(last);
console.log(typeof last);

// object is JS is like dict in python

const person = {
  firstName: "Islam",
  lastName: "Kamran",
  age: "30",
};

console.log(person);
console.log(person.firstName);

if (1) {
  console.log(true);
}
// true ->1
// false ->0

login = false;

console.log(login + 10);

// booleans are internally 1 and 0 and can be used as numbers

// string "1"+"1"

console.log("123" * 3); //basically this is type casting in js like we convert in python
console.log(typeof ("a" + 1)); //0
