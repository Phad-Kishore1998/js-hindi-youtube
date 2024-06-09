//block scope and Global
let a = 300
if(true) {
    let a = 10
    const b = 20
    var c =30
    console.log("Inner C:", c);
}

//console.log(a); // error is not defined
//console.log(b); // error is not defined
console.log(a); // output printed 300 global scope


function one() {
    const username = "Kishore"
    function two() {
        const website = "youtube"
        console.log(username);
    }
   // console.log(website);
    two();
}
one();
//Kishore
//child function are able to access parent variables


//practice

if(true){
    const username = "Kishore";
    if(username == "Kishore"){
        const website = "youtube"
        console.log(`${username} is learning from ${website}`);
    }
   // console.log(website); //error
}
//console.log(username); //error

// +++++++++++++++++++++++=== Interesting ++++++++++++++++++++++++++++++

function addone (num){
    return num + 1;
}

addone(5);
console.log(addone(5));

//sometimes function expression
//addTwo(5);
//if using above function call 
// we get o/p:=> ReferenceError: Cannot access 'addTwo' before initialization
const addTwo = function(num) {
    return num + 2
}

addTwo(5);
console.log(addTwo(5));