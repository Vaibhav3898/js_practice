// Array
const myArr = [0,1,2,3,4]

const myHeros = ["srk", "rutik","sanjay datt" ]

const myArr2 = new Array(1,2,3,4)

console.log(myArr[1])

// Array Methods

myArr.push(6)
console.log("push  ",myArr);
myArr.pop()
console.log("pop  ", myArr);

myArr.unshift(8)
console.log("unshift  ",myArr)

myArr.shift()
console.log("sift  ",myArr)

console.log("INCLUDES ",myArr.includes(5))

console.log("indexof ", myArr.indexOf(4))

const newArr = myArr.join()
// converting the array object to string
console.log(typeof myArr)
console.log(typeof newArr)

// slice and splice

console.log("A ",myArr)

const myn1 = myArr.slice(1,3)
console.log("slice ",myn1)

console.log("b ",myArr)

const myn2 = myArr.splice(1,3)
console.log("splice ", myArr)

console.log(myn2)