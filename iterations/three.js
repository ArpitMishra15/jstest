// for of
    // ["", "", "", ""]
    // [{}, {}, {}, {}]

// for array
const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    console.log(num);
}

// for string 

const greetings = "Hello World!"
for (const greet of greetings) {
    console.log(`Each char is ${greet}`);
}

// Maps

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('JP', "Japan")
map.set('FR', "France")
map.set("GR", "Germany")
map.set('IN, "India')                               //it wont print bcz maps is a unique value system and same order

console.log(map);

/*for (const key of map) {
    console.log(key)                                // this doesnt print the desired results 
    
}*/

for (const [key, value] of map) {
    console.log(key, ':-' , value);    
}


const myObject = {
    'game 1': 'girl 1',
    'game 2': 'girl 2'
}
for (const [key, value] of myObject){
    //console.log(key, ':-', value);                // error bcz objects are not iterable unlike maps

}

