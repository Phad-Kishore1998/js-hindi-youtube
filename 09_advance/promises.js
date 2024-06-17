/*
The Promise object represents the eventual completion (or failure)
 of an asynchronous operation and its resulting value.

Programming calculation and interpretation is faster but 
file takes time or network calls and many more are used in async programming 
in modern terms we use promises.
Future promises like in mobile audio recording camera

Promises creation and then consuming is required.
*/

//fetch('https://something.com').then.catch.finally

/*
#Promise creation : 

A Promise is an object representing the eventual 
completion or failure of an asynchronous operation. 
Since most people are consumers of already-created promises, 
this guide will explain consumption of returned promises before explaining how to create them.


earlier Q and Bluebird were used in place of promise
before ES6

*/


/*
//Creation
const promiseOne = new Promise(function(resolve,reject) {
    //Do an async task
    //DB calls, cryptograpghy, network call
    setTimeout(function(){
        console.log('Async task is complete');
    }, 1000)
})

//Consumption : connection with resolve .then
promiseOne.then(function(){
    //this function is automatically have the returned parameter from PromiseOne
    console.log("Promise Consumed");
})

//O/p is :=> Async task is complete
    //here no o/p of Promise Consumed as its not linked with consumption 

//we use resolve for this
*/

const promiseOne = new Promise(function(resolve, reject) {
    setTimeout(function(){
        console.log('Async task 1 is complete');
        resolve() //linking done
    }, 1000)
})

//Consumption :
promiseOne.then(function(){
    console.log("Promise 1 Consumed");
})

//o/p : Async task is complete 
//Promise Consumed


//Alternative way to create and consume promise
new Promise(function(resolve, reject) {
    setTimeout(function(){
        console.log('Async Task 2 is complete');
        resolve();
    }, 1000)

}).then(function(){
    console.log('Async 2 is resolved');
})

//very easy then xhr we studied in 01_API requests.html


//three Promise: Data passing after the action
const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "chai", email:"chai@example.com"})
        //we need to transfer this data to then after reolve
    }, 1000)
})

//object is based
promiseThree.then(function(user){
    console.log(user);
    //o/p: { username: 'chai', email: 'chai@example.com' }
})


//Promise Four Discussion about rejection
const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if(error){
            resolve({username: "Kishore", password: "123"})
        }else{
            //here rejection is error
            reject('Error: Something went wrong')
        }
    }, 1000)
})

// promiseFour.then(function(){

// })

/*
//callback hell
promiseFour.then((user) => {
    console.log(user);
    return user.username
})

//with this we can not get the data so we use Chaining
console.log(username); // not defined ERROR in console
*/

//Chainning 
//we can handle error here as well when error in promiseFour is false
//we catch the error
//Also, we have finally after some time it is executed even if resolve or rejected
promiseFour
.then((user) => {
    console.log(user); //{ username: 'Kishore', password: '123' }
    return user.username
})
.then((username) => {
    console.log(username); //Kishore
    //username is printed
})
.catch(function(error){
    console.log(error);
})
.finally(() => console.log(`The promise is either resolved or rejected`))
// /The promise is either resolved or rejected



const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false
        if(error){
            resolve({username: "Kishore", password: "123"})
        }else{
            //here rejection is error
            reject('Error: Something went wrong')
        }
    }, 1000)
})

//+++++++++++++++++++++++++++++++++++++++++++======asycn VS .then
//promiseFive.then

//gracefully catch is not handled async wait can't handled error directly
async function consumePromiseFive() {
    try{
        const response = await promiseFive
        console.log(response);
    } catch(error){
        console.log(error); //Error: Something went wrong

    }
}

consumePromiseFive()
//[Function: Error] { stackTraceLimit: 10 }


async function getAllUsers() {

    try{
        //as we are fetching it will requrie some time
        const response = await fetch ('https://api.github.com/users/Phad-Kishore1998')
           // console.log(response); //printing response
        //response conversion
        const data =  await response.json(); //await required as conversion takes time
        console.log(data);
        //Promise { <pending> }
        //o/p: no output if we use only above code

        //without await on conversion we dont have result but with await we get result
    }
    catch(error){
        console.log("E: ", error);
    }
}

getAllUsers();


//Same function into .then and .catch
fetch('https://api.github.com/users/Phad-Kishore1998')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => {
    console.log(error);
})

//best part of .then is no await required as chaining 1st then finishes then only 2nd then 
//executed


/*++++++++++++++++++++++=MAJOR ISSUE: 
Git detials are printed first then async task even though we have called them before.
*/

/*
                fetch : browser based apis in Node required for use of fetch in Node
    Diagram : Priority Queue of the Fetch in call stack
    In 2015, the Fetch API was launched as a modern successor to XMLHttpRequest, 
    and it has subsequently become the de facto standard for making asynchronous 
    calls in web applications. One significant advantage Fetch has over 
    XMLHttpRequest is that it leverages promises, allowing for a simpler and 
    cleaner API while avoiding callback hell.

Though the Fetch API has been around for a while now,
it wasn’t included in the Node.js core because of some limitations. 
In a question answered by one of Node’s core contributors, 
it was noted that the browser’s Fetch API implementation is dependent 
on a browser-based Web Streams API and the AbortController interface 
(for aborting fetch requests), which wasn’t available in Node until recently. 
As such, it was difficult to choose the best approach to include it in the Node core.

Long before the addition of the Fetch API, 
the request module was the most popular method for 
making HTTP requests in Node. But the JavaScript ecosystem at large quickly evolved, 
and newly introduced patterns made request obsolete. 
A crucial example here is async/await; 
there was no provision for this in the request API, 
and the project was later deprecated due to these limitations.

//IMP LINE
A fetch() promise only rejects when a network error is encountered
(which is usually when there's a premission issue or similar).
A fetch() promise does not reject on HTTP errors(404,etc).
Instead, a then() handler must check the Response.ok and/or Response.status properties.


// space in "C ontent-Type"
const headers = {
  'C ontent-Type': 'text/xml',
  'Breaking-Bad': '<3',
};
fetch('https://example.com/', { headers });


fetch('https://example.com/', {
  method: 'GET',
  body: new FormData(),
});

*/