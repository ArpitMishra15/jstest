// Dates and Time in Js
let myDate = new Date()

console.log(myDate.toString());             //to fetch current date and time
console.log(myDate.toDateString());         // to fetch only date
console.log(myDate.toISOString());          // date in ISO format
console.log(myDate.toJSON());               // for json
console.log(myDate.toLocaleDateString());   // to convert date into string by specified locale
console.log(myDate.toLocaleTimeString());   // to convert time into string into specified locale

console.log(typeof myDate);

let myCreatedDate = new Date (2025, 0, 14, 11, 3)  // in js as here is array month starts from 0
console.log(myCreatedDate.toDateString());         // for only date
console.log(myCreatedDate.toLocaleString());       // for date and time

let myNewDate = new Date ("2025-01-03");           // for this format
console.log(myNewDate.toLocaleString());

let myTimeStamp = Date.now()                       // for timestamp upto now
console.log(myTimeStamp);
console.log(myCreatedDate.getTime());              // to compare time with of that

console.log(Date.now());                           // for date rn
console.log(Date.now()/1000);                      // for time in seconds 
console.log(Math.floor(Date.now()/1000));          // for a value in integers 

let newDate = new Date
console.log(newDate.getDate());                    // to get only date
console.log(newDate.getDay());                     // to get the day
console.log(newDate.getHours());                   // to get time in hrs
//console.log(newDate.get()); and many more with it

// `${newDate.day is the day today}`

console.log(newDate.toLocaleString('default', {
    weekday: "long",
    day    : "2-digit"
}
));                     // and many things too
