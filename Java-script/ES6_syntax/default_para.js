function multiply(a, b = 1, ...args) {
    let result = a * b;
    for (let number of args) {
      result *= number;
    }
    return result;
  }
  
  console.log(multiply(5));         
  console.log(multiply(5, 2));         
  console.log(multiply(5, 2, 3, 4));   
  