// while loop

let index = 0
while ( index <=10 ) {
    console.log(`Value of index is ${index}`);
    index = index + 2
}


// while loop for array

let myArray = ["Spiderman", "Hulk", "Ironman"]
let arr = 0

while (arr < myArray.length) {
    console.log(`Here I present you ${myArray[arr]}`);
    arr = arr + 1
}


// do-while loop                                              // code executes then condition is checked

let score = 1
do {
    console.log(`Score is ${score}`);
    score++
} while (score <= 10);