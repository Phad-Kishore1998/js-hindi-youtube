function SetUsername(username){
    //complex DB calls
    this.username = username
    console.log("called");
}

function createUser(username, email, password){
    //JS has not called this SetUsername(username)
    //SetUsername(username) //createUser { email: 'chai@fb.com', password: '123' }
    //only when call is written it is called
    SetUsername.call(this, username)
   
    this.email = email
    this.password = password
}

const chai = new createUser("chai", "chai@fb.com", "123")
console.log(chai); //createUser { username: 'chai', email: 'chai@fb.com', password: '123' }

/*
Main Problem is when we call other object in one Object
SetUserName(name)

//this will get called and executed and once the execution context completed it will be removed.
to prevent that and safe the work done and context variables we use .call and this (to hold refernece)
and apna this send krta hai to hold the context variables.
that function is like mere saman ab apke hue bhaiya jis se call hua tha

SetUsername.call(this, username)
*/