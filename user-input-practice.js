//Author: Ugochinyere Okogeri
// Remember that you can comment parts of your code in and out!
// Try this as you move from question to question below.

// 1. Ask the user to enter a number, and print out "The square root of ___ is ___ ", but with the blanks filled in correctly. (Not sure how to get the square root of a number in JavaScript? Google it!)
var readline = require("readline-sync");
var number = readline.question("Pick your favorite number,please: ");
let numberSqrt = Math.sqrt(number);
console.log("The square root of " + number + " is: " + numberSqrt);


// 2. Ask the user to enter their name, and print out "Your name has ___ letters", but with the blank filled in. Not sure how to get the number of letters in a string in JavaScript? Google it!
var readline = require("readline-sync");
var name = readline.question("Please enter your name: ");
let charNum = name.length;
console.log( "Your name has "  + charNum + " letters");


// 3. Ask the user to enter any word, and print out "The word ____ starts with the letter ___", but with the blanks filled in. Not sure how to get the first letter of a string in JavaScript? ...
var readline = require("readline-sync");
var word = readline.question("Please enter any word: ");
let startLetter = str.charAt();
console.log("The word " + word + "starts with the letter " startLetter);

// 4. Ask the user to enter two numbers, and print out "The average of ___ and ___ is ____", but with the blanks filled in.
var readline = require("readline-sync");
var num1 = readline.question("What is the number of your  birth month?: ");
var num2 = readline.question("What is the date you were born on(numerical value): ");
let average = (num1 + num2) / 2;
console.log( "The average of " + num1 +" and " + num2 " is " + average);
