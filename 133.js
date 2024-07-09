//function returning promise

function ricePromise(){
    const bucket = ["cofee","chips","vegetable","salt","Rise"];
    return new Promise((resolve,reject)=>{
        if(bucket.includes("vegetable") && bucket.includes("salt"),bucket.includes("Rise")){
            resolve("Fried Rise");
        }
        else{
            reject("couldn't do it");
        }
    })
}


ricePromise().then(
    (myFriedRise)=>{                                 
    console.log("let it",myFriedRise);
}
).catch(
    (error)=>{
    console.log(error)
}) 