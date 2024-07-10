const coding = ["Js","rubby","Java","Python","CPP"]

coding.forEach(function(val){
    console.log(val);
})

// Arrow Function

coding.forEach((item)=>{
    console.log(item)
}
)

function printMe(item){
    console.log(item);

}
coding.forEach(printMe)

coding.forEach((item,index,arr)=>{
    console.log(item,index,arr);

})

const myObject = [{
    languageName:'Javascripts',
    languagefileNAme:'js'
},
{
    languageName:'Python',
    languagefileNAme:'py'
}
]
myObject.forEach((item)=>{
    console.log(item.languageName)
})