console.log(this);
console.log(window);
console.log(myFunction);
console.log(fullName);

function myFunction(){
    console.log("this is my function");
}

var firstName = "parth";
var lastName = "lathiya";
var fullName = firstName + " " + lastName;
console.log(fullName);