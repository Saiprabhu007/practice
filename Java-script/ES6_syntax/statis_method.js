// class student{
//     static marks(){
//         console.log("8.1 cgpa");
//     }
// }

// student.marks();


// class car{
//     static model(){
//         console.log("swift desire")
//     }
//     static model(){
//         console.log("vento i20");
//     }
// }

// car.model();

// class phone{
//     constructor(){
//         this.name="iphone-13";
//         this.price=120000;
//     }
//     display(){
//         console.log(this.name,this.price)
//     }
//     static show(){
//         display();
//     }
// }

// let p= new phone();
// p.display();


class demo{
    constructor(){
        console.log(" hello i am a constructor")
    }
    display(){
        console.log("this is display method")
    }
    static show(){
        console.log(" i am show method")
    }
}

let d= new demo()
d.display();