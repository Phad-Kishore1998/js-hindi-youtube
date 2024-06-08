//Array

const myArr = [0, 1, 2, 3, 4, 5]
console.log(myArr[2]);

//Arrays are shallow copy : its a same reference point
//Deep copy are values and different reference point


const myArr2 = new Array(1, 2, 3, 4);
console.log(myArr2);


//methods of Array

myArr2.push(6);
console.log(myArr2);

myArr2.pop();
console.log(myArr2);

//unshift() :=> add the value in front and shift all the elements in the array
//myArr2.unshift(9) // 9 added in myArr2 in the front and shift all other

//shift :=> remove the value from front 
//myArr2.shift() // remove 0 from myArr2 at the front.

//type change in array using .join()
const newArr = myArr2.join();
console.log(newArr); //o/p as a string with commas : 1,2,3,4


//slice returns a section of array
//myArr.slice(1,3); 

//splice return last range is included but original array is changed as spliced range is removed

const myn1 = myArr.splice(1,3);
console.log("Array left after spliced: ", myArr);
console.log(myn1);
