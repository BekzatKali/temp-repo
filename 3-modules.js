// Modules
const { john, peter } = require("./4-names");
const sayHi = require("./5-utils");

const { john, peter } = names;

const data = require("./6-alternative-flavor");
require("./7-mind-grenade");

console.log(data);

sayHi("susan");
sayHi(john);
sayHi(peter);
