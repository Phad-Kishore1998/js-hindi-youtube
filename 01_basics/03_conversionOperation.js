//for example we dont know what value is given by front end to back end
/*
const {score} = req.body
here we are not sure if in line 3 we have a value string or number or something else.
*/

let score = "33"

console.log(typeof score);
console.log(typeof (score)); // output will be number in small cases.

let valueInNumber = Number(score) //here score is converted to number
console.log(typeof valueInNumber);

//but for example if we have a score with number and alphabet
let score2 = "33abc"

let valueInNumber2 = Number(score2) //here score2 is also converted to number
console.log(typeof valueInNumber2);
//but it should not be the case so when we check the value in valueInNumber2

console.log(valueInNumber2) // we get a NaN not a number
//NaN 


//what is our situation if score3 is null in score3??
let score3 = null

let valueInNumber3 = Number(score3) //here score3 is also converted to number
console.log(typeof valueInNumber3);
//but it should not be the case so when we check the value in valueInNumber3

console.log(valueInNumber3) // we get a 0 but what if we were checking the temperature values.

/*
Those our conversion is hard to understand
"33" => 33
"33abc" => NaN
true => 1; false => 0
*/

//values to boolean

let isLoggedIn = ""
let valueInBoolean = Boolean(isLoggedIn);
console.log(typeof valueInBoolean);
console.log(valueInBoolean + " === ");

/*
// 1 => true; 0 => false
// "" => false
// "Kishore" => true
*/

let someNumber = 33
let stringNumber = String(someNumber)
console.log(stringNumber); // 33 as String printed
console.log(typeof stringNumber); //string as type



//******************************Operations *******************************

let value = 3
let negValue = -value
//console.log(negValue); //-3 is there

/*

console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2**3);
console.log(2/2);
console.log(2 % 3);

*/

//concatination of two strings
let str = "hello"
let name = " kishore"

let finalStr = str + name
console.log(finalStr);

//precedence
console.log("1" + 2); //12
console.log(1 + "2"); //12

//observe this
console.log("1" + 2 + 2); //122 
console.log(1 + 2 + "2"); //32

//observe this
console.log(+true); // 1
console.log(+""); // 0

let num1 ,num2, num3 
num1 = num2 = num3 = 2 + 2

//prefix and postfix
let x = 3;
const y = x++;
console.log(`x: ${x}, y: ${y}`);
//expected o/p x:4 and y:3

let a = 3;
const b = ++a;
console.log(`a: ${a}, b: ${b}`);
//expected o/p a:4 and b :4

