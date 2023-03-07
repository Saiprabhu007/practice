try{
    let json ='{"age":30}';
    let user = JSON.parse(json);
    
    if(!user.name)
      throw new Error("Incomplete data : No name") ;
    
        console. log(user.name) ;
        console. log(user.age) ;
        }
     catch(error){
         console. log(error.message) ;
     }
      finally{
       console.log("done..");
    }
    