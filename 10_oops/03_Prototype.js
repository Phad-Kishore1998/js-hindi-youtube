let myName = "kishore       "

//console.log(myName.truelength); //removing the empty values and getting the true length of string
//but truelength is not a function of myName 

//solution is :=> myName.trim().length
//probelm: we want it for all the string and repeating this same again and again

//creation of method
let myHero = ["thor", "spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function (){ console.log(`Spidy power is ${this.spiderman}`);}
}

//heroPower.kishore(); //kishore is not a function

/*+++++++++++++++++++++++++++++++=== injecting functions in Object
how to inject by from our end
since all the array, string and functions ultimately goes to Object
adding a function to Object
*/

Object.prototype.kishore = function () {
    console.log(`kishore is present in all objects`);
}

heroPower.kishore(); //kishore is present in all objects

//according to theory myHeros array will have the function as property as well.
myHero.kishore(); //kishore is present in all objects
