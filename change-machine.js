// Author: Ugochinyere Okogeri
var readline = require("readline-sync");
var introduction = "Hi my name is (h@ng3 M@(h!n3";
var cents = readline.question("Please cents as a positive integer: ");
const quarters = Math.floor(cents / 25);
let remaining = cents % 25;
const dimes = Math.floor(remaining / 10);
let remaining2 = remaining % 10;
const nickels = Math.floor(remaining2 / 5);
let remaining3 = remaining2 / 5;
const pennies =remaining2 / 1;


console.log ("quarters: " + quarters +" dimes: " + dimes + " nickels: " + nickels + " pennies: " + pennies);
