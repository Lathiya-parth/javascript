//promise
console.log("script start");
const bucket = ["cofee","chips","vegetable","salt","Rise"];

const friedRisePromise = new Promise((resolve,reject)=>{
    if(bucket.includes("vegetable") && bucket.includes("salt"),bucket.includes("Rise")){
        resolve("Fried Rise");
    }
    else{
        reject("couldn't do it");
    }
})

//produce



//consume
//how to consume

// friedRisePromise.then(
//     // jub promise resolve hoga
//     (myFriedRise)=>{                         //first type 
//     console.log("let it",myFriedRise);
// },
//   //jub promise reject hoga
// (error)=>{
//     console.log(error);
// })


friedRisePromise.then(
    (myFriedRise)=>{                                 //second type
    console.log("let it",myFriedRise);
}
).catch(
    (error)=>{
    console.log(error)
}) 

// ----------------------

setTimeout(()=>
{
    console.log("Hello from settimeout");
},0)

for(let i=0;i<=100;i++){
    console.log(Math.random(),i);
}

console.log("script end!!!!");