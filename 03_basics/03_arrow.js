//This and Arrow Function

const user = {
    username : "Kishore",
    price : 999,

    welcomeMessage: function() {
        console.log(`${this.username}, welcome to website`);
        console.log(this);
    }
}

user.welcomeMessage(); //Kishore, welcome to website
/* context change
{
  username: 'Kishore',
  price: 999,
  welcomeMessage: [Function: welcomeMessage]
}
*/
user.username = "sam"
//context changed and printing current
user.welcomeMessage(); //sam, welcome to website
/* context change
{
  username: 'sam',
  price: 999,
  welcomeMessage: [Function: welcomeMessage]
}
*/


//**********************************************Interesting*******************************
console.log(this); //{} empty here
//but in the console of browser it will have windows object


function chai(){
    console.log(this);
}

chai()
//this is having something in fucntion
/*
<ref *1> Object [global] {
  global: [Circular *1],
  clearImmediate: [Function: clearImmediate],
  setImmediate: [Function: setImmediate] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  clearInterval: [Function: clearInterval],
  clearTimeout: [Function: clearTimeout],
  setInterval: [Function: setInterval],
  setTimeout: [Function: setTimeout] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  queueMicrotask: [Function: queueMicrotask],
  structuredClone: [Function: structuredClone],
  atob: [Getter/Setter],
  btoa: [Getter/Setter],
  performance: [Getter/Setter],
  fetch: [Function: value],
  navigator: [Getter],
  crypto: [Getter]
}
*/

function chai2() {
    let username = "Kishore"
    console.log(this.username);
}
chai2();
// undefined as output it proofs that this only worked with object and not function

console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");

/*********************************************this in arrow functions and normal functions not
 * used.
 */
const chai3 = function() {
    let username = "Kishore"
    console.log(this.username); //undefined
    console.log(this); // some properties
}

chai3();

const chai4 = () => {
    let username = "Kishore"
    console.log(this.username); //undefined
    console.log(this); //{}
}

chai4();

const addTwo = (num1,num2) => {
    return num1 + num2
}
console.log(addTwo(3,4)); //7

//implicit return 
const addThree = (num1) => num1 + 3
console.log(addThree(3)); //6 

//implicit return of a object
const user = () => ({username: "Kishore"})
console.log(user); //{username: "Kishore"}
//without parenthese () objects are not return from functions
//thus if we try this: const user = () => {username: "Kishore"}
//we will get undefined. no return from arrow function

