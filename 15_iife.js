// Immediately Invoked Function Expression (IIFE)

// to protect current function from global scope's pollution(variables, declaration) which can affect it.

(function chai (){
    console.log(`DB CONNECTED`);

})();                                                 // ; must be used as it tells the IIFE to stop the context from here, otherwise it will show error

(function chai (){                                    // Known as NAMED IIFE
    console.log(`DB CONNECTED 2`);

})();
// Can also be written as, known as SIMPLE IIFE
( ()=>{
    console.log(`DB CONNECTED 3`);

})();

// If it requires a variable
( (name)=>{
    console.log(`DB CONNECTED 4 ${name}`);          // (name) is parameter, (`Arpit`) is argument

})(`Arpit`)