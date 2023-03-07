//

let user={
    student:{
        name:"saiprabhu",
        roll:124
    },
    teacher:{
        name:"",
        sub:"maths"
    }
}
// console.log(user.student.name);

//if the name property inside the teacher property is null

let name1=user.teacher.name || "vikram";
// console.log(name1);
//
let name2=user.teacher.name??"akhil";
// console.log(name2);

//example-2

let stu={
    // marks:0,
    sub:"maths"
}

// let m=stu.marks|| 20;
// console.log(m);
m=stu.marks??29;
console.log(m);