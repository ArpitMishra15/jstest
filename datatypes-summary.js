// Primitive
// 7 types: String, uNmber, Boolean, null, Undefined, Symbol, BigInt

// Reference (Non-primitive)
// types: Arrays, Functions, Objects

// Primitive
const score = 100
const scoreValue = 100.3
 
const isLoggedIn = true
const outsideTemp = null
let userEmail;

//symbol, even after same values wont be same
const id = Symbol('123')
const anotherId = Symbol('123')             //dataype of symbol is "symbol"

console.log( id === anotherId);

// Reference (Non-primitive)
const heroes = ["shaktimaan", "Naagraj", "Doga"] //Arrays in sq brackets

let myObj = {
        name : "Arpit",
        age  : 22,                              // Objects in curly brackets

}

const myFunction = function(){                  // Function can also be used as variables in js
    console.log("Hello World!");
}

console.log(typeof outsideTemp);                

                //non primitive's datatype is always function, 
                // function's datatype is object function
