const myNums = [1,2,3]

let myTotal = myNums.reduce(
    function(acc,curval){
        console.log(`acc: ${acc} and curval: ${curval}`)
        return acc+curval
    },0)
console.log(myTotal)

// arrow function
 
myTotal = myNums.reduce((acc,curval) => acc+curval,0)

console.log(myTotal)


const shoppingCart =[
    {
        itemName:"Python Course",
        price: 999
    },
    {
        itemName:"Java Scripts",
        price:3999
    },
    {
        itemName:"Data Science",
        price:12999
    }]
const priceToPay = shoppingCart.reduce((acc,item)=>acc+item.price,0)
console.log(priceToPay)