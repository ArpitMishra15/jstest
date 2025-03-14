// Objects singleton or constructor

//methods to declare
const tinderUser1= new Object()
const tinderUser2 = {}

console.log(tinderUser1);
console.log(tinderUser2);

const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sam"
tinderUser.isLoggedIn = false

console.log(tinderUser)

//New way with object in object

const regularUser = {
    email : "spj@gmail.com",
    fullName : {
        userFullName : {
            firstName: "Arpit",
            lastName: "Mishra"
        }
    }
}

console.log(regularUser.fullName.userFullName.firstName);

// combining these objects

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

// methods to combine
const obj3 = {obj1, obj2}                       //This method is not very useful
console.log(obj3);
// other method, it combines the objects
const obj4 = Object.assign({}, obj1, obj2)      //This method is useful and widely used, to add {} for better(optional)
console.log(obj4);
// another method
const obj5 = {...obj1, ...obj2, ...obj3}
console.log(obj5);                              // This method is the most used in production

// When data comes from databases

const newUsers = [                               // It comes as array of objects
    {
        id: 1, 
        email: "a@gmail.com", 
    },

    {
        id: 2, 
        email: "b@gmail.com", 
    }
]

newUsers[1].email
console.log(tinderUser);                                                // to print

console.log(Object.keys(tinderUser));                                  // to print keys
console.log(Object.values(tinderUser));                                // to print values
console.log(Object.entries(tinderUser));                               // to print entries in the objects

console.log(tinderUser.hasOwnProperty('isLoggedIn'));                  //check if the object has property of specific name                   
