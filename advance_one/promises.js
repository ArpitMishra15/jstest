const { json, response } = require("express");

//Promises
const promisesOne = new Promise(function(resolve, reject){
    //Do an async task->
    // DB calls, cryptography, network
    setTimeout(function(){
        console.log('Async task completed');
        resolve();                                                      
    },1000)
})
promisesOne.then(function(){
    console.log("Promises consumed");
})

//Method 2
const promiseTwo = new Promise( (resolve, reject) => {                  // Arrow function
    setTimeout( () => {
        console.log("Async 2 task completed");
        resolve()
    }, 2000)
}).then(() => {
    console.log("Async 2 resolved");
})

//Method 3
const promiseThree = new Promise(function(resolve, reject) {
    setTimeout(function(){
        resolve({
            username: "seekDiscomfort",
            email: "seekDiscomfort@gmail.com"
        });
    }, 3000)
}).then(function(user){
    console.log(user);
})

// Method 4
const promiseFour = new Promise(function(resolve, reject) {
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "Arpit", password: "1234"});
        } else {
            reject("ERROR: Something Went Wrong");
        }
    }, 4000)
})
promiseFour.then((user) => {
    console.log(user);
    return user.username
}).then((username) => {                                          // .then((username) is chaining, it takes the value returned from previous/above chain
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(() => {
    console.log("The promise is either resolved or rejected");
})

// Method 5
const promiseFive = new Promise(function(resolve, reject) {
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "JS", password: "1234"});
        } else {
            reject("ERROR: JS error");
        }
    }, 5000)
})

async function consumePromiseFive() {
    try {
        const response = await promiseFive
        console.log(response);
        
    } catch (error) {
        console.log("JS ERROR")
    }
}
consumePromiseFive()                                                    //to execute.

// Method 6
async function getAllUsers(){
    // const response = await fetch('https://api.github.com/users/hiteshchoudhary')
    // const jsonData = await response.json()
    // console.log(jsonData);

    //or

    // try {
    //     const response = await fetch('https://api.github.com/users/hiteshchoudhary')
    //     const jsonData = await response.json()
    //     console.log(jsonData);
    // } catch (error) {
    //     console.log("E: ", error);
        
    // }

//}

//getAllUsers()
}

    //,then .catch method
fetch('https://api.github.com/users/hiteshchoudhary')                           // directly fetching
.then((response) =>{
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => {
    console.log(error);
})