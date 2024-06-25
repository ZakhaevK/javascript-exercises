function getAge(birth, death) {
  if (!death) death = new Date().getFullYear();
  return death - birth;
} 

const findTheOldest = function(peopleArr) {
  return peopleArr.reduce((oldest, person) => {
    personAge = getAge(person.yearOfBirth, person.yearOfDeath);
    oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
    if (personAge > oldestAge) {
      return person;
    } else {
      return oldest;
    }
  })
};

// Do not edit below this line
module.exports = findTheOldest;
