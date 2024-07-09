//synchronous progarmming vs asynchronous progrmming
//schronous programming
//schronous programming single threaded


// console.log("script start");

// for(let i=0; i<1000; i++){
//     console.log("inside for loop");
// }

// console.log("script end");

//setTimeout

console.log("script start");

const id = setTimeout(()=>{
    console.log("inside setTimeout");
},1000);

for(let i=1; i<100;i++){
    console.log("....");
}
console.log("setTimeout id is ", id);
console.log("clearing time out");
clearTimeout(id);
console.log("script end");