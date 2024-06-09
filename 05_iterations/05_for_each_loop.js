//array for each with Call Back Function
const coding = ["js", "ruby", "java", "python", "cpp"]

console.log("Using function anonymous: ");
coding.forEach( function (val){
    console.log(val);
} )

/*
Using function anonymous: 
js
ruby
java
python
cpp
*/

console.log("Using Function arrow: ");
coding.forEach( (item) => {
    console.log(item);
} )
/*
Using Function arrow: 
js
ruby
java
python
cpp
*/

console.log("Using Function separate: ");
function printMe(item){
    console.log(item);
}

coding.forEach(printMe)

/*
Using Function separate: 
js
ruby
java
python
cpp
*/

//for each has access to arr index and item
coding.forEach( (item, index, arr)=> {
    console.log(item, index, arr);
} )
/*
js 0 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
ruby 1 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
java 2 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
python 3 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
cpp 4 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
*/


//Array ke ander wale Objects ki property
const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (lang) => {
    console.log("Using lang as For each", lang.languageName);
} )

/*
Using lang as For each javascript
Using lang as For each java
Using lang as For each python
*/