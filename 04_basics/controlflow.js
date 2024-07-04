isuserLoggin = true
const temprature = 41

if (temprature === 41){
    console.log("less than 50");
}else{
    console.log("Temprature is greater than 50");
}
console.log("exicuted ")

const score = 200
if(score > 100){
    let power = "Fly";
    console.log(`user power: ${power}`);
}

const balance = 1000
if(balance>500) console.log("test"), console.log("test2")

if (balance<500){
    console.log("less than 500")
}
else if (balance <750 ){
    console.log("Less than 700");
}
else if (balance <900){
    console.log("less than 900")
}
else{
    console.log("less than 1200");
}

const userLoggedIn = true
const debitCard = true
const loggedInfromGoogle = false
const loggedInfromEmail = true

if (userLoggedIn && debitCard){
    console.log("Allow to buy course");
}
if (loggedInfromEmail || loggedInfromGoogle){
    console.log("user logged in");
    
}