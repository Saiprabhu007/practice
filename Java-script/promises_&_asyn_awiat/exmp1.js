let promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
      reject('Error occurred in promise1');
    }, 1000);
  });
  
  promise1.then((res)=>{
    console.log(res)
  }).catch((res2)=>{
    console.log(res2)
  })
  
 
  