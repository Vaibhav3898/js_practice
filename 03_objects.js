// bjects 
// object literals

const mysym = Symbol("key1")
const jsuser = {
    name : "Vaibhav", age:24, "full name":"Vaibhav Shinde",
    [mysym]:"mykey1",location:"pune",
    email:"vss@gmail.com"
}
console.log(jsuser["email"])

console.log(jsuser["full name"])
console.log(jsuser[mysym])

// how to change values of object 
jsuser.email = "vss123@gmail.com"

//whenever we want to lock the any value and element then we use freeze method

// Object.freeze(jsuser)
jsuser.email = "vaibhav7775@gmail.com"
console.log(jsuser)

jsuser.greeting = function(){
    console.log("hello jsuser")
}
jsuser.greetingTwo = function()
{
    console.log(`Hello Jsuser, ${this.name}`);
}
console.log(jsuser.greeting());
console.log(jsuser.greetingTwo())