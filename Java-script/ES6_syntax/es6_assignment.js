//question-1
// Refactor the following function into a one-liner:
// const printName = (name) => {
//     return “Hi” + name;
// }


//this is the one linear for the above arrow function
const printName=name=> `hi ${name}`;

//question-2
/*
Rewrite the following code using template literals
const printBill = (name, bill) => {
                     return “Hi “ + name + “, please pay: “ + bill;
           }
*/
const printBill =(name,bill)=>{
     return `hi ${name} , please pay: ${bill}`
}

// question-3
/*Modify the following code such that the object properties are destructured and logged.
const person = {
                      name: “saiprabhu”,
                      age: 21
            }
           
           let name = person.name;
           let age = person.age;
           console.log(name);
           console.log(age);
*/

const person={
    name:"saiprabhu",
    age:21
}

let {name,age}=person;
console.log(name);
console.log(age);