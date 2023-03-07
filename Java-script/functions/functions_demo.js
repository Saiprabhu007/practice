// demonstration of function

function greet(){
    console.log("hello dear");
}

greet();

function hii(val)
{
    return "good morning "+val;
}

console.log(hii("prabhu"));

const wish=function(name){
    return "Happy birthday "+ name +" have a great year ahead";
}

console.log(wish("yogesh"));


// arrow function reduces the code and makes it readable

//if there is only one statement , we can omit the brackets also .
const z=()=> console.log("i am arrow function");

z();

//

const sum=(a,b)=> {
    let c=a+b;
    return c;
};

console.log(sum(2,3));