const product = {name: "iphone 15", price: "10000", category: "Mobiles"};

const {name,price,category} = product; //destructuring the keys from the object

console.log(name);




// USING SPREAD OPERATOR TO DESTRUCTURE THE OBJECT INSIDE ANOTHER OBJECT
const purchasedProduct = {orderId : "xyz123", orderDate : "30/07/2024",...product};
// here the purchasedProduct has been 
console.log(purchasedProduct);
