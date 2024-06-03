const reverseString = function(string) {
  let result = '';
  for (i = string.length; i >= 0; i--) {
    result += string.charAt(i);
  }
  return result;
};
// This is quite arduous, the actual built in function way is:
// return string.split("").reverse().join("");
// This is also faster because of engine-level optimisation of built in functions.

// Do not edit below this line
module.exports = reverseString;
