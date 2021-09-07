"use strict";

// const fullname = "Julia Diana Lendzion";
// getNameParts(fullname);

// function getNameParts(fullName) {
//   let firstName = fullName.substring(0, fullname.indexOf(" "));
//   let middleName = fullName.substring(fullname.indexOf(" ") + 1, fullName.lastIndexOf(" "));
//   let lastName = fullName.substring(fullname.lastIndexOf(" ") + 1);

//   console.log(firstName);
//   console.log(middleName);
//   console.log(lastName);
// }

fullName("Potter", "Harry", "James");

function fullName(lastName, firstName, middleName) {
  console.log(`${firstName} ${middleName} ${lastName} `);
}
