const myObject = {
    js: "javascript",
    cpp: "C++",
    rb: "Ruby",
    swift: "Swift by apple"
}

// for object we use for in loop instead of for of (it has other uses too)

for (const key in myObject) {
    //console.log(key);                     //only prints key
    //console.log(myObject[key])
    console.log(`${key} for ${myObject[key]}`); 
    
}

//for array

const programming = ["js", "ruby", "python", "java", "C++"]

for (const key in programming) {
    //console.log(key);                                   // Array has keys as default 0,1....
    console.log(programming[key]);
   
}                                                         // objects was designed to have give independent keys

//Can we use for in loop in maps??

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('JP', "Japan")
map.set('FR', "France")
map.set("GR", "Germany")

for (const key in map) {
    console.log(key)
    
}


