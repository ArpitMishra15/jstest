//Numbers and maths for js
const score = 450
console.log(score);

const balance = new Number(200);
console.log(balance);                       // here the output is printed in diff way

console.log(balance.toString().length);     // lenth of the input number(treated as a string)
console.log(balance.toFixed(2));            // for precision value

const otherNumber = 24.896643
console.log(otherNumber.toPrecision(3));    // for precision and rounding off

const hundreds = 10000000
console.log(hundreds.toLocaleString('en-US'));  // for easy reading large nums, using commas(US type)

//maths
console.log(Math);
console.log(Math.abs(-3));                             // prints absolute value
console.log(Math.round(6.5));                          // for general rounding off
console.log(Math.ceil(4.5));                           // for choosing larger integer for decimel
console.log(Math.floor(5.6));                          // for choosing smaller integer for decimal
console.log(Math.sqrt(625));                           // for getting sqr root of a number
console.log(Math.cbrt(125));                           // for getting cbrt of a number
console.log(Math.min(4, 3, 5, 1));                     // for min. value in an array
console.log(Math.max(43, 65, 21));                     // for max. value in an array
    
console.log(Math.random());                            // for(random)any value bw 0 & 1
console.log(Math.random()*10);                         // for random value of digit
console.log(Math.random()*10 + 1);                     // for values >0
console.log((Math.random()*10) + 1);                   // to avoid sequence errors
console.log(Math.floor(Math.random()*10) + 1);         // with an integer value rounding off to floor

// for max & min

const min = 10
const max = 20
console.log(Math.floor(Math.random() * (max - min + 1) + min)); // for integers bw 10 and 20
