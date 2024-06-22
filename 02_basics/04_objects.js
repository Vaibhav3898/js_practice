// singletone object
const tinderuser = new Object()

// not singletone object
const tinderuser1 = {}

console.log(tinderuser)
console.log(tinderuser1)

tinderuser.Id = "123abc"
tinderuser.Name = "vaibhav"
tinderuser.islloggedIn = false

console.log(tinderuser)

const regularUser = {
    email: "Vss@gmail.com",
    fullName:{
        firstName:"Vaibhav",
        lastName:"Shinde"
    },
}
console.log(regularUser.fullName.firstName)

const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"a",4:"b"}
const obj6 = {5:"a",6:"b"}
// const obj3 = {obj1,obj2}
// in that above condition got a one problem there is nested array got 

// object.assign() method
const obj4 = Object.assign({},obj1,obj2)
console.log(obj4)

// spread oeprator for elementing object
const obj7 = {...obj1,...obj2}
console.log(obj7)

console.log(tinderuser)

console.log(Object.keys(tinderuser))

console.log(Object.values(tinderuser))

// console.log(object.entries(tinderuser))
// to check the elements are present or not in object

console.log(tinderuser.hasOwnProperty("islloggedIn"));

//object destructor

const course = {
    courseName: "javaScripts",
    price:"999",
    courseInstructor:"Vaibhav"
}
const {courseInstructor} = course
console.log(courseInstructor)


const {courseInstructor:instructor} = course
console.log(courseInstructor)
console.log(instructor)

// json file  format used in Api
{
    "name":"Vaibhav",
    "course":"JS",
    "price":"free"
}
 