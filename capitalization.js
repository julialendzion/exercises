"use strict";

const str = "  NaTHALIE  ";
capitalize(str);

function capitalize(str) {
  let noSpace = str.trim();
  let capital = noSpace.substring(0, 1).toUpperCase() + noSpace.substring(1).toLowerCase();
  console.log(capital);
}
