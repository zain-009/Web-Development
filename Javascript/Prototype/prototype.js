let heroes = ["thor", "spiderman"];

let heroPower = {
  thor: "Hammer",
  spiderman: "sling",
};

Object.prototype.sayPower = function () {
  console.log("Objects are powerful");
};

Array.prototype.sayPower = function () {
  console.log("Array is Powerful");
};

let name = "Zain   ";
String.prototype.trueLength = function () {
  console.log(`True Length is ${this.trim().length}`);
};

name.trueLength();

heroes.sayPower();
heroPower.sayPower();
