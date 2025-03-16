//Destructuring

const course = {
    coursename: "JS",
    price: "999",
    courseInstructor: "Hitesh",

}

console.log(course.courseInstructor);                                       // Not very clean method 

const {courseInstructor} = course
console.log(courseInstructor);                                              // More clean way

const {courseInstructor: instructor} = course                               // A way to rename
console.log(instructor);

//Values of api comes in JSON(earlier it used to be in XML) and both keys and values are usually strings
// and sometimes json comes in array. JSON = JavaScript Object Notation
