//console.log(2 > 1);   //true 
//console.log( 2 >= 1 ); // true

//all these != == comparison are easy
//but challenge is for different dataTypes comparisons

console.log("2" > 1);
console.log("02" > 1);

//typeScript does not allow this comparision for different types

console.log(null > 0); //false
console.log(null == 0); //false
console.log(null >= 0); //true

/*
The reason is that an equality check == and comparisons > < >= <= work differently.
comparisons convert null to a number treating it as a 0
thats why (3) null >= 0 is true
(1) null > 0 is false 
*/

//Same undefined works differently
console.log(undefined == 0); //false
console.log(undefined > 0); //false
console.log(undefined < 0); //false


// ==== it checks the value as well as the datatype as well
console.log("2" === 2); //false as dataType is different


