function Product(n, p, d) {
    this.name = n;
    this.price = p;
    this.description = d;
    
    this.displayProduct = function() {
        console.log("Name:", this.name, "Price", this.price, "description:", this.description);
    }

    
}
//   -> SO CLASSES ARE NOTHING BUT JUST A WRAPPER OVER THE FUCNTIONS WE CAN CREATE A OBJECT USING
//    FUNCTIONS ITSELF.

let a = new Product("macbook", 12500, "Apple macbook");
console.log(a);
a.displayProduct();