const palindromes = function (string) {
  let strArr = string.toLowerCase().replace(/[^a-zA-Z0-9]/g, "").split('');
  console.log(strArr);
  const isPalin = strArr.reduce((acc, char, i, arr) => {
    return acc && (char == arr[arr.length - (1 + i)]);
  }, true);
  return isPalin;
};

// Do not edit below this line
module.exports = palindromes;
