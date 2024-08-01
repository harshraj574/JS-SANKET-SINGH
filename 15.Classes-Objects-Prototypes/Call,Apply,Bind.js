
// -------> CALL FUNCTION
let obj = {
    name: "Harsh",
    greet: function(greetMessage,greetMessage2){
      console.log("my name is " + this.name, greetMessage,greetMessage2);
    }
  }
  
  // obj.greet();
  
  //now if we want to change the 'this' keyword and make it point to someother object then use call function
  
  //lets define a anew object
  
  let obj2 = {
    name: "rakesh"
  }
  
  
  obj.greet.call(obj2,"welcome to india","Enjoy your stay!"); // so now this keyword points to the obj2 object
  
  
  //now if the function had arguments then in call method we pass them in the call function itself
  
  let obj3 = {
    name: "trishla" 
    }
    //using BIND fucntion it does the same thing as apply but rather than executing the function
    // suddenly it returns a new function which can be used anywhere possible
    let f = obj.greet.bind(obj3);
    f("hello","welcome");
    
    //so using APPLY it works similar to call but instead of taking n arguments its just take 2 first, 
    //the new object we want it to bind it to and 2nd) an array which will have all
    // the parameters of the called funnction here "greet" 
    obj.greet.apply(obj3,["calling using","apply function"]);

    //now if we want that the arrow function's 'this' keyword also points normally then what we can do is to
    //wrap the arrow function inside a normal function and then call the arrow func inside then 'this'
    //of arrow function will resolve lexically and will point to the object in which outer normal function is
    //is defined
    let arrowObj = {
      name: "harsh",
      display: function (){
        const arr = ()=>{
          console.log(this.name);
        }
        arr();
      }
    }
    arrowObj.display();

    



    
    
    
    