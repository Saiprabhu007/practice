let p1=new Promise((resolve,reject)=>{
    resolve("p1 issue resolved")
})

let p2=new Promise((resolve,reject)=>{
    resolve("p2 issue resolved")
})
let p3=new Promise((resolve,reject)=>{
    reject("p3 issue not  resolved")
})

Promise.allSettled([p1,p2,p3]).then((result)=>{
    console.log(result)
})