const coding = ["js", "ruby", "java", "python", "cpp"]

coding.forEach( function (value) {                          // callback doesnt have a fxn name
    console.log(value);


})

//other methods
// a
coding.forEach( (item) => {
    //console.log(item);
})

// b
function printMe(value){
    console.log(value);
}
// passing on the above fxn 
coding.forEach(printMe)                                        // only reference is given, not execution, it will get printed



coding.forEach( (item, index, arr) => {
    console.log(item, index, arr);                              // for various other things
}) 

const myCoding = [
    {
        languageName: "JavaScript",
        fileName: "js"
    },
    {
        languageName: "Python",
        fileName: "py"
    },
    {
        languageName: "Java",
        fileName: "java"
    },
    
]

myCoding.forEach( (item) =>{
    console.log(item.languageName);                         // accessing objects inside array and printing value
})

