// immediately invoked function expression 

// function name iife
(function chai(){
    console.log("DB connected")
}

)();

// unknown name iife
((name)=>{
    console.log(`DB connected 1 ${name}`);

})('vaibhav')