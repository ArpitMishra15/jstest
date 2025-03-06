//Arrays

const myArr = [0, 1, 3, 4, 5, 6]    //arrays in square brackets containing elements and are resizable and not associative
// Other methods of declaring arrays
const myheroes = ["shaktiman", "hanuman", "nagraj" ] 
const myarr2 = new Array(0, 1, 2, 3, 4)

console.log(myArr[0]);

// Array methods
myArr.push(7)                                   // to add new element
myheroes.push("spiderman")
console.log(myheroes);
console.log(myArr);

myArr.pop()                                     // to remove the last element 
console.log(myArr)

myArr.unshift(8)                                // to add new element in the starting
console.log(myArr);

console.log(myheroes.includes("spiderman"));    //to be used as for asking in boolean if element is present
console.log(myheroes.indexOf("nagraj"));        // to be used to ask the index of the element
console.log(myArr.indexOf(14));                 // if element not present output will be -1

const newArray = myArr.join()

console.log(newArray);                          // joins the array into string
console.log(typeof newArray);

//Slice and Splice
console.log("A", myArr);

const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("B", myArr)

const myn2 = myArr.splice(1, 3)
console.log(myn2);