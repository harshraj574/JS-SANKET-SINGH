class A{
    displayA(){
        console.log("this is class A");
    }
}

class B extends A{ //inheritance in classes using extends keyword
    displayB(){
        console.log("this is class B");
    }
}

let obj = new B();
obj.displayA();


