const myPromise = Promise.reject('Something went wrong!');

myPromise.catch((error) => {
  console.error(error); 
});
