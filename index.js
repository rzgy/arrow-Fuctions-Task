// Q1)Rewrite the following function as an arrow function:
/******************************
	function greet(name) {
	  return `Hello, ${name}!`;
	}
********************************/

let greet = (name) => {
  return `Hello, ${name}!`;
};
console.log(greet("Abdul"));

// Q2) Write a simple arrow function that takes two parameters and returns their sum.

let sum = (num1, num2) => {
  return num1 + num2;
};
console.log(sum(1, 4));

// Q3) Write a simple arrow function that squares a number.

let sum2 = (num3) => {
  return num3 ** 2;
};
console.log(sum2(5));

// Q4) [🌶️🌶️] Create an arrow function that takes an array of numbers and returns a new array with each number squared.

let squareNumbers = (numbers) => {
  return numbers.map((number) => number ** 2);
};

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const squaredNumbers = squareNumbers(numbers);
console.log(squaredNumbers);

// create an arrow function that takes an array of numbers and returns a new array that contains all the number divisble by 3

let divisbleNum = (numbers) => {
  return numbers.filter((number) => number % 3 == 0);
};

console.log(divisbleNum(numbers));
