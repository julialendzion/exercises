"use strict";

/*
const person1 = {
  firstName: "Julia",
  age: 21,
  student: true,
};

const person2 = {
  firstName: "NotJulia",
  age: 27,
  student: false,
};

console.log(person1.lastName);

person1.lastName = "Lendzion";
console.log(person1.lastName);
*/

let person1 = {
  firstName: "Person1",
  age: 20,
};

let person2 = {
  firstName: "Person2",
  age: 41,
};

let person3 = person1;

person3.firstName = "Changed";

person3 = person2;
