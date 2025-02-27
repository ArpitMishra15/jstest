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