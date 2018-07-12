//Author: Ugochinyere Okogeri
/*
function makeAbba(a, b) {
  return a + b + b + a;
}

console.log(makeAbba("hi","bye"));
*/
/*
function comboString(a, b) {
  if (a.length > b.length) {
    console.log(b + a + b);
  } else {
    console.log(a + b + a);
  }

}
comboString("hey","beautiful");
comboString("beautiful","him");
*/

function lastTwo(str) {
  let begin = str.substring(0, (str.length() - 2));
  let sndLast = str.charAt(str.length() - 2);
  let end = str.charAt(str.length() - 1);

  if (str.length() < 2) {
    return str;
  } else {
    return begin + end + sndLast;

  }
  console.log(lastTwo("Blessing"));
  console.log(lastTwo("To"));

}