let p1=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        // console.log("helloo..")
    resolve("p1 issue resolved")
    },4000)
})

let p2=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        // console.log("hiiii.")
    resolve("p2 issue resolved")
    },3000)
})
let p3=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("greet..")
    reject("p1 issue resolved")
    },1000)
})
Promise.race([p1,p2,p3]).then((value)=>{
    console.log(value)
})