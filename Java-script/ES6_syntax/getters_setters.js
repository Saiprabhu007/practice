// let person = {
//     firstName: "sai",
//     lastName: "prabhu",
//     get fullName() {
//       return `${this.firstName} ${this.lastName}`;
//     },
//     set fullName(value) {
//       let parts = value.split(" ");
//       this.firstName = parts[0];
//       this.lastName = parts[1];
//     }
//   };
  
//   console.log(person.fullName); 
  
//   person.fullName = "shiva prasad";
//   console.log(person.firstName); 
//   console.log(person.lastName); 
  


  let person = {
    firstName: "sai",
    lastName: "prabhu",
    get fullName() {
      return `${this.firstName} ${this.lastName}`;
    },
    set fullName(value) {
      this.firstName = value.fn;
      this.lastName = value.ln;
    }
  };
  
  console.log(person.fullName); 
  
  person.fullName = {fn:"shiva", ln:"prasad"};
  console.log(person.firstName); 
  console.log(person.lastName); 
  