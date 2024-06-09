const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//adding 10 to all number
//autoamtically return values
const newNums = myNumbers.map( (num) => num + 10)
console.log(newNums);
/*
[
  11, 12, 13, 14, 15,
  16, 17, 18, 19, 20
]
*/

//scope opening requires return
const newNums2 = myNumbers.map( (num) => { return num + 10 })
console.log(newNums2);
//same o/p only with scope

//chaining passing one result to other
const newFinalNum = myNumbers
                    .map((num) => num * 10)
                    .map((num) => num + 1)
                    .filter((num) => num >= 40);

console.log(newFinalNum);

/*
[
  41, 51,  61, 71,
  81, 91, 101
]
*/