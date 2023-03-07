let p1=new Promise((resolve,reject)=>{
    console.log("helloo..")
    resolve("isuue resolved")
})
p1.then((result)=>{
    console.log(result)
    return  new Promise((resolve,reject)=>{
        console.log("saiprabhu");
        resolve("p2 issue resolved")
    })
}).then((res2)=>{
    console.log(res2)
    return new Promise((resolve,reject)=>{
        console.log("vikram");
        resolve("p3 issue resolved")
    })
}).then((res3)=>{
    console.log(res3)
    reject("issue not resolved")
}).catch((val)=>{
    console.log(val)
})