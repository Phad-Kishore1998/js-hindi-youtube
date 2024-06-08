//Date Object 1 Jan 1970 is calculated and we get millisecond also.

let myDate = new Date();
console.log(myDate); //2024-06-08T10:22:05.300Z
console.log(myDate.toString()); //Sat Jun 08 2024 10:22:32 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toLocaleString()); //6/8/2024, 10:23:05 AM
console.log(typeof myDate); //object


let myCreatedDate = new Date(2023, 0 , 23);
console.log(myCreatedDate.toDateString()); // Mon Jan 23 2023
// in JS month start from 0

let myCreatedDate2 = new Date("2023-01-14") //YYYY-MM-DD
console.log(myCreatedDate2.toDateString()); //Sat Jan 14 2023

let myTimeStamp = Date.now();
console.log(myTimeStamp); //1717842393886 mili seconds
console.log(Math.floor(myTimeStamp / 1000)); //1717842490 seconds

//Methods in Date(object)

let newDate = new Date()
console.log(newDate.getMonth()); //5 for may
console.log(`Day of today: ${newDate.getDay()} and Time is: ${newDate.toLocaleString()}`);

//Date Locale String Custimazations for Sun or Sunday or like this
newDate.toLocaleString('default', {
   weekday: "long", 
   month: "short"
})

console.log(newDate.toLocaleString('default', {
    weekday: "long", 
    month: "short"
 }));
//Jun Saturday

