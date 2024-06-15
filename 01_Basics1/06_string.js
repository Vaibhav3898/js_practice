// string
// - string are storing texts
// -string are written in quotes
// -A javascripts string is zero or more characters written inside quotes

let text="vaibhav shinde";

// #string length
// to find the length iof string use bult-in length property 

let len=text.length;
console.log(len);

const name = "vaibhav"
const repoCount = 2

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`)
// this is the technique now days highly used in js

const gameName = new String("vaibhav_shinde")

console.log(gameName[0])
console.log(gameName.__proto__);
//
console.log(gameName.length);
console.log(gameName.indexOf('b'));

console.log(gameName.toUpperCase())

console.log(gameName.charAt('b'))

const newstring = gameName.substring(0,4);
console.log(newstring);

const anotherString = gameName.slice(-8,4)

console.log(anotherString)

const newString = "    vaibhav    "
console.log(newString)
console.log(newstring.trim())

const url = "https://vaibhav.com//vaibhav%20shinde"
console.log(url.replace("%20","-"));
console.log(url.includes("ajay"))
//checking the name is include or not
console.log(gameName.split('-'));