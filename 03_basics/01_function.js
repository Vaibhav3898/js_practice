function sayMyName(){
    console.log("V")
    console.log("a")
    console.log("i")
    console.log("b")
    console.log("h")
    console.log("a")
    console.log("v")
    
}
sayMyName()

// adding Two number programs

function addTwoNumbers(num1,num2){
    console.log(num1+num2)
}
addTwoNumbers(5,7)

// another method

function addTwoNumbers1(num1,num2){
    let result = num1 + num2
    return result
    // or
    // return num1 + num2
}
const result = addTwoNumbers1(5,8)
console.log("result: ",result);
console.log(addTwoNumbers1(5,3))

// function another one program 

function loginUserMessage(userName){

    return (`${userName} just looged in`)

}
console.log(loginUserMessage("Vaibhav"))

// another one example of function
function loginUserMessage1(userName1 = "sam"){
    if (!userName1){
        console.log(`Please enter a user name`)
        return 
    }
    return (`message1 : ${userName1} just logged in`)
}
console.log(loginUserMessage1("vaibhav"))
console.log(loginUserMessage1())

// rest operator 
function calculatePrice1(...num1){
    return num1
}

console.log(calculatePrice1(200,100,400))

// or

function calculateCartPrice3(val1, val2, ...num4){
    return num4
}

console.log(calculateCartPrice3(200, 400, 500, 2000))

// object 
const user = {
    userName: "Viabhav",
    price:199
}
function handleObject(anyobject){
    console.log(`Username is ${anyobject.userName} and price is ${anyobject.price}`);
}
handleObject(user)
handleObject({
    username: "sam",
    price: 399
})
// Array
 const myNewArray = [200,300,400,404]
 function return2ndvalue(getvalue){
    return getvalue[1]
 }
 console.log(return2ndvalue(myNewArray))
//  or
console.log(return2ndvalue([100,4334,22,1]))
