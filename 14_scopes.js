//Scopes                                // {} is the scope of a function, as local/block scope
 
let a = 200
if (true) { 
    let a = 100
    const b = 200
    var c = 300
    console.log("Inner: ", a);
}

console.log(a);                         //a is not available for value outside the scope
//console.log(b);                       //b is not available for value outside the scope
//console.log(c);                       // but c is available outside the scope, though it should not, thats why 'var' is not used