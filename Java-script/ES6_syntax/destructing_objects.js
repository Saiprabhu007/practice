let details={
    name:"saiprabhu",
    age:21,
    city:"adilabad"
}


// we have to give the same names as they mentioned in the objects
// let {name,age,city}=details;
// console.log(name)
// console.log(age)
// console.log(city)

//we can give aliases to the variables , it is demonstrated below
let details2={
    name2:"dhoni",
    age2:45,
    city2:"ranchi"
}

let {name2 : n, age2 :a,city2 : c}=details2;

console.log(n)
console.log(a)
console.log(c)
