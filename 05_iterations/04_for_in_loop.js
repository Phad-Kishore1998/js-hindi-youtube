const myGame = {
    game1: 'NFS',
    game2: 'Spiderman'
}

//for (const [key, value] of myGame) {
    //console.log(key, ':-', value);   
//}
// myObject is not iterable for key and value

const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObject) {
    console.log(`${key} shortcut is for ${myObject[key]}`);
}
/*
js shortcut is for javascript
cpp shortcut is for C++
rb shortcut is for ruby
swift shortcut is for swift by apple
*/


//arrays ki zero se hoti hai .. and for in key we get 0,1,2,3
//for of key is value

const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    console.log(key);
    console.log(programming[key]);
}


//map with for in
//Map is not iterable using for in
const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")

for (const key in map) {
    console.log(key);
}