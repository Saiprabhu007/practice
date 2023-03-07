//classes and objects

class car{
    
    constructor(name,model)
    {
        this.name=name;
        this.model=model;
    }
    display_features()
    {
        console.log(this.name,this.model);
    }
}

// creation of objects
let c1=new car("pluto","i10");


//now accces the methods in car class
c1.display_features();