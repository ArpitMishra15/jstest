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

function one(){
    const username = "Arpit"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    //console.log(website);              // in a nested function a child function can access a parent function values but not vice versa
                                         //error bcz the scope of fxn 2 is not available outside it 
    two()                                // executing two
}

one()                                   // executing one


if (true) {
    const user = "anku"
    if (user === "anku"){
        const website = " utube"
        console.log(user + website);

    }
    //console.log(website);

}

//++++++++++++++++++++++++++++++++++++++interesting++++++++++++++++++++++++++++++++++++

//type 1                                            // they both are somewhat same but,

addOne(5)
function addOne(num){
    return num + 1
}


//type 2                                            //the 2nd one will give error if addTwo()is written earlier
addTwo(3)
const addTwo = function(num){                       // bcz in 1st it is declared but here it is declared and also it is held in a variable
    return num + 2
}
