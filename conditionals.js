//Author: Ugochinyere okogeri
// When you are done with each one, comment it out when you move to the next one, so it doesn't keep showing up.

// 1. Ask the user for a number and print whether it is positive or negative or zero.
/*
var readline = require("readline-sync");
var userNum = readline.question("Please pick any number: ");
if (userNum > 0) {
  console.log("positive");
}
else if (userNum < 0) {
  console.log("negative");
}
else if(userNum == 0){
  console.log(ZERO);
}
*/
// 2. Ask the user to enter three numbers, and then print out the biggest number they entered.
/*
var readline = require("readline-sync");

var userNum1 = parseFloat(readline.question("PLease pick your first number: "));
var userNum2 = parseFloat(readline.question(" Please pick your second number: "));
var userNum3 = parseFloat(readline.question("Please pick your third number: "));

if ( userNum1 > userNum2 && userNum1 > userNum3 ) {
  console.log("Your first number is the biggest ");
}

else if ( userNum2 > userNum1 && userNum2 > userNum3) {
  console.log("Your second number is the biggest ");
}

else if (userNum3 > userNum1 && userNum3 > userNum2) {
  console.log("Your third number is the biggest ");
}
*/
// 3. Ask the user for a number and print whether it is odd or even
/*
var readline = require("readline-sync");
var userNum = readline.question("Choose a number, any number!: ");

if ( userNum % 2 == 0 ) {
  console.log("Congrats,this is an EVEN number!");
}
else if ( userNum % 2 == 1) {
  console.log(" Wow,what an ODD number");
}
*/
// 4. Ask the user to enter a letter and tell them if it is a vowel or consonant
/*
var readline = require("readline-sync");
var letter = readline.question("Enter a letter please: ");
if ( letter == "a" || letter == "A" || letter == "e" || letter == "E" || letter == "o" || letter == "O" || letter == "u"|| letter == "U" || letter == "i" || letter == "I" ) {
  console.log(" The letter you chose is vowel");
}
else {
  console.log(" The letter you chose is a constant");
}
*/

// 5. Ask the user to enter a year, and tell them if it was a leap year.
// (You can use Google if you're not sure when leap years happen.)
/*
var readline = require("readline-sync");
var year = parseInt(readline.question("Enter any year here: "));
if (year % 4 == 0){
  console.log("Yay! Leap year");
}
else {
  console.log(" Only 365 days ");
}
*/
// 6. Ask the user if they have been a citizen for at least 9 years (yes or no), ask them their age, and ask if they live in New York state.
// If they answer yes, their age is above 30, and yes, then tell them they can run for senate in NY. Otherwise, say that they cannot.
/*
var readline = require("readline-sync");
var numYears = readline.question("Hi beautiful person, have you been a citizen for at least 9 years (yes or no)?: ");
var age = readline.question(" How old are you?: ");
var nyorker = readline.question("Do you live in New York?: ");
if (numYears == "yes" && age > 30 && nyorker== "yes" ){
  console.log(" Congratioulations!!, You may be our next N.Y senate!!");
}
else {
console.log("sorry you are not legible to run for senate (yet)");
}

*/

// 7. Write a program that asks the user to enter a whole number 1-7 and prints out the corresponding day of the week.
// If you want another challenge, look up how to use switch statements and use a switch instead of if-else for this.
// Note that we usually don't bother with switch statements unless there are more than a few elses.
/*
var readline = require("readline-sync");
var numDay = readline.question("Hi enter a number from 1-7: ");
if(numDay == 1 ){
    console.log("it's Monday...great.");
}
else if (numDay == 2) {
  console.log("Club going up,ON A TUESDAY!");
}
else if (numDay== 3) {
  console.log("Woman Crush Wednesday guys!!");
}
else if (numDay== 4) {
console.log("Throwback Thursday's anyone?? :D");
}
else if (numDay== 5) {
  console.log(" 'I can't believe it's Freaky Friday' ;) ");
}
else if (numDay== 6) {
  console.log(" Any parties this Saturday??");
}
else if (numDay== 7) {
  console.log("Ice cream SUNDAY sounds great right bout now");
}
*/
