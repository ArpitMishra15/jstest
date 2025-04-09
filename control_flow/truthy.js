const userEmail = "a@gmail.com"
 if (userEmail) {
    console.log("Got user email");
 } else {
    console.log("Don't have user email");
 }


 // falsy values
 // false, 0, -0, BigInt 0n, "", null, undefined, NaN 

 // truthy values
 // true, "0", 'false', " ", [], {}, function(){}, 

 const emptyObj = {}

 if (Object.keys(emptyObj).length === 0) {
   console.log("Obj is empty");
 }

 //Nullish Coalescing Operator (??): null  undefined

 let val1;
 let val2;
 let val3;
 let val4;
 val1 = 5 ?? 10
 val2 = null ?? 12
 val3 = undefined ?? 13
 val4 = null ?? 11 ?? 20
 console.log(val1); 
 console.log(val2);                    // does safety check and avoids null value
 console.log(val3);
 console.log(val4);

 // Terniary Operator

 // Condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("Price less thab 80") :  console.log("Price greater than 80")


