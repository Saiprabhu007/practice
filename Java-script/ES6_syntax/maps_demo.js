// Creating  a new map
let myMap = new Map();

// Add some key-value pairs to the map
myMap.set({}, "saiprabhu");
myMap.set(2, "vikram");
myMap.set(3, "yogesh");
myMap.set(4, "manish");
myMap.set(5, "vivek");

//displaying the map
console.log(myMap)

// Getting  the value associated with a key-1
console.log(myMap.get({})); 

// Check if a key exists in the map
console.log(myMap.has(2)); 

// Get the number of key-value pairs in the map
console.log(myMap.size); 

// Delete a key-value pair from the map
myMap.delete(3);

// Iterate over the key-value pairs in the map
for (let [key, value] of myMap) {
  console.log(`${key} = ${value}`);
}

//getting only the keys from the map
for(let keys of myMap.keys())
  console.log(keys)

  //getting only the values from the map
for(let val of myMap.values())
console.log(val)

//converting a map into a array
let arr=Array.from(myMap);
console.log(arr);

//converting a keys of map into a array
let arr2=Array.from(myMap.keys());
console.log(arr2);

//converting a valuesof map into a array
let arr3=Array.from(myMap.values());
console.log(arr3);

// Clear all key-value pairs from the map
myMap.clear();

console.log(myMap);