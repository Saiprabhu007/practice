
// let a=10;
const x=(value)=>{
    let a=1;
    console.log(a);
     
    const y=()=>{
        // let a=2;
        console.log(a);
        console.log(value)
        const z=()=>{
            // let a=3;
            console.log("i am from z arrow function");
        }
     return z;
       
    }
     return y;
     let c=y();
//    console.log(a);
}
// a=200
let b=x(200);
b();