const name = "Arpit"
const repoCount = "45"

//console.log(name + repoCount + " Value");// nobody uses and likes this very often so avoid

//correct way or more modern way

console.log (`Hello my name is ${name} and my repo count is ${repoCount}`);

// another way to declare a string(key value pairs in console; that doesnt mean array)
const gameName = new String('Ngameiy')

console.log(gameName[0]);             // to access key value pairs 
console.log(gameName.__proto__);
console.log(gameName.charAt(3)); //to use the methods
console.log(gameName.indexOf('e')); //to use the methods

const newString = gameName.substring(0, 4); // slicing(substring) of a string(you cant use negetive value; it ignores)
console.log(newString);

const anotherString = gameName.slice(0, 4) // slicing; can use negetive numbers
console.log(anotherString);

const newStringOne = "  arpit   "
// to trim non required charecters like here; spaces
console.log(newStringOne);
console.log(newStringOne.trim());
