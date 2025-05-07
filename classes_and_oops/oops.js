// Object literal
const user = {
    username: "arpit",
    loginCount: "4",
    signedIn: true,

    getUserDetails: function(){
        //console.log(username);                                    // wont work due to context
        //console.log(this.username);                               // 'this' is used for providing context
        console.log(`Username: ${this.username}`);
        console.log(this);                                          // prints the whole object as it is in the context memory
    }
}

//console.log(user.username);
console.log(user.getUserDetails());
// what while console.log(this) would print in global scoep
console.log(this);                                                  // it prints empty {}, as it is global context, this is different inbrowser


// Constructor function                                             // it helps creating new/multiple instances from same objects.

// a method
function User(username, loginCount, isLoggedin){
    this.username = username;                                       // 'this' is used for giving context
    this.loginCount = loginCount;
    this.isLoggedin = isLoggedin;

    return this                                                     // not required but written for verbose code
}

const userOne = new User("Arpit", 4, true)                          //'new' calls constructor fxn, which creates an instnce of the object. Then, inside the constructor, 'this' is used to set  object's data or values
const userTwo = new User("Paras", 3, true)

console.log(userOne);                                               // here the second instance has override the first one, add 'new' to correct code
console.log(userTwo);

//Arrow Functions Cannot Be Used as Constructors.   

