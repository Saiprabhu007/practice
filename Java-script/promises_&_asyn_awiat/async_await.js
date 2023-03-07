let result=function(score)
{
    return new Promise((resolve,reject)=>{
          console.log("calculating the results...please wait")
          if(score>80)
           resolve("you are passed with A grade")
           else
           reject("you got less garde or fail")
    })
}
let grade=function(response){
    return new Promise((resolve,reject)=>{
        console.log("claculating your grade..")
        resolve("your garde is :"+ response)
    })
}

// result(50).then((res)=>{
//     console.log(res);
//     return grade(res);
// }).then((gra)=>{
//     console.log(gra)
// }).catch((res2)=>{
//     console.log(res2)
// })


let calc_results= async function(){
    try{
        let response= await result(5)
        console.log("results recieved")
        let grades= await grade(response);
        console.log("grade is awarded");
    }
    catch(error){
        console.log(error)
    }   
}

calc_results();

