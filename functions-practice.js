//Author: Ugochinyere Okogeri
// MAKE SURE YOU CHOOSE GOOD, RELEVANT NAMES FOR YOUR FUNCTIONS AND PARAMETERS

// 1a. Write (declare) a function that prints out "meow"
//var readline = require("readline-sync");

//function makeSoundMeow() {
//  console.log("meow");
//}
//makeSoundMeow();

// 1b. Call it three times in a row. Run your code to make sure it works.

//makeSoundMeow();
//makeSoundMeow();
//makeSoundMeow();

// 2a. Write (declare) a function that takes one parameter and prints out the square of that number

/*function printSquareOfNum(num){
  console.log(num ** 2);
  return num;
}
//printSquareOfNum(5);
*/
// 2b. Call it three times with three different parameters. Run your code to make sure it works.

//printSquareOfNum(67);
//printSquareOfNum(4);
//printSquareOfNum(8);

// 3a. Write (declare) a function that takes two parameters and prints out
// "_____ is greater than ____" with the blanks filled in correctly with the two inputs.
/*
function whichIsGreater(num1,num2){

if (num1 > num2) {
  console.log(num1 + " is greater than " + num2);
} else {
  console.log(num2 + " is greater than " + num1);
}
return num1 && num2;

}

whichIsGreater(0,5);
*/
// 3b. Call it three times with three different parameters
// Make sure to try cases where the first one is bigger, the second one is bigger, and when they are equal.
// Run your code to make sure it works.

//whichIsGreater(6,7);
//whichIsGreater(87,10);
//whichIsGreater(4,6);

// 4a. Write (declare) a function that takes one parameter called name and
// returns (not prints out, just returns) the string "Hello ____", with the name in the blank.
var readline = require("readline-sync");

function sayHello(name = readline.question(" Hi, what is your name?: ")) {
  //var name
  return "hello" + name;
}

sayHello();



// 4b. Call the function and store the result in a variable. Then, print out that variable.
// Repeat this three times with different names.



// 5a. Write (declare) a function that takes two parameters and
// returns (not prints out, just returns) the average of the parameters.

//function findAverageOfTwo(num1,num2){
//return (num1 + num2)/2;
}

//console.log(findAverageOfTwo(5,6));

// 5b. Call the function and store the result in a variable. Then, print out that variable
// in a sentence like "The average is _____".
// Repeat this three times with different numbers. What happens if you pass in
// something that isn't a number, like true or "apple"?
//let result = findAverageOfTwo(8,8);
////let result = findAverageOfTwo(6,9);
//let result = findAverageOfTwo(5,5);