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