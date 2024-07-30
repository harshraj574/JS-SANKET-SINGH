/*
 class Product{
    constructor(name,price){
        //This is your custom constructor
        this.name = name;
        this.price = price;
    }
}
let iphone  = new Product("iphone 14 pro",120000);
console.log(iphone);

*/





let obj2 ={
    x:1,
    y:2,

    fn: function(){
        x = 3;
        y = 4;
       const printVariables = () =>{
            console.log(this.x,this.y)
             console.log(x,y)

       }
        printVariables()
    }
}
obj2.fn();
console.log(x); // here x and y are available cuz x and y dont have any declaaration so they are golbal scoped variable
console.log(y);