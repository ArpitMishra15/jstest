const marvelHeroes = ["IronMan", "Spiderman", "Dr. Strange"]
const dcHeroes = ["Batman", "Superman", "Aquaman"]
const allHeroes = marvelHeroes.push(dcHeroes)

console.log(allHeroes);
console.log(allHeroes[3]);
// here when push used the whole array got added as a single element and not one each, push only pushes to existing arrays
// to add one by one

const myNewHeroes = marvelHeroes.concat(dcHeroes);
console.log(myNewHeroes);                           //concat returns a new array, containing all the elements one by one

// for a more better and industry relevant way
const allNewHeroes = [...marvelHeroes,...dcHeroes]  // it spreads all the elements
// and
const realHeroes = myNewHeroes.flat(Infinity);
console.log(realHeroes);

//to check if array
console.log(Array.isArray("Arpit"));                // will be false

console.log(Array.from("Arpit"))                    // to make it an array

console.log(Array.from({Name: "Arpit"}));           // when wont be able to convert it will give an empty bracket

//New
const score1 = 100
const score2 = 200
const score3 = 300

console.log(Array.of(score1, score2, score3));      // returns a new value as arrays from the set of arrays

