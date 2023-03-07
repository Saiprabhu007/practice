// Arrays demonstration

let arr=[1,2,3,4,5,6];
let sum=0;
for(let i of arr){
    sum+=i;
}
console.log(sum);
// determining length
console.log(arr.length);
// push element in the array
arr.push(7);
console.log(arr);
//
console.log(arr[0]);
//
arr[0]=8;
//
console.log(arr.indexOf(3));
//
console.log(Array.isArray(arr));