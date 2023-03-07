let c = function(value) {
    let p1 = new Promise((resolve, reject) => {
      if (value == true) {
        resolve("value is true");
      } else {
        reject("value is not true");
      }
    });
    p1.then((result) => {
      console.log(result);
    }).catch((error) => {
      console.log(error);
    });
  };
  
  let val = false;
  c(false);
  