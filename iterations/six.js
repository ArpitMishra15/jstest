const coding = ["js", "ruby", "python", "java", "C++"]

const values = coding.forEach( (item => {
    console.log(item);
    return item                                             // still undefined

}))

console.log(values);                                        // undefined,  use return in scope
// forEach doesnt return any value

//What to do if returning is needed

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//using .filter

const newNums = myNums.filter( (num) => num > 4)               
console.log(myNums);                                      //will not print anything, to print add myNums in a variable
console.log(newNums);

// if scope { } is used in .filter return it 
const newNums2 = myNums.filter( (num) => {
    return num > 4
    
})
console.log(newNums2);

// what if forEach has to be used for returning

const newNumbers = [ ]

newNums.forEach( (num) => {
    if (num > 4){
        newNums.push(num)
    }
} )
console.log(newNums);