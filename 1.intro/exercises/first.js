const firstName = "Victor";
const lastName = "Petersen";
console.log("My first name is", firstName, "and my last name is", lastName);

const year = "2019";
const number = 1;
console.log(parseInt(year) + number);

// --------------------------------------
// Exercise 3 - Add numbers from string to float

const numberOne = "1.10";
const numberTwo = "2.30";
console.log(parseFloat(numberOne) + parseFloat(numberTwo));

// add those two numbers and show the result
// you cannot touch line 1 neither line 2

// --------------------------------------


// --------------------------------------
// Exercise 4 - Add the numbers and the total with 2 decimals

const anotherNumberOne = "1.10";
const anotherNumberTwo = "2.30";
let here = parseFloat(anotherNumberOne) + parseFloat(anotherNumberTwo);
console.log(here.toFixed(2));


// --------------------------------------
// Exercise 5 - Decimals and average

const one = 10;
const two = 45;
const three = 98;

let numberOfNumbers = 3;
let placeholder = (one + two + three) / numberOfNumbers;
// Show in the console the avg. with 5 decimals

console.log(placeholder.toFixed(5));


// --------------------------------------
// Exercise 6 - Get the character by index

const letters = "abc";
// Get me the character "c"
console.log(letters[2]);


// --------------------------------------
// Exercise 7 - Replace

const fact = "You are learning javascript!";
console.log(fact.replace("j", "J"));
// capitalize the J in Javascript


// --------------------------------------

// --------------------------------------


