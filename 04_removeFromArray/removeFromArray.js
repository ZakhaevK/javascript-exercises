const removeFromArray = function (array, ...values) {

  for (let arg of values) {
    // Work backwards because otherwise if numbers are in a row
    // it will skip checking the same index which will be filled by
    // the next number removed.
    for (let num = array.length; num >= 0; num--) {
      if (array[num] === arg) {
        array.splice(num, 1);
      }
    }
  }

  return array;
};

// Do not edit below this line
module.exports = removeFromArray;
