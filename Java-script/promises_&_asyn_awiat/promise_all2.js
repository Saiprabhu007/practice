let p1=new Promise((resolve,reject)=>{
    console.log("helloo..")
    resolve("p1 issue resolved")
})

let p2=new Promise((resolve,reject)=>{
    console.log("hiii");
    resolve("p2 issue resolved")
})
let p3=new Promise((resolve,reject)=>{
    console.log("helloo..")
    reject("p3 issue not  resolved")
})
Promise.all([p1,p2,p3]).then((value)=>{
  console.log(value);
}).catch((error)=>{
    console.log(error)
})