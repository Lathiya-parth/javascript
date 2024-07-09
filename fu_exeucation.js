// function execution context

let foo = "foo";
console.log(foo);
function getfullName(firstName,lastName){
    console.log(arguments);
    let myVar = "var inside func";
    console.log(myVar);
    const fullName = firstName + " " +lastName;
    return fullName;
}

const personName = getfullName("parth","lathiya");
console.log(personName);