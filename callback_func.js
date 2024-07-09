//callback function

function myFunc2(name){
    console.log("inside my func 2");
    console.log(`your namr is ${name}`);

}
function myFunc(callback){
    console.log("hello there I am a func and I can...");
    callback("parth");
}

myFunc(myFunc2);