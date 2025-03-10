// Objects
//singleyon = one of its kind when made from constructor, when declared from literals it deosnt create

// Object Literals
//Object.create                                         // =>Constructor method

// Objects literals
const mySym = Symbol ("key1")
const JsUser = {
    name: "Arpit",
    //key //value
    age : 18,
    email: "hoipo@gmail.com",
    isLoggedIn : "False",
    lastLoginDays: ["Monday", "Saturday"],
    "User Name": "warpspeed",
    [mySym]: "key1"
}
//Methods
console.log(JsUser.email)                               // Not always the correct or useful method
console.log(JsUser["email"])
                                                        // 1) create a Usr Name tablerow
console.log(JsUser["User Name"])                        // correct way for an object table as it takes the key as a string

console.log(JsUser[mySym]);                             // It will be printed but the datatype will be string insted of symbol
//To make symbol's datatype into a symbol from string, but the key in []

// to change any data
JsUser.email = "hoimoi@yahoo.com"
console.log(JsUser)

//Object.freeze(JsUser)                                   // To freeze any new edit
JsUser.email = "foihoi@tillu.com"
console.log(JsUser)

JsUser.greeting = function(){
    console.log("Hello Js User");
}

console.log(JsUser.greeting);                           // not executed only referance is present

JsUser.greetingTwo = function(){
    console.log(`Hello Js User, ${this.name}`);
}
console.log(JsUser.greeting());    
console.log(JsUser.greetingTwo()); 