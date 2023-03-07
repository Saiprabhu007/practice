// passing an object as parameter in function

function areaOfRectangle( {l,b} ) {
    return l * b;
 }
 let rectangle = {
    l: 22,
    b: 10
 };
 console.log(areaOfRectangle(rectangle));