const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//const newNumers = myNumers.map( (nums) => nums + 10)
    // or
//const newNumers = myNumers.map( (nums) => { return nums + 10})

//chaining - using map and/or filter in chain

const newNumers = myNumers.map( (nums) => nums * 10 )                   //updated value to be passed on to the chain
                                .map( (nums) => nums +1 )               //previous map/filter value is applied 
                                    .filter((nums) => nums >= 40)       //previous map/filter value is applied 
console.log(newNumers);

