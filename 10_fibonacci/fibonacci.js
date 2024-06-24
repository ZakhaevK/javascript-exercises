const fibonacci = function(num) {

  num = Number.parseInt(num);
  if (!Number.isInteger(num) || num < 0) return "OOPS"

  let numArr = [];
  for (let i = 0; num >= i; i++) {
    if(numArr.length <= 1) {
      numArr.push(i);
    } else {
      numArr.push((numArr[i - 2] + numArr[i - 1]));
    }
  }
  console.log(numArr)
  return numArr[num];
};

// Do not edit below this line
module.exports = fibonacci;
