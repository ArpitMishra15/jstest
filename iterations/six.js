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

//
const books = [
    {  title: 'Book One', genre: 'Fiction', publish: 1981,
        edition: 2004 },
    {  title: 'Book Two', genre: 'Non-Fiction', publish: 1992,
        edition: 2008 },
    {  title: 'Book Three', genre: 'History', publish: 1999,
        edition: 2007 },
    {  title: 'Book Four', genre: 'Non-Fiction', publish: 1989,
        edition: 2010 },
    {  title: 'Book Five', genre: 'Science', publish: 2009,
        edition: 2014 },
    {  title: 'Book Six', genre: 'Fiction', publish: 1987,
        edition: 2010 },
    {  title: 'Book Seven', genre: 'History', publish: 1986,
        edition: 1996 },
    {  title: 'Book Eight', genre: 'Science', publish: 2011,
        edition: 2016 },
    {  title: 'Book Nine', genre: 'Fiction', publish: 1981,
        edition: 1989 },
];

let userBooks = books.filter( (bks) => bks.genre === 'History' )              // used let bcz const will declare it as a constant

userBooks = books.filter( (bks) => bks.publish >= 1990)

// for 2 filters like history and after 1980
userBooks = books.filter( (bks) => bks.publish >= 1900 && bks.genre === 'History') 


console.log(userBooks);

