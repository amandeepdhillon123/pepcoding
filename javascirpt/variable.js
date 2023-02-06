var a = "aman";
//   re declared variable 
var a = "ram";

// reassigned varibale 
 a="sanjay"
console.log( a)

// var is function scoper 
function test (){
    var r = "jai ho";
    console.log(r);
}
 test();
// console.log(r);
//  not block scope 
if(true){
    var a= "xyz";
    
}
console.log(a);

// let can not redeclare van do reassign 
let p= "ram";
p="karan";
console.log(p);

// let is block scope 




