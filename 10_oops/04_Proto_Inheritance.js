const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS Assignment',
    fullTime: true,
    __proto__: TeachingSupport //borrowing properties of other Object
}

//different objects wants to exchange the properties
Teacher.__proto__ = User //prototype inheritance

//modern syntax:
Object.setPrototypeOf(TeachingSupport, Teacher) //teachingSupport have the properties of Teachers


//truelength super Power
String.prototype.truelength = function () {
    console.log(`${this}`); //ChaiAurCode 
    console.log(`True length is: ${this.trim().length}`); //True length is: 11
}

let anotherString = "ChaiAurCode    "
anotherString.truelength()
//console.log(anotherString.truelength())

"kishore".truelength() //kishore

