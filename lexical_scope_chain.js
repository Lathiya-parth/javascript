//lexical environment, scope chain

const lastName = "lathiya";

const printName = function(){
    const firstName = "parth";
    function myFunction(){
      console.log(firstName);
      console.log(lastName);
    }
myFunction()
}

printName();