let p1= new Promise(function(resolve,reject){
    setTimeout(()=>{
        console.log("hello");
        resolve("problem resolved")
    },3000);

});

p1.then((result)=>{
  console.log(result);
 })