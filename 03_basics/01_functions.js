function sayMyName() {
    console.log("K");
    console.log("I");
    console.log("S");
    console.log("H");
    console.log("O");
    console.log("R");
    console.log("E");
}
sayMyName // reference of function
console.log(sayMyName); // [Function: sayMyName]
//sayMyName() // execute

//parameters of the functions in defination
function addTwoNumbers(num1, num2) {
    console.log(num1+num2);
}

addTwoNumbers() //NaN
addTwoNumbers(3, 4); //7
addTwoNumbers(3, "4") //string conversion 34
addTwoNumbers(3, null) // arguments while calling function declartion

const result = addTwoNumbers(3, 4);
console.log("Result : ", result);
//Result :  undefined as no value is returned in function


function loginUserMessage(username) {
    return `${username}, Welcome!`
}

console.log(loginUserMessage("Kishore"));
//Kishore, Welcome! as O/p

//If no value is passed it will give undefined
console.log(loginUserMessage());
//undefined, Welcome!

//we can avoid undefined by giving default value to the Function


//shopping cart : user add the products 
//rest operator : khule mai elements ko combine kro
function calculateCartPrice(...num1) {
    return num1
}

console.log(calculateCartPrice(200, 400, 500))
//num1 will be a [ 200, 400, 500 ] array


function calculateCartPrice2(val1, val2, ...num1) {
    return num1
}

console.log(calculateCartPrice2(200, 400, 500, 2000))
//[ 500, 2000 ] in num1 and val1 and val2 each get one.


const user = {
    username: "kishore",
    price: 199
}

function handleObject(anyObject) {
    console.log(`User name is: ${anyObject.username} and Price: ${anyObject.price}`);
}

console.log(handleObject(user));
//User name is: kishore and Price: 199
//undefined as no return type


const myNewArray = [200, 400, 600]
function returnSecondValue(getArray) {
    return getArray[1];
}
console.log(returnSecondValue(myNewArray));
//400 