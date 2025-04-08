// if
//( <, >, <=, >=, ==, !=, ===, !== ) are checks

const isUserLoggedIn = true

if (2 != 3){
    console.log("Executed");

}

const temperature = 23

if ( temperature < 27){
    console.log("Temperature is less than 27");
} else{
    console.log("Temperature is greater than 27");
}
console.log("This is Today's Weather");

//Scope
const score = 200
if (score > 90){
    const power = 'fly'
    console.log(`User power : ${power}`);
}
//console.log(`User power : ${power}`)


const balance = 1000

    //if (balance > 500) console.log("run"), console.log("Run2")    // how not to write a code like this

