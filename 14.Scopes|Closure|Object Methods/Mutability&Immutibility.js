 
     //     MUTIBILITY AND IMMUTIBILTY IN JS 

/*
  In most of the programming languages Mutability and Immutabiluty exists.
*/

let x = 100;
x = 99;
/*
 in the above code we initalize a variable x wikt value 10, then later on we are able to update it to 99.
 This mechanism of being able to update / modify a variable's value is called as mutability.
  ->If we can update a variable's value then it is mutable.
  ->If we cannot modify the value of a variable then it is Immutable.
*/
const y = 100;
// y = 99; // this cannot be done as it is defined as a const

/*
  Making immutable values with const

We can use const based initialisations for our variables to make them immutable. If we have a
variable initialised by const then we will not be able to update / modify / reassign a value to the
same variable.
 const y = 100;
 y = 99;
 Then the above code throws the following error:
 TypeError: Assignment to constant variable.
  at <anonymous>:1:3

One more interesting fact about const based initialisation is that, we cannot leave a const
variable undefined. Like it's not possible to just declare the variable and leave it. You have to
give some initialisation value be it a number, undefined, null etc
The following code throws an error:
const z;
This code throws an error saying:
SyntaxError: Missing initializer in const declaration

But we can do something like this:
const z = undefined;
The above code works now.
*/

/*
   WHY DO WE NEED IMMUTABILITY?

There are a lot of places in programming where immutability becomes extremely important.
Let's say we have a DB connection, there are very less cases where we want to update the
configuration of this DB connection. Most of the time, once the connection object is setup we
don't want to change it, this is a good example of immutability requirement.

Let's say you have some secret keys being used in your project, we don't want any piece of
code to be able to manually change them once they are initialised, again a requirement of
immutability.

Pros:
-> Makes important configurations non-modifiable
-> Less complex to manage
-> Less memory needed

Cons:
-> We need to always keep in mind what to make mutable and what to make immutable.
-> Handling it in objects is tricky.
*/
   
/*
  WHY IS IT TRICKY TO HANDLE IMMUTABILITY IN OBJECTS?

  ->if we have a const based initializtion of an object that doest make the object fully immutable
  ->if we have const based object then we can update a value of a key and also add a new (key,value) pair to the object
*/
const obj = {
    x: 10,
    y:10
}
/*
   obj.x = 20; // we can update a valud of the key even when it is defined using const
   console.log(obj); // 
   obj.z = 30;// we can even add a new (key,value) pair to the 
   console.log(obj); // 

   SO WHAT IS CONST DOING?
   -> const mainly stops reassignment of variables.It will throw error when we try to assign an absolutely new object to our
   variable 
   we can't do this- >  obj = { a:10, b:20 };
*/
// obj = { // -> ** this cant be done we are assigning obj to a new object/number/or a anything
//     x: 10,
//     y: 10
// }
// console.log(obj);

/*
Whenever we make an object, the variable bucket stays in the stack memory, but object is
created in the heap memory of the process (heap is a big pool of unstructured memory) and the
reference of the object is stored in the variable bucket (by storing the address).

So, if we try to reassign a new object, then we are changing the reference and that's not
allowed by const.
So technically, with const objects are not fully immutable
*/


/*
 ## CAN WE MAKE OBJECTS FULLY IMMUTABLE
-> yes, there are methods like Object.freeze,Object.seal which help in making the object fully immutable 

*/

/*
  #1 Object.seal()
 ->This takes one argument i.e the object we want to make immutable.
 ->This methid will help us to make sure we are not able to add new key,value pairs as well as not remove existing 
 key,value pairs from the object.
 ->But it will allow us to update a existing key,value pair from the object.

*/
/*
 const product = {
    name: "Iphone",
    company: "Apple",
 }
 Object.seal(product); // we are sealing the obejct
 delete product.name; // now cannot delete a key,val pair from object
 console.log(product);

 product.price = 120000; // cannot add new key,val pair to a sealed object
 console.log(product); //this will just console the original matrix product

 product.company = "Apple Inc"; //this can be done as we are updating the value of a key,val pair that already exit in the object
 console.log(product);
*/

/*
  Now to make a Object fully immutable we use a function Object.freeze(obj);
  
  -> we wont be able to add new key,value pairs
  -> we wont be able to delete key,value pairs from the obj
  ->we wont be able to update a key,value from the obj when it is frozen

*/

/*
const obj2 = {x:10, y:20};
Object.freeze(obj2);
 obj2.x = 20;
 console.log(obj2); //  so now u can see that the value of x did not change in the object obj2
 obj2.z = 30; // even adding a new key,value pair doesnt work 
 console.log(obj2); // 
 */

 /*
   There are functions like isFrozen(obj) , isSealed(obj) -> this will hellp us in checking whether a obj has been freezed or sealed
 */


/*
 ->Now there is a fucntion using which u can acheive 50% of .seal method
                            Object.preventExtension
            ->This method helps us to achieve 50% of what seal gives us.
            ->We cannot add new key value pairs
            ->We can remove existing key value pairs.
            ->Update is allowed.   
   */
/*
 const prevExe = {
        a: 10,
        b : "harsh"
    };
    Object.preventExtensions(prevExe);
    prevExe.c = 10; // you cannot add to the obj
    console.log(prevExe);
    // delete prevExe.b; // but u can delete a key,value from the obj 
    // console.log(prevExe);
    prevExe.a = 20; // updating the key,value is still possible when using preventExtension
    prevExe['b'] = "Harsh";
    console.log(prevExe);
*/

/*
 This function is very powerful as it gives us granular control on make any particular set of key
 value pairs (from all the available pairs) as writable or configurable.
 Writable means, can we update the key value pair or not ?
 Configurable means, can we update key value pair or not ?
 This method takes first argument as object, second argument as the key which we want to work
 on and then third argument is a new object which has configurable and writable booleans. 
*/

const defProp = {
  a:10,
  b:20
}
Object.defineProperty(defProp,'a',{writable:false}) //so here we made the key a not-writabeble

defProp.a = 20;
console.log(defProp);
defProp.c = 30; //still can add a new key
// console.log(defProp);
//but b is still writeable
// defProp.b = 30; // so b is still updating
// console.log(defProp);
// delete defProp.a;  //but we can delete the property still 
// console.log(defProp);

const confProp = {a:10,b:10};

// Object.defineProperty(confProp,'a',{configurable: false});
// confProp.a = 20;
// console.log(confProp);
// delete confProp.a; // if configurable is flase it wont let u delete that key
// console.log(confProp);
// confProp.c = 30;
// console.log(confProp);


/*
 -> NOW IF WE WANT TO MAKE OUR OWN Object.freeze() then we need to combine ObjectProperty and
 prevent extensions so that both updating and deleting is not allowed and also u cant add  new
 key,value pair.
*/
const finalProduct = {
  name: "Iphone 15",
  price: 150000,
  company: "Apple"
}

let ans  = Object.keys(finalProduct); //get all the keys and iterate on them
console.log(ans);
for(let i=0;i<ans.length;i++){
  //using this all the keys in the obj is not updateble and cannot be deleted
  Object.defineProperty(finalProduct,ans[i],{configurable:false, writable:false});
}
Object.preventExtensions(finalProduct);//now using this no new key,value pair can be added to the obj

finalProduct.name = "harsh"; //cant do anything
console.log(finalProduct); 
delete finalProduct.company; //cant delete a key,value
console.log(finalProduct); // nothing gets deleted
finalProduct.warranty = "1 year"; //cant add a new key,value pair
console.log(finalProduct); // same as before 
