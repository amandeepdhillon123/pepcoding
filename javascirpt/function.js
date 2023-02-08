
function name(){
    console.log("dkmfkdmg");
}
name(); 

function sum(a,b)
{
    console.log(a+b);
}

sum(5,7);

// function expression  
let sub = function(a,b){
    console.log(a-b)
}

sub(7,5);

// immediate function expression invocation 


let muti =(function(a,b){
    console.log(a*b)
}(3,4));

// return 

function ram(a,b){
    return a+b;

}
let add =ram(4,5);
console.log(add);