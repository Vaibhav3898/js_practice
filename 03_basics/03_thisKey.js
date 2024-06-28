const user = {
    username : "Vaibhav",
    price : 999,
    welcomeMessage : function(){
    (`${this.username}, welcome to website`);
    console.log(this)
}}
user.welcomeMessage()

user.username = "Raj"

user.welcomeMessage()
// this keyword refers to an object
// it is refers current cuntest

console.log(this)

function chai()
{
    let username = "Vaibhav"
    console.log(this.username)
}
chai()
// undefined out put
// because this keyword refers only objects

//or 

const chai1 = function(){
    let username = "Vaibhav"
    console.log(this.username)
}
chai1()

// Arrow Function () => {}

const addtwo = (num1,num2) => num1 + num2

console.log(addtwo(2,3))

// or
const addtwo1 = (num1,num2) => (num1+num2)
console.log(addtwo1(3,5))
// object return method

const addtwo2 = (num1,num2) => ({username:"Vaibhav"})
console.log(addtwo2(5,7))