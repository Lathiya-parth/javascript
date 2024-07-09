function hello(){
        console.log("hello world");
}

//javascript function  ====> function  + object

//console.log(hello.name);

//you can add your own properties 
//hello.myOwnproperty = "very unique value";
//console.log(hello.myOwnproperty);

//name property ---> tells function name;

//function provides more usefull properties.


//console.log(hello.prototype);  //{}

// only function provide prototype property

hello.prototype.abc = "abc";
hello.prototype.xyz = "xyz";
hello.prototype.sing = function(){
    return "lalala";
}
console.log(hello.prototype.sing());