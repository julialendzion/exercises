"use strict";

/*
const myName = "Zelda";
const mySecondName = "Fitzgerald";

sayHello(myName, mySecondName);

function sayHello(firstNameParam, lastNameParam) {
  console.log(`Hello ${firstNameParam}`);
}
*/

presentPet("Julia", "cat", "Kot");

function presentPet(firstName, animalType, animalName) {
  console.log(`My name is ${firstName} I have a ${animalType} called ${animalName}`);
}

let globalVar = "Freddie";
exp("Hey");

function exp(myParam) {
  globalVar = "";
}
