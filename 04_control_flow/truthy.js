const userEmail = "kishore@ai"

//checking if value is there
if (userEmail) {
    console.log("got user email");
}else {
    console.log("Dont haver user email");
}

/*
falsy value:
false, 0, -0 BigInt (0n), "", null, undefined, NaN 

else all the value are truthy "0" (string zero), "false" (string false),
" " (string space), [] (empty array) , {} (empty object), function (){} 

*/

//Arrayempty

const userEmailArr = []

if(userEmailArr.length === 0){
    console.log("Array is Empty");
}

//object empty

const emptyObj = {}

if(Object.keys(emptyObj).length === 0) {
    console.log("Object is Empty");
}

//Problem if DB response is null or other value
//Kind of fall back if null or undefined value is there.
// Nullish Coalescing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10       //o/p is 5
// val1 = null ?? 10    //o/p is 10
// val1 = undefined ?? 15  //o/p is 15
val1 = null ?? 10 ?? 20   //o/p is 10

console.log(val1);

// Terniary Operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")