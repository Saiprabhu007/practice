const promise1 = new Promise((resolve, reject) => {
  setTimeout(()=>{
    reject("one")
  },50)
});
const promise2 = new Promise((resolve, reject) => {
  setTimeout(()=>{
    resolve("two");
  },500)
});

const promise3 = new Promise((resolve, reject) => {
  setTimeout(()=>{
    resolve("three");
  },300)
});

Promise.any([promise1, promise2, promise3]).then((value) => {
  console.log(value); 
}).catch((reasons) => {
  console.error(reasons);
  
});
