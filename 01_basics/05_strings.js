// string single or double one at a same.

const name = "Kishore"
const repoCount = 50

console.log(name + repoCount + " Value");

//not good with todays trean use backticks for current trend
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('kishoreP');
// its has a lot feature like length and prototype methods as well.

console.log(gameName[0]); // k
console.log(gameName[1]); // i
console.log(gameName.__proto__); // {}

console.log(gameName.length);
console.log(gameName.toUpperCase());

//all the above functions or manipulation no value of gameName is altered as we are using copying

//here we cant give negative values
const newStringSub = gameName.substring(0,4);
console.log(newStringSub);

//slice can be used negative valeus
const newStringSlice = gameName.slice(-8,5);
console.log(newStringSlice);


