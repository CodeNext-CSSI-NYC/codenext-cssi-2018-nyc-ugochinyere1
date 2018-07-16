//Author: Ugochinyere Okogeri


/*
// 1. Do each step below on a separate line
// Create an array with exactly five numbers.
var numbers = [10, 22, 6, 19, 17];
// Store the second value from the array in a variable named secondValue.
var secondValue = numbers[2];
// Print out the third value from the array.
console.log(numbers[3]);
// Change the fourth value in the array to 0.
numbers[4] = 0;
// Remove the last value from the array and store it in the variable lastVal.
var lastVal = numbers.pop();
// Print out lastVal to make sure it has the value you expected.
console.log(lastVal);
// Add 524 to the end of the array.
numbers.push(524);
console.log(numbers);
// Add 76 to the end of the array.
numbers.push(76);
console.log(numbers);
// Print out the second-to-last value in the array (which should be 524) by
console.log(numbers[4]);
// placing a number inside square brackets (e.g. arr[3], though 3 is wrong).
numbers[2];
// Print out the second-to-last value in the array again, but this time,
// use the length property and subtraction (e.g. arr[arr.length + 3], though +3 is wrong).
secondToLast = numbers[numbers.length - 2];
console.log(secondToLast);
*/
/*
// 2a. Create an array with five items.
var pnbRock = ["Horses", "Fleek", "Smile", "Selfish", "Feelins"]
// Without using a for loop, print out each item in the array, one at a time.
console.log(pnbRock[0]);
console.log(pnbRock[1]);
console.log(pnbRock[2]);
console.log(pnbRock[3]);
console.log(pnbRock[4]);
// Do NOT just print out the whole array with a command like console.log(arr).
// Make sure you actually print out each item in the array one at a time.
// What if there were 100 items in the array? 1000?



// 2b. Create an empty array.
var empty = [];
// Add a few items to the array one at a time using push.
empty.push("King");
empty.push("Alex");
empty.push("U.G.");

// What if you needed to add 100 items to the array, or 1000?

// Hopefully these examples illustrate how helpful for loops can be.



// 3. Make a new empty array.
//var newEmpty = [];
// Set up a for loop that will run ten times. Think carefully to make sure it will run ten times.

//for (var i = 0; i < 11; i++) {
//newEmpty.push(22);
//  newEmpty.push(22);

//console.log(newEmpty + newEmpty.length);
// Inside the for loop, add your favorite number to the array two times.
// You will need to do this on two separate lines.
// How many numbers should be in your array when the for loop is done?
// Print out the array and the array's length at the end and make sure you are right.



// 4. Make an array that contains four foods.
let foods = ["ice cream", " cupcakes", "macroons", "cake pops"];
// Set up a for loop that will iterate (go through) the array.
for (var i = 0; i < foods.length; i++) {
  console.log(foods[i]);
}

// Do NOT use the number 4 (or 3) in your for loop.

// Instead, use the length of the array in the condition portion (the 2nd part) of the for loop.
// Inside the for loop, get the item that is at the current index and store it in a variable.
// On the next line, print out the variable.
// On the line after that, print out the variable but use toUpperCase() on it.
// When it is done running, you should see something like:
// apple
// APPLE
// orange
// ORANGE
// pear
// PEAR
// plum
// PLUM



//var city = ["New York", "LA", "Venice", "France", "Tokoyo"];
// Set up a for loop that will iterate (go through) the array.
//for (var i = 0; i < city.length; i++) {
//  console.log(city[i]);

//}
// Do NOT use the number 5 (or 4) in your for loop.
// Instead, use the length of the array in the condition portion (the 2nd part) of the for loop.
// (Yes, this is the same as last time. This is super important.)
// Inside the for loop, store the name of the city in a variable called city.
// Then print out the index from the for loop, then a colon, followed by the city.
// When it is done running, you should see something like:
// 0: New York
// 1: Boston
// 2: Seattle
// 3: LA
// 4: San Diego

*/

// 6. Make an array that contains six numbers.

var nums = [1, 10, 16, 21, 50, 70];
// Also make a new, separate empty array called squares.
var squares = [];

function squareNumbers() {
  // Set up a for loop that will iterate (go through) the array.
  for (var i = 0; i < nums.length; i++) {
    squares = nums.push(i ** 2);
    console.log(squares);
  }
}
squareNumbers();
// Do NOT use the number 6 (or 5) in your for loop.
// Instead, use the length of the array in the condition portion (the 2nd part) of the for loop.
// (Yes, this is the same as the last 2 times. This is super important.)
// Inside the for loop, store the number from the array with numbers in a variable called num.
// Add the square of the number to the end of your new array.
// At the end, print out the new array.
// Assuming your original array was [2,6,4,3,1,7] ...
// When it is done running, you should see something like [4, 36, 16, 9, 1, 49]



// 7. Make an array that contains six numbers. Feel free to use the same one.
//var moreNums = [44, 22, 87, 99, 99, 100];
// Also make a new, separate empty array called reverse.
//var reverse = [];
// Set up a for loop that will iterate (go through) the array, but BACKWARDS.
//for (var i = moreNums.length - 1; i >= 0; i--) {
//  moreNums.push reverse
//}
// This means, rather than i = 0; i < arr.length; i++
// You will instead do: i = arr.length - 1; i >= 0; i--
// Make sure that you 110% understand that previous line, because it is very important. Ask questions.
// Inside the for loop, store the number from the array with numbers in a variable called num.
// Add the number to the end of your new array (reverse).
// Note that, since we are looping backwards, we will be adding the numbers from the end first.
// At the end, print out both the original and new array.
// Assuming your original array was [2,6,4,3,1,7] ...
// When it is done running, you should see [7, 1, 3, 4, 6, 2] (it was reversed!)



// 8. Make a new empty array.
// Ask the user how many letters they would like to type in.
// Use a for loop to loop that many times.
// Each time through the loop, ask the user to enter a letter. Add that letter to the array.
// At the very end use let str = arr.join("") to turn your array into a string.
// Print out the str
// For example, if they type in 4, and then type in c, a, k, e when asked
// Then at the end it should just say "cake"



// 9. Make a new empty array.
// Write a for loop that run ten times. Each time, it should add one random number to your array.
// When that is done, create another for loop that goes throught this array and,
// one at a time, prints out each item, so that you can see which items were added.
// Do NOT just print the whole array at once. Get them one at a time and print them.



// 10. We will make a deck of cards -- sort of.
// Create an empty array called deck.
// Make a for loop that goes from 1 to 13.
// Inside that for loop make another for loop that goes from 1 to 4.
// Do NOT use i for both for loops! You can use j if you want.
// Inside the inner for loop:
// Create an empty string
// If the outer loop variable is 2-10 add that number to the empty string.
// However, if it's 1, add A, if it's 11 add J, if it's 12 and Q, if it's 13 and K.
// This is the value of the card (2-10, Ace, Jack, Queen, King)
// Then, using the inner loop, add the suit.
// If it's 1 add "clubs", for 2 add "diamonds", for 3 add "spades", for 4 add "hearts"
// Then, add this string onto the array.
// After both loops are done, print out both the length of the array (should be 52)
// as well as the array itself, which should look like a deck of cards
// Something like: ["Aclubs", "Adiamonds", "Aspades", "Ahearts", "2Clubs", "2Diamonds", ...]