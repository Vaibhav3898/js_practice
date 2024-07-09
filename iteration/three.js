// for of 

// ["","",""]

// [{},{},{}]

const arr =[1,2,3,4,5]
for(const num of arr){
    console.log(num)
}

const greeting = "Hello World!"
for(const greet of greeting ){
    console.log(`Each char is ${greet}`)
}

const map = new Map()
map.set('In',"India")
map.set('USA',"United State America")
map.set('fr',"France")
map.set('In',"India")
console.log(map)

for(const[key,value] of map ){
    console.log(key,":-",value);
}

// not iterable 
const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
    
// }