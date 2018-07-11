//Author: Ugochinyere Okogeri

var readline = require("readline-sync");
var myNum = 7;
var userNum = readline.question("Please guess a number from 1 to 10: ");
if ( userNum == myNum ) {
  console.log("Congratulations, smarty pants! ");
}
else if (userNum != myNum) {
  console.log("Welp, better luck next time. ");
}
