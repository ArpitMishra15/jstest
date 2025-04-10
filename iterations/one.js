// for

for (let i = 0; i < 11; i++) {
    const element = i;
    if (element == 5) {
        console.log("5 is the best number");
    }
    console.log(element);
}
//console.log(element)                                              //as element is not available outside scope, error persists

for (let i = 0; i <= 5; i++) {
    console.log(`Outer loop value ${i}`);
    for (let j = 0; j < 4; j++) {
      console.log(`Inner loop value ${j} and inner loop ${i}`);
      //console.log(i + '*' + j + '=' + i*j );                      // prints table
        
    }
    
}

let myArray = ["Superman", "Batman", "IronMan", "Spiderman" ]
console.log(myArray.length);
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element);

}


// break & continue

for (let index = 1; index <= 20; index++) {
    if (index == 6) {
        console.log("Detected 6");
        //break
        //continue
    }
    console.log(`Value of i is ${index}`);
}

