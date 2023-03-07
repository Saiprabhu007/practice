//rest operator
function add(a,b){
    return a+b;
}
console.log(add(2,3));

// passing more than 2 arguments in

function add2(c,d,e,f){
    return c+d;
}
console.log(add2(1,2,3,4));


//use if rest operator
function mul(num1,...num2){
    var multi=num1;
    for(var i of num2){
        multi=multi*i;
    }
    return multi;
}


console.log(mul(1,2,3,4,5,6));