function ageCalculator (name, birthday, currentYear) {
  age = currentYear - birthday;
  return name + " is " + age + " years old.";
};

console.log(ageCalculator("Miranda", 1983, 2015));
console.log(ageCalculator("Ferdinand", 1988, 2015));

/*
var name = "Suzie";
var birthday = 1983;
var currentYear = 2015;
var age = currentYear - birthday;
name + " is " + age + " years old.";
*/