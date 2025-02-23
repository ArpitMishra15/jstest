// Stach(for primitive) and Heap(for non-primitive) are type of memories in JavaScript
//Whenever stack memory is used we get the copy of variable declared when used
//When heap memory is used we get the reference of the original value

let mySpaceName = "spacefieldsman"
let anothername = mySpaceName

anothername = "spaceflightcrew1"

console.log(mySpaceName)
console.log(anothername)
// values will be different as the memory here is stack memory for primitive datatype

let userOne = {
    email: "one@mail.in",
    upi: "user@okhdfc"
}
let userTwo = userOne

userTwo.email = "yuser@ybl"

console.log(userOne.email);    
console.log(userTwo.email);
//both will have same value as the memory here is heap memory for npn-primitive datatype