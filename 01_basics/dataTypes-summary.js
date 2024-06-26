/*
Primitive Data Types
 7 Types: (Call by Value) No ref. of memory only value
 String, Number, Boolean, null, undefined, Symbol(kissi bhi value ko unique bana ne ko), BigInt

 */
const score = 100
const scoreValue = 100.3
const isLoggedIn = false
const outSideTemp = null
let userEmail;
const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId); //false as its not same even though value is same.
const bigNum = 23456789987653434345n

console.log(typeof bigNum);

/*
Reference (Non Primitive)
 Arrays, Objects, Functions

In JS: variable ki type kya hai
:=> Dynammically Type hai

*/

const heros = ["shatkiman","naagraj", "krrish"];

let myObj = {
    name: "Kishore",
    age: 22,
}

const myFunction = function() {
    console.log("Hello world");
}

//Non primitive types are Object mostly : Function is specially function object.


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//Stack (Primitive) (We get a copy) and Heap (Non Primitive) (We get a reference)

let myYoutubeName = "KishorePhad"
let anotherName = myYoutubeName

anotherName = "Kishore"
console.log(myYoutubeName); //value is different
console.log(anotherName);


let userOne = {
    name : "Kishore",
    email : "Kishore@google.com",

}

let userTwo = userOne;
userTwo.email = "Kishore@yahoo.com"

console.log(userOne.email); //value is changed
console.log(userTwo.email); 

