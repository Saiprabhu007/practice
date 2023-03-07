let mySet = new Set();
mySet.add('a');
mySet.add('b');
mySet.add('c');
mySet.add('d');
mySet.add('e');
mySet.add('f');
mySet.delete('a');
console.log(mySet.has('a')); 
console.log(mySet.has('b')); 
console.log(mySet.size); 
for (const element of mySet) {
    console.log(element);
  }
  
  let myArray = Array.from(mySet);
  console.log(myArray); 
    