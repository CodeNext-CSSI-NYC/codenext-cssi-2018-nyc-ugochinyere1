//Author: Ugochinyere Okogeri

// 1a. Use a while loop to print out numbers from 1 to 10
/*
var numbers = 1;

while(numbers <= 10){
	console.log(numbers);
	numbers ++;
}
*/
// 1b. Use a while loop to print out numbers from 30 to 15
/*
var bigNums = 30;
while(bigNums >= 15){
	console.log(bigNums);
	bigNums --;
}
*/

// 2. Write a program that keeps rolling a die until the roll is a 5. Print out each roll.
// If you haven't yet done so, you should run
// npm install random-int
// and use that to get a random number from 1 to 6.
// Google "npm random-int" for more info.
/*
var randomInt = require('random-int');
function rollingDie(){

	var rollDie = randomInt(1,7);

	while(rollDie != 5){
		
		console.log(rollDie);
		rollDie = randomInt(1,7);
	}

}

rollingDie();
*/
// 3. Write a program that asks the user to guess a secret password.
// Until the user enters the correct password (which is chosen by you in advance),
// the program will keep asking for all eternity. When they finally do enter the
// correct password, exit the loop and print a congratulatory message.
/*
var readline = require("readline-sync");
function guessPassword(){
	var password = "Mystie";
	var guessUser=readline.question(" Can you guess the password?: ");
	while(guessUser != password){
		
		console.log("Sorry! That's incorrect.");
		guessUser=readline.question(" Can you guess the password?: ");
	}

	
	console.log("Congratulations! you're a smart one.")
	

}

guessPassword();
*/


// Hint: Declare userInput outside the loop and initialize it to the value of readline.question("Enter password: ").
// The while loop will check if userInput matches the correct password.
// If not, inside the loop you should print "Sorry! That's incorrect", then
// assign userInput to the value of readline.question("Enter password: ") again.

// Bonus: Enhance your program to only allow the user to try entering the correct password three times.
// If they fail three times, the program should kick them out and tell them they are a robot.
// When the user enters the wrong password, the program tells them that they are wrong,
// along with how many attempts they've made so far.