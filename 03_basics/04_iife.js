//Immediately Invoked Function Expressions (IIFE)
//use case : Db connection/ separate scope to execute immediately
//to avoid global scope pollution vairbales and all

function chai() {
    console.log(`DB connection`);
}
chai();

//1st () :=> defination 2nd () :=> execution
//; this IIFE should be terminated as well and to not have error we use ';'
(function chai(){
    console.log(`DB via IIFE`);
})(); 

//IIFE arrow function with parameters
((name) => {
    console.log(`${name} connects,DB via Arrow IIFE`);
    //Kishore connects,DB via Arrow IIFE
})('Kishore');
