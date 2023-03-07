function divideNumbers(num1, num2) {
    return new Promise((resolve, reject) => {
      if (num2 === 0) {
        reject('Cannot divide by zero');
      } else {
        resolve(num1 / num2);
      }
    });
  }
  
  divideNumbers(10, 5)
    .then(result => {
      console.log('Result:', result);
    })
    .catch(error => {
      console.error('Error:', error);
    });
  
  divideNumbers(10, 0)
    .then(result => {
      console.log('Result:', result);
    })
    .catch(error => {
      console.error('Error:', error);
    });
  