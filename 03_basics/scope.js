// Function scope

let a = 400

if (true){
    let a = 10
    const b = 20
    var c = 300
    console.log("Inner a: ", a)
}
console.log(a)
// console.log(b)
// here got an error because of b varaible is declared in local scope 

console.log(c)
// in there run a code because varaible declaration in var

function one(){
    const username = "Vaibhav"
    function Two(){
        const website = "YouTube"
        console.log(username)
    }
    Two()

}
one()

// another one program
if(true){
    const username = "Vaibhav"
    if(username === "Vaibhav"){
        const website = "  YouTube"
        console.log(username+website)
    }
    console.log(username,"2")
}

// ******intresting (HOsting)******

console.log(addOne(5))

function addOne(num){
    return num + 1

}

// console.log(addTwo(4))
// if we call it before declartion it gives an error because of hosting
// Because in there fuction is stored in variable

const addTwo = function(num){
    return num + 2
}
console.log(addTwo(4))
