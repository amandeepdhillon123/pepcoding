
// collection of data in key value pairs 

let obj ={
    name:"amandeep",
    age :25,
    vpo:"dahola " 
 }
//  console.log(obj);

let aman ={
    name:"aman",
    age :25,
    firne:["ram","shyam"],
    address:{

        coutry:"indias",
        state:"haryana",
        city:{
            ciyt:"delji",
            pin:"233512"
        }
    },

    informstionb:true



}

// console.log(aman);

// accessing properties 

// dot notation .

let age = aman.age;
console.log(age);

let freind= aman.firne[1];
console.log(freind)

let rin= aman.address.city.pin
console.log(rin);

aman.movie=['djnjd',"dsjdjskdnjsk"]
console.log(aman)

delete aman.movie;

console.log(aman)