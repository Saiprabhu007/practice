let details=["saiprabhu",21,"adilabad"]
// let name=details[0];
// let age=details[1]
// let city=details[2]        // to assign the individual elememts of the array to particular variables this is the process and it is ver complex
// console.log(name);
// console.log(age)
// console.log(city)


// ES6 syntax for destructing
// let [name2,age2,city2]=details;
// console.log(name2)
// console.log(age2)
// console.log(city2)

// let details3=["",21,"adilabad"]
// let [name3,age3,city3]=details3;
// in this case  name3 and city3 will have values of undifined

// we can specify default values also
let details4=["vikram", ,"asifabad"]
let [name4,age4=20,city4]=details4;
console.log(name4)
console.log(age4)
console.log(city4)
