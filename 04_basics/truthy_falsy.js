const usermail = []

if (usermail){
    console.log("Got user mail");

}else{
    console.log("don't have user email");
}

// falsy values
// false,0,-0,BigInt 0n,"",null,undefined,NaN

// truthy values
// '0','false'," ",[],{},function(){}

if(usermail === 0){
    console.log("Array is empty")
}

const emptyobj = {}

if(Object.keys(emptyobj).length === 0){
    console.log("Object is empty");
}

// nullish coalesing operator(??):
// null/undefined

let val1 = 5 ?? 10
console.log(val1)

let val2 = null ?? 10
console.log(val2)

let val3 = undefined ?? 15
console.log(val3)

let val4 = null ?? 10 ?? 20
console.log(val4)

// ternary operator

// syntax
// condition ? true : false

const icecreamPrice = 100
icecreamPrice <= 80 ? console.log("less than 80") : console.log("more than 80");