//singleton // constructor a singleton
//Object.create

//object literals
const JsUser = {
    name: "Kishore",
    "full name": "Kishore P",
    age: 18,
    location: "Pune",
    email: "kishore@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

//by default keys are string

console.log(JsUser.email);
console.log(JsUser["email"]);

//if key is "full name" having space in between the key value 
//we can not acces it using '.' we have to use []

console.log(JsUser["full name"]);


//imp question
//using symbol in object as key

const mySym = Symbol("keys1")
const mySym2 = Symbol("keys2")
const JsUser2 = {
    name: "Kishore",
    mySym: " mykey1",
    [mySym2]: " mykey2",
    "full name": "Kishore P",
    age: 18,
    location: "Pune",
    email: "kishore@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

console.log(JsUser2.mySym);
//o/p  mykey1 but the data type of this key value pair is still not symbol

console.log(typeof JsUser2.mySym);
//string
console.log(JsUser2[mySym2]);


JsUser.email = "Kishore@chatgpt.com"
console.log(JsUser);

//freezing the object: no errors but no changes propagates
Object.freeze(JsUser);

JsUser2.greeting = function () {
    console.log("hello JS user");
}

JsUser2.greeting2 = function () {
    console.log(`hello JS user, ${this.name}`);
}

console.log(JsUser2.greeting());
//undefined
console.log(JsUser2.greeting2());


