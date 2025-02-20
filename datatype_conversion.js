let score = "33abc"

console.log(typeof score);
console.log(typeof (score));

let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);

let isLoggedIn = "Arpit"
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log (booleanIsLoggedIn);

let someNumber = 33
let stringNumber = String(someNumber);
console.log(stringNumber);
console.log(typeof stringNumber);

// "33" => 33
// "33abc" => NaN(but its typeof is number)
// "true/false" => 1/0
// 1 => true
// 0 => false
//"" => false
// "Arpit" => true
