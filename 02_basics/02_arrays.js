const marvel_heros = ["thor", " ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

//push done on 1st array
//marvel_heros.push(dc_heros);
//arrays are heterogenous thus array is pushed in array as a element.
console.log(marvel_heros); //[ 'thor', ' ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]

//console.log(marvel_heros[3][1]); //flash

//concat same type of result like push.  
//concat return a new array
//const allHeros = marvel_heros.concat(dc_heros);
//console.log(allHeros); //[ 'thor', ' ironman', 'spiderman', 'superman', 'flash', 'batman' ]

//spread same output as concat 
const all_new_heros = [...dc_heros, ...marvel_heros]
console.log(all_new_heros); //[ 'superman', 'flash', 'batman', 'thor', ' ironman', 'spiderman' ]

//mostly used spread.

//rare case if array in array and array
//flat is used with depth and infinity as default for not telling arrays into arrays
const another_array = [1,2,3, [4,5,6] ,7 , [6,7,[4,5]]]
const real_another_array = another_array.flat(Infinity);
console.log(real_another_array);
/*
[
    1, 2, 3, 4, 5,
    6, 7, 6, 7, 4,
    5
]
*/


//another most used fun
console.log(Array.isArray("Kishore")) //check is Array
console.log(Array.from("Kishore")); // convert to array
/*
[
  'K', 'i', 's',
  'h', 'o', 'r',
  'e'
]
*/

//interesting case
console.log(Array.from({name: "Kishore"}));
//o/p: [] empty array  here we need to mention whether array needed from keys or values


//Returns a new Array from a set of elements

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));
//[ 100, 200, 300 ] as o/p 


