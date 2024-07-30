class Product {
    constructor(builder) {
        this.name = builder.name;
        if (builder.price > 0 && typeof (builder.price) === "number") {
            this.price = builder.price;
        } else {
            return {};
        }
        this.description = builder.description;
    }
    displayProduct(){
        console.log("Product Displayed",this.name,this.price,this.description);
    }
    getPrice(){
        return this.price;
    }
    get PriceOfProduct(){
        return this.price;
    }

    static get Builder(){
        class Builder{
            constructor(){
                this.name = "";
                this.price = 0;
            }
            setName(incomingName){
                this.name = incomingName;
                return this;
            }
            setPrice(p){
                this.price = p;
                return this;
            }
            build(){
                return new Product(this);
            }
        }
        return new Builder(); //when someone calls the Builder getter they will get a new builder object
    }
   
}

const p =  Product.Builder.setName("iphone").setPrice(100000).build();

console.log(p);
p.displayProduct();
console.log("this is price",p.getPrice());
console.log(p.PriceOfProduct);