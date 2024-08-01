function Events(dateOfEvent) {
    this.dateOfEvent = dateOfEvent;
  }
  
  Events.prototype.bookEvent = function(){
    console.log("booking Event");
  }
  
  
  function Movie(name){
    this.name = name;
  }
//   Movie.prototype.__proto__ = Events.prototype;
  
// let obj = new Movie("deadpool");
// obj.bookEvent();
  
// NOW THERE IS ANOTHER WAY TO GIVE INHERITANCE USING '.CREATE' METHOD
//----> what it does is that it creates a new object using the object passed in the create function

Movie.prototype = Object.create(Events.prototype);

let obj = new Movie("deadpool");
obj.bookEvent();

