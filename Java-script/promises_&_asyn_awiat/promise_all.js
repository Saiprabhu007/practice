let p1=new Promise((resolve,reject)=>{
    console.log("helloo..")
    resolve("p1 issue resolved")
})

let p2=new Promise((resolve,reject)=>{
    console.log("hiii");
    reject("p2 issue  not resolved")
})
Promise.all([p1,p2]).then((value)=>{
  console.log(value);
}).catch((error)=>{
  console.log(error);
})
