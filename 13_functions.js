//Functions
// A stack of code that can be used one or many times.

const { use } = require("express/lib/application");

function sayMyName(){
    console.log("A");
    console.log("R");
    console.log("P");                               // Example
    console.log("I");
    console.log("T");
}

sayMyName()


function addTwoNums(num1, num2){                                    //data inside () here are known as parameters, num1 and num2
    console.log(num1 + num2);
    
}

/*addTwoNums(3 + 4)                                                 //Values inside the () are known as arguments
addTwoNums(3 + "4")
addTwoNums("3" + "4")*/
const result1 = addTwoNums(3, 5)
console.log("Result", result1);                                     // undefined bcz fxn not returning the value

function addTwoNums(num1, num2){
    let result = num1 + num2
    return result                                                   //value to be returned, nothing will work typed after return
}
const result = addTwoNums(3, 5)

// A better way t0 write this code
function addTwoNums(number1, number2){
    return number1 + number2           
}
const result2 = addTwoNums(4, 5)
console.log("result2", result2)

//
function loginUserMessage(username){
    return `${username} just logged in`
}
console.log(loginUserMessage("Arpit"))                              // To print the result
//When giving no values
console.log(loginUserMessage(""))
console.log(loginUserMessage(   ))

//To prevent issues like this
function loginUserMsg(username1){
    if(username1 === undefined){
        console.log("Please enter a username");                     // To stop printing-undefined just logged in add 'return' after it
        return
    }
    return `${username1} just logged in`
}
console.log(loginUserMsg())
// better industry relevent way
function loginUserMsg(username1 /*= "sam"*/ ){                    // If value is set here it will be used as default & value provided further will overwrite it
    if(!username1){
        console.log("Please enter a username");                   // To stop printing-undefined just logged in add 'return' after it
        return
    }
    return `${username1} just logged in`
}
console.log(loginUserMsg())
//console.log(loginUserMsg("Arpit"))


//
function calcCartPrice(...numb1){                                           //... is rest operator
    return numb1
}
 console.log(calcCartPrice(200, 300, 500, 100));

 const user = {
    username: "Arpit",
    price: 199
}
//now to pass object as a fxn
function handleObject(anyobject){                                           //anyobject is generic so that diff. object can be passed
    console.log(`Username is ${anyobject.username} and total price is ${anyobject.price}`)
}
//handleObject(user)                                                          // here the object is passed

handleObject({                                                                // here a different object can be passed
    username: "Modi",
    price   : 199
})

// How to pass array as a fxn
const myNewArray = [100, 200, 300, 400]

function returnSecondValue(getArray){
    return getArray[1]
}
//console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([100, 200, 300, 400]));                          // or can be passed like this

