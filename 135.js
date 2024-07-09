//promise.resolve
//promise chaining

// const mypromise = Promise.resolve(5);
// Promise.resolve(5).then(value=>{
//     console.log(value);
// })



//then 
//then methodes hamesa promise return karta hai

function mypromise(){
 return new Promise((resolve,reject)=>{
    resolve("foo");
 })   
}

mypromise()
.then((value)=>{
    console.log(value);
    value += "bar";
    return value;
})
.then((value)=>{
    console.log(value);
    value+= "baaz";
    return value;
})
.then((value)=>{
    console.log(value);
})