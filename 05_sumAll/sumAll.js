const sumAll = function(num1, num2) {

  // My original error finder
  // if (num1 < 0 || num2 < 0 || typeof(num1) != "number" || typeof(num2) != "number" ) {
  //   return "ERROR";
  // }

  // isInteger prevents negative values as well:
  if (!Number.isInteger(num1) || !Number.isInteger(num2)) return "ERROR";
  
  const larger = (num1 > num2) ? num1 : num2;
  const smaller = (larger == num1) ? num2 : num1;
  let result = 0;
 
  
  for (let i = smaller; i <= larger; i++) {
    result += i;
    console.log(i);
  }

  return result;
};

// Do not edit below this line
module.exports = sumAll;
