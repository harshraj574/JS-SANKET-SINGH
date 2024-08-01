// Now if we have a class B which inherits from Class A then if want to call the constructor
//of class A from class B then we call the super function in class B it is like calling the
// constructor of class A

class A{
    constructor(eventDate){
        this.eventDate = eventDate;
    }
}

class B extends A{
    constructor(eventName,eventDate){
        super(eventDate); //here super function is like the constructor for the class A can have to be called 
        this.eventName = eventName;
    }
}

let movie = new B("deadpool","10-10-2024");
console.log(movie);