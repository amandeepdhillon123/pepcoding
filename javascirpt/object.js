
let person = {

    name:"amandeep",
    age:"265",
    gender:"male",
    friends:["aman","arma","shyam"],
    address:{
        city:{
            village:"dfsdjfh",
            pincod:1555554
        },
        state:"haryan",
        coubntry:"india"

    }
}
// console.log(person);
console.log(person.friends);
// add 
person.movies=["a1","a2","a3"]
console.log(person)

// remove 
delete person.age ;
console.log(person)