
function sum(name,...marks){
  console. log(arguments) ;
  console.log(`Hello ${name} : `);
  

let sum =0;
for(let i in marks){
  sum += marks[i];
 }

console.log(sum) ;

}

sum("saiprabhu", 75, 67, 58) ;