console.log("task-1")  //micro-task

console.log("task-2") // micro-task

setTimeout(()=>{                   
    console.log("task-3")      //macro-task
},0)

let p1=new Promise((resolve,reject)=>{
    resolve("task-4")                          //micro-task
})

p1.then((res)=>{
    console.log(res)
})
