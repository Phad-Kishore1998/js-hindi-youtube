//Objects using constructor and singleton

const tinderUser = new Object();
console.log(tinderUser);
//o/p {} : empty object

tinderUser.id ="123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

console.log(tinderUser);
//{ id: '123abc', name: 'Sammy', isLoggedIn: false }

//object in object : Nesting
const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Kishore",
            lastname: "P"
        }
    }
}

console.log(regularUser.fullname.userfullname);
//o/p: { firstname: 'Kishore', lastname: 'P' }

//incase fullname is not present for that we have '?' 
console.log(regularUser.fullname?.userfullname);
//o/p: { firstname: 'Kishore', lastname: 'P' }


//combining two objects

const obj1 = {1: "a", 2: "b"} 
const obj2 = {3: "c", 4: "d"}

const obj3 = {obj1, obj2}
console.log(obj3);
//{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } }
//issue of object inside objects and not concating the keys and value pairs

const obj4 = Object.assign(obj1, obj2);
console.log(obj4);
//{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

//one can use {} as target and then all other as source
const obj5 = {5: "e", 6: "f"}
const myObj = Object.assign({}, obj1, obj2, obj5);
console.log(myObj);
//{ '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'e', '6': 'f' }
//here {} as target and rest obj1, obj2 and obj3 is sources

//most used is
myfinaObj = {...obj1, ...obj2}
console.log(myfinaObj);
//{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

console.log(Object.keys(myfinaObj));
//keys as a array : [ '1', '2', '3', '4' ]
console.log(Object.values(myfinaObj));
//[ 'a', 'b', 'c', 'd' ] values as array
console.log(Object.entries(myfinaObj));
//[ [ '1', 'a' ], [ '2', 'b' ], [ '3', 'c' ], [ '4', 'd' ] ]

//checking if object is having a properties
console.log(tinderUser.hasOwnProperty('isLoggedIn'));
//true


//Destructing 
const course = {
    name: "chai with code",
    courseInstructor: "Hitesh",
    mode: "youtube"
}

console.log(course.courseInstructor);
//here we are using course.courseInstructor again and again if there would be
//many course objects for that we de structure the value of objects

const {courseInstructor} = course
console.log(courseInstructor);
//now courseInstructor will have the value of course Instructor from course object

//if we want some other name
const {courseInstructor : instructor} = course
console.log(instructor);

//all the above three console gave o/p: hitesh