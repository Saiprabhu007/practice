function divideNumbers(num1, num2) {
    try {
      if (num2 === 0) {
        throw new Error('Cannot divide by zero');
      } else {
        return num1 / num2;
      }
    } catch (error) {
      console.error('Error:', error);
    }
  }
  
  console.log(divideNumbers(10, 5));
  console.log(divideNumbers(10, 0)); 
  