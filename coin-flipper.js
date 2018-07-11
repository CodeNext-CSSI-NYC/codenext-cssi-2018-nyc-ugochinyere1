//Author: Ugochinyere Okogeri
var readline = require("readline-sync");
var playerAns = readline.question("HEY player, heads or tails: ");
let result = Math.random(1);
if (result < 0.5  && playerAns == "heads") {
  console.log("You Won");
} else if(result >= 0.5 && playerAns == "tails") {
  console.log( "You Win");
}
else {
  console.log("you lost");
}
