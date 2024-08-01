
let  x = {a:10};

// console.log(x);

// console.log(Object.prototype);

class Product{
    constructor(name,price){
        this.name = name;
        this.price = price;
    }
    display(){
        console.log(this.name,this.price);
    }
}
class Company{
    companyName(){
        console.log("this is company")
    }
}
Company.prototype.__proto__ = Product.prototype;
 


