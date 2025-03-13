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