const score =400
console.log(score); // 400

const balance = new Number(100)
console.log(balance); //Number: 100 //few methods are there for Number

//prototypes like
console.log(balance.toString().length);
console.log(balance.toFixed(2)); //precision values

const otherNumber = 23.8966 

console.log(otherNumber.toPrecision(3)); //returns a string 
//o/p :=> 23.9

const otherNumber2 = 123.8966 

console.log(otherNumber2.toPrecision(3)); //returns a string 
//o/p :=> 124

const otherNumber3 = 1123.8966 

console.log(otherNumber3.toPrecision(3)); //returns a string 
//o/p :=> 1.12e+3
//precision is for focus on the values requried.

const hundreds = 1000000
// sometimes calculating the zeros is tedious task for this we have
console.log(hundreds.toLocaleString());
// we get 1,000,000 as US Standards

console.log(hundreds.toLocaleString('en-IN'));
//india standard

/*
Number.MAX_VALUE
Number.MAX_SAFE_INTEGER
Number.MIN_VALUE
Number.MIN_SAFE_INTEGER
*/




// ++++++++++++++++ Maths +++++++++++++++++++++++++++++++++++++++

console.log(Math);

// a lot of properties as Math a object can be seen in console log of website

console.log(Math.abs(-4));
//4
console.log(Math.round(4.3));
//4

//we can decide ceil or floor for the decimal values
console.log(Math.ceil(4.3)); // 5
console.log(Math.floor(4.3)); // 4

console.log(Math.random()); // 0 to 1 between values
//According to range
console.log(Math.random() * 10); // 10 multipler but still no guarantee that less than 0
// we will add 1 as well
console.log(Math.random() * 10 + 1);

const min = 10
const max = 20
//adding 1 is for removing 0. values

console.log(Math.floor(Math.random() * (max - min + 1)) + min);

/*
Math.random() 0 to 1
(max - min + 1) range
Math.floor not getting . values
+ min will get atleast this much value need and rest is random
*/


