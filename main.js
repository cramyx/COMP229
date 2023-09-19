import {halfOf, multiply} from './lib.js';

console.log(halfOf(84));
console.log(multiply(21, 2));


// CONST KEYWORD
var pizza = true;
pizza = false;
console.log(pizza); // false
//const pizza = true; CANNOT RESET VALUE OF A CONSTANT VARIABLE
//pizza = false;
//console.log(pizza);


// LET KEYWORD
var topic = "JavaScript";
if (topic) {
    var topic = "React";
    console.log("block", topic); // block React
}
console.log("global", topic); // global React

var topic = "JavaScript";
if (topic) {let topic = "React";
console.log("block", topic); // React
}
console.log("global", topic); // JavaScript

// TEMPLATE STRINGS
var lastName = "Smith";
var firstName = "John";
var middleName = "Doe";

console.log(lastName+","+firstName+","+middleName);

console.log(`${lastName}, ${firstName} ${middleName}`);

// CREATING FUNCTIONS

// FUNCTION DECLARATIONS
// function logCompliment() {
//     console.log("You're doing great!");
// };
// logCompliment();

//FUNCTION EXPRESSIONS
// const logCompliment = function() {
//     console.log("You're doing great!");
// };
// logCompliment();

// PASSING ARGUMENTS
// const logCompliment = function(firstName) {
//     console.log(`You're doing great, ${firstName}`);
// };
// logCompliment("Molly");

// const logCompliment = function(firstName, message) {
//     console.log(`${firstName}: ${message}`);
// };
// logCompliment("Molly", "You're so cool");

// FUNCTION RETURNS
const createCompliment = function(firstName, message) {
    return `${firstName}: ${message}`;
};
createCompliment("Molly", "You're so cool");
console.log(createCompliment("You're so cool", "Molly"));

// DEFAULT PARAMETERS
function logActivity(name = "Shane McConkey", activity = "skiing") {
    console.log(`${name} loves ${activity}`);
};
//console.log(logActivity);

// ARROW FUNCTIONS
// const lordify = function(firstName) {
//     return `${firstName} of Canterbury`;
// };
// console.log(lordify("Dale")); // Dale of Canterbury
// console.log(lordify("Gail")); // Gail of Canterbury
// const lordify = firstName => `${firstName} of Canterbury`
// console.log(lordify);

// TYPICAL FUNCTION
// const lordify = function(firstName, land) {
//     return `${firstName} of ${land}`;
// };
// console.log(lordify("Dee", "yui"));

// ARROW FUNCTION
// const lordify = (firstName, land) => `${firstName} of ${land}`;
// console.log(lordify("Don", "Piscataway")); // Don of Piscataway
// console.log(lordify("Todd", "Schenectady")); // Todd of Schenectady
const lordify = (firstName, land) => {

    if (!firstName) {
      throw new Error("A firstName is required to lordify");
    }
    if (!land) {
      throw new Error("A lord must have a land");
    }
  return `${firstName} of ${land}`;
  
  };
  try {
    console.log(lordify("Kelly", "Sonoma")); // Kelly of Sonoma
    console.log(lordify("Dave")); // Throws an error
  } catch (error) {
    console.log(error.message); // Output the error message
  }