// to safely access nested properties and methods of an object, even if one of the intermediate properties does not exist. In other words, it provides a convenient way to avoid errors that would occur if you try to access a property or method of an object that is null or undefined.
//The optional chaining operator is a question mark (?) followed by a dot (.) and is placed immediately before the property or method that you want to access. For example, consider the following code:


const user = {
    name: 'John',
    address: {
      city: 'New York',
      zipcode: 10001
    }
  };
  
  const city = user.address.city; // 'New York'
  const state = user.address.state; // Cannot read property 'state' of undefined
  console.log(user.address.city);
  console.log(user.address?.street);  