//Object literal
/*
const user = {
    username: "Kishore",
    loginCount: 8,
    signedIN: true,

    getUserDetails : function() {
        console.log("Got details from databases");
    }
}
//this is literally a object

console.log(user.username);
console.log(user.getUserDetails());
*/

//having context for this 
//As we know when we go to new funciton new Execution context gets created
//we use data but to give the reference that we are using talking about our variables we use this

const user = {
    username: "Kishore",
    loginCount: 8,
    signedIN: true,

    getUserDetails : function() {
        console.log(`Username: ${this.username}`); //Kishore else for
            //`Username: ${username`} we get the value as undefined error
        console.log(this) //gives the object details entirely
        console.log("Got details from databases");
    }
}

//by default in the browser this console will give the o/p as window
//but locally or on IDE we get {} as on node.js


//constructor function for creating same type of functions to create many objects
const promiseOne = new Promise()
const date = new Date()

//here new is used in creation of new context.
function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;
    return this
    //even without giving the above line
    //its implicitly defined that this is return
}

const userOne = User("Kishore", 12, true)
console.log(userOne); //object details and other functions
const userTwo = User("ChaiAurCode", 11, false)
console.log(userOne); //object detials of userTwo even though we are calling one user
// console.log(userTwo); 

//*++++++++++++++++++++++++++To avoid this overlapping of the details in objects we use new
const userOneOne = new User("Kishore", 12, true)
console.log(userOneOne); //object details and other functions
const userTwoTwo = new User("ChaiAurCode", 11, false)
console.log(userOneOne); //object details and other functions of user one only

console.log(userOneOne.contructor); // it gives o/p : Function: User
// its reference to the function

//new whenever is used a new empty object is created {}
//constructor functions is called and all the arguments are added in the empty object created.
//this is used to injected on the object
//we get the object created with arguments separately.

