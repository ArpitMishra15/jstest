// for

for (let i = 0; i < 11; i++) {
    const element = i;
    if (element == 5) {
        console.log("5 is the best number");
    }
    console.log(element);
}
//console.log(element)                                  //as element is not available outside scope, error persists

for (let i = 0; i <= 5; i++) {
    console.log(`Outer loop value ${i}`);
    for (let j = 0; j < 4; j++) {
      console.log(`Inner loop value ${j} and inner loop ${i}`);
        
    }
    
}