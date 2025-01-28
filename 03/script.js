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
