function getData(uId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("Fetched the data!");
        resolve("skc@gmail.com");
      }, 4000);
    });
  }
async function getEmail() {
    const email = await getData("skc");
    console.log("Email id of the user id is: " + email);
    console.log("end");
  }
  
  console.log("start");
  getEmail();
  