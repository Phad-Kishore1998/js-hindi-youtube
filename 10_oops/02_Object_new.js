function multiplyBy5(num){
    return num*5
}

multiplyBy5.power = 2

console.log(multiplyBy5(5)); //25

//function is object as well so we do this as well.
console.log(multiplyBy5.power); //2
//function -> object -> null , function prototype inheritence seen here
//object ka prototype null he hota hai so {}
console.log(multiplyBy5.prototype); //{}

function createUser(username, score){
    //this is also linked to prototype
    this.username = username
    //this. refers to current context
    this.score = score
}

//declaring functions for prototype of functions
//createUser having proto having increment function 

createUser.prototype.increament = function() {
    //how to find kis ka score increase hoga
    score++;
    //this : jis ne bulaya hai uska kam kr do
    this.score++;
}

//const chai = createUser("chai", 25)
//const tea = createUser("tea", 250)

//this : jis ne bulaya hai uska kam kr do
createUser.prototype.printMe = function () {
    console.log(`score is ${this.score}`);
}

/*
we never call the proto like this
myArray.prototype.map
we directly call myArray.map
what js says is i will do the search for the prototype you dont do it
*/

/*
//so, we do
chai.printMe() // it will give the error can not read the property of undefined.

//so chai and tea object not working will require a new keyword
*/

const chaiNew = new createUser("chai", 25)
const teaNew = new createUser("tea", 250)

chaiNew.printMe() //score is 25

/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype 
property of the constructor function. 
This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments 
and this is bound to the newly created object. 
If no explicit return value is specified from the constructor, JavaScript assumes this,
the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.
