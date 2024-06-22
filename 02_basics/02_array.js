const marvel_heros = [
    "thor", "IronMan", "Spiderman"
]
const dc_heros = ["Superman", "flash", "batman"]

marvel_heros.push(dc_heros)
// console.log(marvel_heros)
// console.log(marvel_heros[3][1])

const all_Heros = marvel_heros.concat(dc_heros)
// console.log(all_Heros)

// Spride operator
const all_new_Heros = [...marvel_heros,...dc_heros]
// console.log(all_new_Heros)

 // flat()
 const another_Array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
 const real_another_Array = another_Array.flat(Infinity)
 console.log("Flat arry   ",real_another_Array)

 console.log("isArray    "
    ,Array.isArray("vaibhav"))

// from()

console.log(Array.from("Vaibhav"))

console.log(Array.from({name: "Vaibhav"}))

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1,score2,score3));